const Sequelize = require('sequelize');

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

sequelize.sync({"force": true});

// Exterior.create({ fileName: 'Imagefile.png', imageName: 'The Last Supper' });




/*
    In this example, findOrCreate returns an array like this:
    [ {
        username: 'fnord',
        job: 'omnomnom',
        id: 2,
        createdAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET),
        updatedAt: Fri Mar 22 2013 21: 28: 34 GMT + 0100(CET)
      },
      false
    ]
    The array returned by findOrCreate gets spread into its 2 parts by the "spread" on line 69, and the parts will be passed as 2 arguments to the callback function beginning on line 69, which will then treat them as "user" and "created" in this case. (So "user" will be the object from index 0 of the returned array and "created" will equal "false".)
    */
// })
exports.Exterior = Exterior;
exports.Interior = Interior;
exports.Bedroom = Bedroom;
exports.Bathroom = Bathroom;

// exports.Sequelize = Sequelize;