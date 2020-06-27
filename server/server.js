const express = require('express');
const mongoose = require('mongoose');
const Recipe = require('./models/recipe.js');
const app = express();
require('dotenv').config();
const { PORT, CONN_STRING } = process.env;
app.use(express.json());
mongoose
  .connect(
    `${CONN_STRING}`,
    {
      useNewUrlParser: true,
    },
    () => {
      console.log('Connected');
    }
  )
  .catch((err) => {
    console.log(err);
  });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Connecteddddd');
});

app.get('/', (req, res) => {
  res.send('Home');
});

app.post('/recipe', (req, res) => {
  const { title, description } = req.body;
  const recipe = new Recipe({
    title,
    description,
  });

  recipe
    .save()
    .then((data) => {
      res.json(data);
      res.status(200);
    })
    .catch((err) => {
      res.send('idk');
      res.status(500);
    });
});

app.listen(PORT, () => {
  console.log(`Open on port ${PORT}`);
});
