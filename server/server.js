const express = require('express');
const morgan = require('morgan');
const db = require('./database/db');
const faker = require('faker');
const seedDb = require('../server/database/seedDb');

// console.log('db: ', db);
// console.log(' ****************rs********** db.Exterior *************************: ', db.Exterior);
// console.log('db: ', db);

const app = express();

app.set('PORT', 3000);
app.use(morgan('dev'));

app.use('/', express.static(__dirname + './../public'))

app.get('/', function (req, res) {
  res.sendStatus(200);
});

// for (let i = 0; i < 5; i++) {
//   console.log(faker.image.imageUrl(800, 225));
  
// }
// console.log(faker.image.imageUrl(1600, 900));

app.listen(app.get('PORT'), function () {
  // seedDb.seedDb();
  console.log(`server is off and running on port ${app.get('PORT')}`);

});
