const express = require('express');
const router = express.Router();
const multer = require("multer");



const {
  getAllAlbums,
  getAllAlbumsById,
  createAlbum,
} = require("../controller/albumControllers");


// @desc Get all albums from db
// @route GET /api/albums
// @access Public
router.get('/', getAllAlbums);


// create storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});


// upload parameters for multer

const upload = multer({ storage: storage }).single("file");

// @desc Post an album to the db
// @route POST /api/albums
// @access Public
router.post('/', upload, createAlbum);

router.get('/')

// @desc Get all albums by id from db
// @route GET /api/albums/:id
// @access Public
router.get('/:id', getAllAlbumsById);

module.exports = router;