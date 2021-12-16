// with cloudinary
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
    const result = await cloudinary.uploader.upload(req.body.imgBase64);

    // remove poster image from folder since we are saving it into cloudinary
    // await unlinkFile(req.file.path);

    // new album
    const album = new Album({
      imgBase64: result.secure_url,
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
    });

    // save album in db
    album
      .save(album)
      .then((data) => {
        // console.log(data)
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

const updateAlbumById = async (req, res) => {
  try {
    const album = await Album.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(album);

  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
  
}

const deleteAlbumById = async (req, res) => {
  try {
    await Album.findByIdAndDelete(req.params.id);
    res.send({ message: "Album deleted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
}

module.exports = {
  createAlbum,
  getAllAlbums,
  getAllAlbumsById,
  updateAlbumById,
  deleteAlbumById,
};


