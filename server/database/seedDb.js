var db = require('./db');
var faker = require('faker');

const seedDb = function(numberOfRecords, callback) {
  numberOfRecords = numberOfRecords ? numberOfRecords : 100;
  let width = 1600;
  let height = 400;
  
  for (let i = 0; i < numberOfRecords; i++) {

    db.Exterior.create({
      fileName: faker.image.imageUrl(width, height),
      imageName: faker.image.imageUrl(width, height)
    });
    
    db.Interior.create({
      fileName: faker.image.imageUrl(width, height),
      imageName: faker.image.imageUrl(width, height)
    });
    
    db.Bedroom.create({
      fileName: faker.image.imageUrl(width, height),
      imageName: faker.image.imageUrl(width, height)
    });
    
    db.Bathroom.create({
      fileName: faker.image.imageUrl(width, height),
      imageName: faker.image.imageUrl(width, height)
    });
  }

  // Just in case we want to do something not asyc
  // For aync for loop use npm's forloop
  callback();
};

exports.seedDb = seedDb;