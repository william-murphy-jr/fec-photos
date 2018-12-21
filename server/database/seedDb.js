var db = require('./db');


const seedDb = function(numberOfRecords) {
  numberOfRecords = numberOfRecords ? numberOfRecords : 100;
  console.log('seedDb ran!!!');

  db.Exterior.create({
    fileName: 'Imagefile.png',
    imageName: 'The Last Supper Maybe Extra! extra!?'
  });

  db.Interior.create({
    fileName: 'InteriorImagefile.png',
    imageName: 'The Last Interior Supper Maybe Extra! extra!!?'
  });

  db.Bedroom.create({
    fileName: 'BedroomImagefile.png',
    imageName: 'The Last Bedroom Supper Maybe Extra! extra!?'
  });

  db.Bathroom.create({
    fileName: 'BathroomImagefile.png',
    imageName: 'The Last Bathroom Supper Maybe Extra! extra!!?'
  });

};

exports.seedDb = seedDb;