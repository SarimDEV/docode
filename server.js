const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const cookieParser = require('cookie-parser')

const app = express();


//Routers
const tasks = require('./routes/task');
const auth = require('./routes/auth');
const post = require('./routes/posts');
const secret = require('./routes/secret');
const verifyToken = require('./routes/verifyToken')


//Setting up mongoose
const dbURL = require('./config/keys').mongoURI;
mongoose.connect(dbURL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Successful entered the mainframe'));

//Setup
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser())


app.use('/api/tasks', tasks);
app.use('/api/user', auth);
app.use('/api/posts', post);
app.use('/api/secret', secret)
app.use('/api/verifytoken', verifyToken)




//Listen to app
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`docode app listening on PORT: ${PORT}`);
})