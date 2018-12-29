const express = require('express');
const morgan = require('morgan');
// const db = require('./database/db');
const getGalleryImages = require('../server/controller/gallery');

const app = express();

app.set('PORT', 9999);
app.use(morgan('dev'));

// Used for CORS
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use('/', express.static(__dirname + './../public'));

app.get('/gallery', getGalleryImages.getGalleryImages);

app.listen(app.get('PORT'), function () {
  console.log(`server is off and running on port ${app.get('PORT')}`);
});
