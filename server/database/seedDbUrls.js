const db = require('./db');
const front = require('./galleryImage_Urls').front;
const interior = require('./galleryImage_Urls').interior;
console.log('front: ', front);

const sequelize = require('./db').sequelize;

const seedDbUrls = function (numberOfRecords, callback) {
  numberOfRecords = numberOfRecords ? numberOfRecords : 100;

  const createRecords = function (records, primary) {
    const len = records.length;

    for (let i = 0; i < len; i++) {
      db.DISPLAY_IMAGE.create({
        fileName: records[i],
        imageName: records[i],
        primaryImage: primary
      });
    }    
  }; // createRecords

  createRecords(front, true);
  createRecords(interior, false);

  // Just in case we want to do something not asyc
  // For aync for loop use npm's forloop
  callback();
};


// sequelize.sync({force: true})
// If force is true, each Model will run DROP TABLE IF EXISTS, 
// before it tries to create its own table
sequelize.sync()
  .then(function () {
    seedDbUrls(null, () => {});
    console.log('sequelize.sync() it Baby!!!');
  });

exports.seedDbUrls = seedDbUrls;