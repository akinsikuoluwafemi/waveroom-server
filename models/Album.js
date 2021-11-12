const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  theme: {
    type: String,
    required: true
  },
  waveformStyle: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  length: {
    type: Number,
    required: true
  },
  breadth: {
    type: Number,
    required: true
  },
  reviews: {
    type: Number,
    required: true
  },
  posterImageUrl: {
    type: String,
    required: true
  }
  
})

const Album = mongoose.model('album', AlbumSchema);

module.exports = Album;
