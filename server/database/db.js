const Sequelize = require('sequelize');
const seedDb = require('../database/seedDb');

const sequelize = new Sequelize('gallery', 'student', 'student', {
  // host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const DISPLAY_IMAGE = sequelize.define('display_image', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fileName: Sequelize.STRING,
  imageName: Sequelize.STRING,
  primaryImage: Sequelize.BOOLEAN

});

const log = console.log('seedDb just seeded the database gallery with records!!!');

// sequelize.sync({ "force": true }) will recreate the table
// EVERY TIME the database is called.
sequelize.sync()
  .then(function() {
    seedDb.seedDb(null, log);
    console.log('sequelize.sync() it Baby!!!');
  });


exports.DISPLAY_IMAGE = DISPLAY_IMAGE;
