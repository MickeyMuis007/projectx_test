// Require packages
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Require Files
const seedData = require('./persistence/seeding/seed-data');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => res.send('Hello World'));

mongoose.connect('mongodb+srv://michaelh:Jordan01@cluster0-kdwgq.mongodb.net/insurance?retryWrites=true')
  .then(result => {
    console.log('Connected to DB!')
    seedData().then(() => {
      console.log('Completed Seeding')
      // You should decide if you would start the server before seeding completed or after it's completed
      app.listen(port, () => console.log(`Listening on port ${port}`));
    });
  });
