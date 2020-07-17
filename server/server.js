require('dotenv').config({ path: '../.env' });
const mongoose = require('mongoose');
const express = require('express');
const Auth = require('./routes/AuthRouter');
const Recipes = require('./routes/RecipesRouter');
const Users = require('./routes/UsersRouter');
const app = express();
const morgan = require('morgan');
const { PORT, mongoURI } = process.env;

app.use(morgan('tiny'));
app.use(express.json());

// Mount Routers
app.use('/iHAC/v1/auth', Auth);
app.use('/iHAC/v1/recipes', Recipes);
app.use('/iHAC/v1/users', Users);

mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('db Connected');
  });

app.listen(PORT, () => {
  console.log(`Open on port ${PORT}`);
});
