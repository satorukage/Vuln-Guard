const scannerService = require('../services/scannerService');

exports.initiateScan = async (req, res) => {
  const { url } = req.body;
  const report = await scannerService.scan(url);
  res.json(report);
};

exports.getReport = async (req, res) => {
  const { id } = req.params;
  const report = await scannerService.getReportById(id);
  res.json(report);
};
