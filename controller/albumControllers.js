// // with clodinary
// const Album = require("../models/Album");
// const cloudinary = require('../utils/cloudinary');
// const fs = require('fs');
// const util = require('util');
// const unlinkFile = util.promisify(fs.unlink);





// const createAlbum = async (req, res) => {
//   try {
//     if (!req.body) {
//       res.status(400).send({ message: "Content can not be empty!" });
//       return;
//     }

//     // upload to cloudinary
//     const result = await cloudinary.uploader.upload(req.file.path);

//     // remove poster image from folder since we are saving it into cloudinary
//     await unlinkFile(req.file.path);

//     // new album
//     const album = new Album({
//       albumUrl: req.body.albumUrl,
//       alignment: req.body.alignment,
//       artist: req.body.artist,
//       background: req.body.background,
//       description: req.body.description,
//       frameChoice: req.body.frameChoice,
//       posterColor: req.body.posterColor,
//       quantity: req.body.quantity,
//       posterSize: req.body.posterSize,
//       price: req.body.price,
//       total: req.body.total,
//       title: req.body.title,
//       total_tracks: req.body.total_tracks,
//       posterImageUrl: result.secure_url,
//     });

//     // save album in db
//     album
//       .save(album)
//       .then((data) => {
//         res.send(data);
//       })
//       .catch((err) => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while creating the Album.",
//         });
//       });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };



// const getAllAlbums = async (req, res) => {
//   try {
//     const albums = await Album.find({});
//     res.json(albums);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// const getAllAlbumsById = async (req, res) => {
//   try {
//     const album = await Album.findById(req.params.id);
//     res.json(album);
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }
// };

// module.exports = {
//   createAlbum,
//   getAllAlbums,
//   getAllAlbumsById,
// };




// with clodinary
const Album = require("../models/Album");
const cloudinary = require('../utils/cloudinary');
const fs = require('fs');
const util = require('util');
const unlinkFile = util.promisify(fs.unlink);





const createAlbum = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({ message: "Content can not be empty!" });
      return;
    }

    // upload to cloudinary
    // const result = await cloudinary.uploader.upload(req.file.path);

    // remove poster image from folder since we are saving it into cloudinary
    // await unlinkFile(req.file.path);

    // new album
    const album = new Album({
      albumUrl: req.body.albumUrl,
      alignment: req.body.alignment,
      artist: req.body.artist,
      background: req.body.background,
      description: req.body.description,
      frameChoice: req.body.frameChoice,
      posterColor: req.body.posterColor,
      quantity: req.body.quantity,
      posterSize: req.body.posterSize,
      price: req.body.price,
      total: req.body.total,
      title: req.body.title,
      total_tracks: req.body.total_tracks,
      // posterImageUrl: result.secure_url,
    });

    // save album in db
    album
      .save(album)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Album.",
        });
      });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};



const getAllAlbums = async (req, res) => {
  try {
    const albums = await Album.find({});
    res.json(albums);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

const getAllAlbumsById = async (req, res) => {
  try {
    const album = await Album.findById(req.params.id);
    res.json(album);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = {
  createAlbum,
  getAllAlbums,
  getAllAlbumsById,
};


