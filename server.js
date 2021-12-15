require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const albumRoutes = require('./routes/albumRoutes');
const SpotifyWebApi = require('spotify-web-api-node');

const cors = require('cors');
const bodyParser = require('body-parser');



connectDB();

const app = express();
app.use(cors())
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));

app.use(express.json());

app.use('/api/albums', albumRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
