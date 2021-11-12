// const Album = require('../models/Album');


// const createAlbum = async (req, res) => {
  
//   try{
//     if(!req.body){
//       res.status(400).send({ message: "Content can not be empty!" });
//       return;
//     }
    
//     // new album
//     const album = new Album({
//       name: req.body.name,
//       description: req.body.description,
//       price: req.body.price,
//       artist: req.body.artist,
//       theme: req.body.theme,
//       waveformStyle: req.body.waveformStyle,
//       color: req.body.color,
//       length: req.body.length,
//       breadth: req.body.breadth,
//       reviews: req.body.reviews,
//       posterImageUrl: req.body.posterImageUrl
//     });

//     // save album in db
//     album.save(album)
//     .then(data => {
//       res.send(data);
//     }).catch(err => {
//       res.status(500).send({
//         message: err.message || "Some error occurred while creating the Album."
//       });
//     })

//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Server error" });
//   }

// }

// const getAllAlbums = async (req, res) => {
//  try {
   
//    const albums = await Album.find({});
//    res.json(albums);
   
//  } catch (error) {
//    console.error(error);
//    res.status(500).json({ message: 'Server error' });
//  }
// }


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
//   getAllAlbumsById
// }



// const Album = require("../models/Album");
// const express = require("express");
// const router = express.Router();






// const createAlbum = async (req, res) => {
//   try {
//     if (!req.body) {
//       res.status(400).send({ message: "Content can not be empty!" });
//       return;
//     }

//     console.log(req.file)
//     // new album
//     const album = new Album({
//       name: req.body.name,
//       description: req.body.description,
//       price: req.body.price,
//       artist: req.body.artist,
//       theme: req.body.theme,
//       waveformStyle: req.body.waveformStyle,
//       color: req.body.color,
//       length: req.body.length,
//       breadth: req.body.breadth,
//       reviews: req.body.reviews,
//       posterImageUrl: req.file.filename,
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
    const result = await cloudinary.uploader.upload(req.file.path);

    // remove poster image from folder since we are saving it into cloudinary
    await unlinkFile(req.file.path);

    // new album
    const album = new Album({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      artist: req.body.artist,
      theme: req.body.theme,
      waveformStyle: req.body.waveformStyle,
      color: req.body.color,
      length: req.body.length,
      breadth: req.body.breadth,
      reviews: req.body.reviews,
      posterImageUrl: result.secure_url,
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


