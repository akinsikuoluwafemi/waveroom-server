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
app.use(express.json());

app.use('/api/albums', albumRoutes);

// spotifylogin

// app.post('/login', (req, res) => {
//    const code = req.body.code;

//    const spotifyApi = new SpotifyWebApi({
//     redirectUri: 'http://localhost:3000',
//     clientId: "a1c5e1d9893f455ca311ec8e8eb32686",
//     clientSecret: "fe49a7ab0f7a4e5cb70f885ed1d30fd2"
//   })

//     spotifyApi.authorizationCodeGrant(code).then(data => {
//       res.json({
//           accessToken: data.body.access_token,
//           refreshToken: data.body.refresh_token,
//           expiresIn: data.body.expires_in,
//       })
//     }).catch((err) => {
//       res.sendStatus(400);
//       console.log(err)
//     })
  

// });


// // refresh spotify token
// app.post('/refresh', (req, res) => {
//   const refreshToken = req.body.refreshToken;

//   console.log(refreshToken);

//   const spotifyApi = new SpotifyWebApi({
//     redirectUri: "http://localhost:3000",
//     clientId: "a1c5e1d9893f455ca311ec8e8eb32686",
//     clientSecret: "fe49a7ab0f7a4e5cb70f885ed1d30fd2",
//     refreshToken
//   });

//   spotifyApi.refreshAccessToken().then(
//     (data) => {
//       res.json({
//         accessToken: data.body.access_token,
//         expiresIn: data.body.expires_in
//       })
      
//     }).catch((err) => {
//       console.log(err)
//       res.sendStatus(400);
//     })
// })






const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
