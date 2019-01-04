const db = require('../database/db');

const result = [];

const getGalleryImages = function(req, res) {
  db.DISPLAY_IMAGE.findAll({
    where: { primaryImage: true },
    limit: 10
  })
    .then(function(data) {
      result.concat(data);
      db.DISPLAY_IMAGE.findAll({
        where: {
          primaryImage: false
        },
        limit: 6
      })
        .then(function(data2) {
          const front = [];
          front.push(data[Math.floor(Math.random() * data.length)]);
          res.json(front.concat(data2));
        });
    });
};

exports.getGalleryImages = getGalleryImages;