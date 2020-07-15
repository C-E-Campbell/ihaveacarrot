const express = require('express');

const app = express();
require('dotenv').config({ path: '../.env' });
const { PORT, CONN_STRING } = process.env;
app.use(express.json());
var admin = require('firebase-admin');

var serviceAccount = require('../ihaveacarrot-1f5e2-firebase-adminsdk-pc9ms-3b1d52a3a9.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ihaveacarrot-1f5e2.firebaseio.com',
});

const db = admin.firestore();
app.post('/addusers', (req, res) => {
  const { name, born, first, last } = req.body;
  const docRef = db.collection('users').doc(`${name}`);

  docRef.set({
    first: `${first}`,
    last: `${last}`,
    born: `${born}`,
  });
});

app.listen(PORT, () => {
  console.log(`Open on port ${PORT}`);
});
