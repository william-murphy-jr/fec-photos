const express = require('express');
const morgan = require('morgan');
const db = require('./database/db');

const app = express();

app.set('PORT', 3000);
app.use(morgan('dev'));

app.use('/', express.static(__dirname + './../public'))

app.get('/', function (req, res) {
  res.sendStatus(200);
});

app.listen(app.get('PORT'), function () {
  console.log(`server is off and running on port ${app.get('PORT')}`);
});
