require('dotenv').config({ path: '../.env' });
const MongoClient = require('mongodb').MongoClient;
const express = require('express');
const Auth = require('./controllers/AuthCTRL');
const Recipes = require('./controllers/RecipesCTRL');
const app = express();
const morgan = require('morgan');
const { PORT, mongoURI } = process.env;

app.use(morgan('tiny'));
app.use(express.json());

app.use('/api/v1/auth', Auth);
app.use('/api/v1/recipes', Recipes);

const client = new MongoClient(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((err) => {
  const collection = client.db('iHaveACarrot').collection('Users');

  client.close();
});

app.listen(PORT, () => {
  console.log(`Open on port ${PORT}`);
});
