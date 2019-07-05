const express = require('express');
const mongoose = require('mongoose');
const morgan = require('mogran');

const app = express();


//Routers


//Setting up mongoose
const dbURL = require('./config/keys').mongoURI;
mongoose.connect(dbURL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Successful entered the mainframe'));

//Setup
app.use(mogran('dev'));
app.use(express.json());






//Listen to app
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`docode app listening on PORT: ${PORT}`);
})