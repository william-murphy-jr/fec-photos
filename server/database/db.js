const Sequelize = require('sequelize');
// const seedDb = require('../database/seedDb');  // moved

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

console.log('db.js just ran!');

// We could create the database here

exports.DISPLAY_IMAGE = DISPLAY_IMAGE;
exports.sequelize = sequelize;
