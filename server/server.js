require('dotenv').config({ path: '../.env' });
const express = require('express');
const Auth = require('./controllers/Auth');
const app = express();
const morgan = require('morgan');
const { PORT } = process.env;

app.use(morgan('combined'));
app.use(express.json());
app.use('/api/v1/auth', Auth);

app.listen(PORT, () => {
  console.log(`Open on port ${PORT}`);
});
