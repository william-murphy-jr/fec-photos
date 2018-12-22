const db = require('../database/db');

const getGalleryImages = function(req, res) {
  db.DISPLAY_IMAGE.findAll({
    where: { primaryImage: true },
    limit: 2
  })
    .then(function(data) {
      res.json(data);
      console.log("******** DATA *******", data);
    });
};

exports.getGalleryImages = getGalleryImages;