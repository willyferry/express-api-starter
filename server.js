const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index.routes');
const usersRouter = require('./routes/users.routes');

const port = 3000;

const app = express();

// using parser must before any route
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

// this will be public static folder
app.use(express.static('public'));

const mongodbUrl = 'mongodb://localhost:27017';

mongoose
    .connect(`${mongodbUrl}/express-crud`, {
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

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});