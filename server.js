const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const app = express();


//Routers
const tasks = require('./routes/task');
const auth = require('./routes/auth');


//Setting up mongoose
const dbURL = require('./config/keys').mongoURI;
mongoose.connect(dbURL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Successful entered the mainframe'));

//Setup
app.use(morgan('dev'));
app.use(express.json());


app.use('/api/tasks', tasks);
app.use('/api/user', auth);







//Listen to app
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`docode app listening on PORT: ${PORT}`);
})