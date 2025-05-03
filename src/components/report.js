import React, { useEffect, useState } from 'react';
import { getReport } from './api';

const Report = ({ reportId }) => {
  const [report, setReport] = useState(null);

  useEffect(() => {
    const fetchReport = async () => {
      const data = await getReport(reportId);
      setReport(data);
    };
    fetchReport();
  }, [reportId]);

  if (!report) return <div>Loading...</div>;

  return (
    <div>
      <h2>Scan Report</h2>
      <pre>{JSON.stringify(report, null, 2)}</pre>
    </div>
  );
};

export default Report;
