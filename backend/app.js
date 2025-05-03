const express = require('express');
const app = express();
const scanRoutes = require('./routes/scanRoutes');

app.use(express.json());
app.use('/api', scanRoutes);

module.exports = app;
