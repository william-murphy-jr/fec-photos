var db = require('./db');
var faker = require('faker');

const seedDb = function(numberOfRecords, callback) {
  numberOfRecords = numberOfRecords ? numberOfRecords : 100;
  let width = 1200;
  let height = 650;
  
  for (let i = 0; i < numberOfRecords; i++) {

    // 1 out of 10 will be a primary photo Maybe?
    let primary = Math.random() < 0.11 ? true : false;

    db.DISPLAY_IMAGE.create({
      fileName: faker.image.imageUrl(width, height),
      imageName: faker.image.imageUrl(width, height),
      primaryImage: primary
    });
    
  }

  // Just in case we want to do something not asyc
  // For aync for loop use npm's forloop
  // callback();
};

exports.seedDb = seedDb;