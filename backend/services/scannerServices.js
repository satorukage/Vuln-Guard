services:

  traefik:
    image: traefik:2.10
    container_name: traefik
    restart: always
    networks:
      - zap-network
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - "/var/run/docker.sock:/var/run/docker.sock:ro"
      - "./traefik.yml:/traefik.yml:ro"
      - "./acme.json:/acme.json"
    labels:
      - "traefik.enable=true"
      - "traefik.docker.network=zap-network"
      - "traefik.port=80"

      - "traefik.http.routers.traefik.rule=Host(traefik.bluetech.software)"
      - "traefik.http.routers.traefik.service=api@internal"
      - "traefik.http.routers.traefik.entrypoints=websecure"
      - "traefik.http.routers.traefik.tls.certresolver=letsencrypt"
      - "traefik.http.routers.dashboard.tls=true"

  worker:
    build: .
    container_name: scan_worker
    dns:
      - 8.8.8.8
      - 8.8.4.4
    restart: unless-stopped
    depends_on:
      postgres:
        condition: service_healthy
      zap:
        condition: service_started
    env_file:
      - .env
    environment:
      - DATABASE_URL=postgresql://novus:Juan2010@postgres:5432/vurnerDB
      - NODE_ENV=development
    command: |
      sh -c "
        echo 'Installing dependencies...' &&
        npm install --no-optional &&
        echo 'Running database migrations...' &&
        npx prisma migrate deploy &&
        echo 'Generating Prisma client...' &&
        npx prisma generate &&
        echo 'Starting AutoScanWorker...' &&
        npx ts-node src/worker/AutoScanWorker.ts
      "
    volumes:
      - .:/app
      - worker_node_modules:/app/node_modules
    networks:
      - zap-network


  backend:
    build: .
    container_name: backend-container
    dns:
    - 8.8.8.8
    - 8.8.4.4
    restart: always
    volumes:
      - .:/app:delegated
      - backend_node_modules:/app/node_modules
    ports:
      - 3000:3000
    environment:
      - DATABASE_URL=postgresql://novus:Juan2010@postgres:5432/vurnerDB
      - NODE_ENV=development
    depends_on:
      postgres:
        condition: service_healthy
      zap:
        condition: service_started
    networks:
      - zap-network
    command: |
      sh -c "npm install && npx prisma generate && npx prisma migrate deploy && npm run build && npm start"
    labels:
      - "traefik.enable=true"
      - "traefik.docker.network=zap-network"
      - "traefik.http.routers.backend-http.rule=Host(security.bluetech.software)"
      - "traefik.http.routers.backend-http.entrypoints=web"
      - "traefik.http.routers.backend.rule=Host(security.bluetech.software)"
      - "traefik.http.routers.backend.entrypoints=websecure"
      - "traefik.http.routers.backend.tls.certresolver=letsencrypt"
      - "traefik.http.services.backend.loadbalancer.server.port=3000"

  postgres:
    image: postgres:14-alpine
    ports:
      - 5432:5432
    environment:
      - POSTGRES_USER=novus
      - POSTGRES_PASSWORD=Juan2010
      - POSTGRES_DB=vurnerDB
    networks:
      - zap-network
    healthcheck:
      test:
        - CMD-SHELL
        - pg_isready -U novus -d vurnerDB
      interval: 5s
      timeout: 5s
      retries: 5

  zap:
    image: zaproxy/zap-stable
    user: zap
    ports:
      - 8080:8080
    command: zap.sh -daemon -host 0.0.0.0 -port 8080 -config api.addrs.addr.name=.*
      -config api.addrs.addr.regex=true -config api.disablekey=true
    networks:
      - zap-network
    ulimits:
      nproc: 65535
      nofile:
        soft: 65535
        hard: 65535
    dns:
      - 8.8.8.8
      - 8.8.4.4
    healthcheck:
      test: ["CMD", "curl", "-f", "http://localhost:8080/JSON/core/view/version"]
      interval: 30s
      timeout: 10s
      retries: 3
      start_period: 60s

networks:
  zap-network:
    name: zap-network
    external: false

volumes:
  backend_node_modules:
  worker_node_modules:
