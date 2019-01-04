const db = require('../database/db');

const result = [];

const getGalleryImages = function(req, res) {
  const numOfInteriorImages = 6;

  db.DISPLAY_IMAGE.findAll({
    where: { primaryImage: true },
    // limit: 10
  })
    .then(function(data) {
      result.concat(data);
      db.DISPLAY_IMAGE.findAll({
        where: {
          primaryImage: false
        },
        // limit: 10
      })
        .then(function(data2) {
          const front = [];
          const interior = [];
          let copy = [];
          copy = data2.slice();

          for (let i = 0; i < numOfInteriorImages; i++) {
            let num = Math.floor(Math.random() * copy.length);
            interior.push(copy[num]);
            copy.splice(num, 1);
          }

          front.push(data[Math.floor(Math.random() * data.length)]);
          res.json(front.concat(interior));
        });
    });
};

exports.getGalleryImages = getGalleryImages;