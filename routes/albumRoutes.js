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


// @desc Post an album to the db
// @route POST /api/albums
// @access Public
router.post('/', createAlbum);


// @desc Get all albums by id from db
// @route GET /api/albums/:id
// @access Public
router.get('/:id', getAllAlbumsById);

module.exports = router;