const API_BASE_URL = 'http://localhost:5000/api';

export const initiateScan = async (url) => {
  const response = await fetch(`${API_BASE_URL}/scan`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ url }),
  });
  return response.json();
};

export const getReport = async (id) => {
  const response = await fetch(`${API_BASE_URL}/report/${id}`);
  return response.json();
};
