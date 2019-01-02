const db = require('../database/db');

const result = [];

const getGalleryImages = function(req, res) {
  db.DISPLAY_IMAGE.findAll({
    where: { primaryImage: true },
    limit: 1
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
          res.json(data.concat(data2));
        });
    });
};

exports.getGalleryImages = getGalleryImages;