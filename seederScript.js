require('dotenv').config();

const albumsData = require('./data/album');
const connectDB = require('./config/db');
const Album = require('./models/Album');


connectDB();

const importData = async () => {
    try {
      await Album.deleteMany({});
      await Album.insertMany(albumsData);
      console.log('Data Imported...');
        process.exit();
    } catch (err) {
      console.error(err);
      process.exit(1);
    }
}

importData();