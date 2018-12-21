const Sequelize = require('sequelize');
const seeDb = require('./seedDb');

const sequelize = new Sequelize('gallery', 'student', 'student', {
  // host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});

const Interior = sequelize.define('interior', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fileName: {
    type: Sequelize.STRING
  },
  imageName: {
    type: Sequelize.STRING
  }
});

const Exterior = sequelize.define('exterior', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fileName: {
    type: Sequelize.STRING
  },
  imageName: {
    type: Sequelize.STRING
  }
});

const Bedroom = sequelize.define('bedroom', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fileName: {
    type: Sequelize.STRING
  },
  imageName: {
    type: Sequelize.STRING
  }
});


const Bathroom = sequelize.define('bathroom', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fileName: {
    type: Sequelize.STRING
  },
  imageName: {
    type: Sequelize.STRING
  }
});

// "force": true will recreate the table EVERYTIME the
// database is called

const log = console.log('seedDb just seeded the database gallery with records!!!');
sequelize.sync({"force": true})
  .then(function() {
    seeDb.seedDb(null, log);
    console.log('sequelize.sync() it Baby!!!');
  });

// Exterior
//   .sync()
//   .then(function () {
//   // Now instantiate an object and save it:
//     // return Exterior.create({
//       // fileName: 'Imagefile.png',
//       // imageName: 'The Last Supper'
//     // });
//   }
//   );

// Interior.sync();
// Bathroom.sync();
// Bedroom.sync();

// Exterior.create({ 
//   fileName: 'Imagefile.png', 
//   imageName: 'The Last Supper'
// }).then(function() {
//   console.log("Exterior Run!!!");
// })


exports.Exterior = Exterior;
exports.Interior = Interior;
exports.Bedroom = Bedroom;
exports.Bathroom = Bathroom;

// exports.Sequelize = Sequelize;