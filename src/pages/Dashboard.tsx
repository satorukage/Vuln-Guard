import { Shield, AlertCircle, CheckCircle } from "lucide-react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { MetricsCard } from "@/components/dashboard/MetricsCard";
import { ActivityList } from "@/components/dashboard/ActivityList";
import { VulnerabilityChart } from "@/components/dashboard/VulnerabilityChart";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-20 lg:ml-64 p-8">
        <h1 className="text-2xl font-bold mb-8">Dashboard Overview</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <MetricsCard
            title="Total Scans"
            value="156"
            icon={<Shield size={24} />}
            trend={{ value: 12, isPositive: true }}
          />
          <MetricsCard
            title="Active Vulnerabilities"
            value="23"
            icon={<AlertCircle size={24} />}
            trend={{ value: 8, isPositive: false }}
          />
          <MetricsCard
            title="Issues Resolved"
            value="89"
            icon={<CheckCircle size={24} />}
            trend={{ value: 24, isPositive: true }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <VulnerabilityChart />
          </div>
          <div>
            <ActivityList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;