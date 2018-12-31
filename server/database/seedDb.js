var db = require('./db');
var sequelize = require('./db').sequelize;
var faker = require('faker');

const seedDb = function(numberOfRecords, callback) {
  numberOfRecords = numberOfRecords ? numberOfRecords : 100;
  const width = 1200;
  const height = 650;
  const categories = ['city', 'food', 'nightlife', 'fashion', 'people', 'nature', 'sports', 'transport', 'nature'];
  
  for (let i = 0; i < numberOfRecords; i++) {

    // 1 out of 10 will be a primary photo Maybe?
    let primary = Math.random() < 0.11 ? true : false;
    let select = Math.floor(Math.random() * 9);

    db.DISPLAY_IMAGE.create({
      fileName: faker.image.imageUrl(width, height, categories[select]),
      imageName: faker.image.imageUrl(width, height, categories[select]),
      primaryImage: primary
    });
    
  }
  
  // Just in case we want to do something not asyc
  // For aync for loop use npm's forloop
  callback();
};


// sequelize.sync({force: true})
// If force is true, each Model will run DROP TABLE IF EXISTS, 
// before it tries to create its own table
sequelize.sync()
  .then(function () {
    seedDb(null, () => {});
    console.log('sequelize.sync() it Baby!!!');
  });

exports.seedDb = seedDb;