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

const log = console.log('seedDb just seeded the database gallery with records!!!');

// { "force": true } will recreate the table 
// EVERY TIME the database is called.
sequelize.sync({"force": true})
  .then(function() {
    seedDb.seedDb(null, log);
    console.log('sequelize.sync() it Baby!!!');
  });

exports.Exterior = Exterior;
exports.Interior = Interior;
exports.Bedroom  = Bedroom;
exports.Bathroom = Bathroom;
