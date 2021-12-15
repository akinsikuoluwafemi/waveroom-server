// const mongoose = require('mongoose');

// const AlbumSchema = new mongoose.Schema({
//   albumUrl: {
//     type: String,
//     required: true,
//   },
//   alignment: {
//     type: String,
//     required: true
//   },
//   artist: {
//     type: String,
//     required: true
//   },
//   background: {
//     type: String,
//     required: true
//   },
//   description: {
//     type: String,
//     required: true
//   },
//   frameChoice: {
//     type: String,
//     required: true
//   },
//   posterColor: {
//     type: String,
//     required: true
//   },
//   quantity: {
//     type: Number,
//     required: true
//   },
//   posterSize: {
//     type: String,
//     required: true
//   },
//   price: {
//     type: Number,
//     required: true
//   },
//   total: {
//     type: Number,
//     required: true
//   },
//    title: {
//     type: String,
//     required: true
//   },
//    total_tracks: {
//     type: Number,
//     required: true
//   }
  
// })

// const Album = mongoose.model('album', AlbumSchema);

// module.exports = Album;


const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
  imgBase64: {
    type: String,
    image: Buffer,
  },
  alignment: {
    type: String,
    required: true
  },
  artist: {
    type: String,
    required: true
  },
  background: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  frameChoice: {
    type: String,
    required: true
  },
  posterColor: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  posterSize: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  total: {
    type: Number,
    required: true
  },
   title: {
    type: String,
    required: true
  },
   total_tracks: {
    type: Number,
    required: true
  }
  
})

const Album = mongoose.model('album', AlbumSchema);

module.exports = Album;
