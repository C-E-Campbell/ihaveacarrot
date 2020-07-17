require('dotenv').config({ path: '../.env' });
const express = require('express');
const app = express();
const morgan = require('morgan');
const { PORT } = process.env;

app.use(morgan('combined'));
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Open on port ${PORT}`);
});
