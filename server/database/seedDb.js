var db = require('./db');
var faker = require('faker');

const seedDb = function(numberOfRecords, callback) {
  numberOfRecords = numberOfRecords ? numberOfRecords : 100;
  
  for (let i = 0; i < numberOfRecords; i++) {

    db.Exterior.create({
      fileName: faker.image.imageUrl(800, 225),
      imageName: faker.image.imageUrl(800, 225)
    });
    
    db.Interior.create({
      fileName: faker.image.imageUrl(800, 225),
      imageName: faker.image.imageUrl(800, 225)
    });
    
    db.Bedroom.create({
      fileName: faker.image.imageUrl(800, 225),
      imageName: faker.image.imageUrl(800, 225)
    });
    
    db.Bathroom.create({
      fileName: faker.image.imageUrl(800, 225),
      imageName: faker.image.imageUrl(800, 225)
    });
  }

  // Just in case we want to do something not asyc
  // For aync for loop use npm's forloop
  callback();
};

exports.seedDb = seedDb;