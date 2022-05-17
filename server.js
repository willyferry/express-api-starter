const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

var corsOptions = {
    origin: "http://localhost:" + process.env.PORT,
}

const indexRouter = require('./Routes/index.routes');
const usersRouter = require('./Routes/users.routes');

const app = express();

app.use(cors(corsOptions));

// using parser must before any route
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

// this will be public static folder
app.use(express.static('public'));

mongoose
    .connect(process.env.MONGO_DB_URL, {
        useNewUrlParser: true
    })
    .then(() => {
        console.log('Connected to database');
    })
    .catch(err => {
        console.log('Error connecting to database', err);
    })

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});