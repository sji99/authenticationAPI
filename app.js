// Importing and executing Express
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv/config');

app.use(bodyParser.json());

//Import Routes
const usersRoute = require('./routes/users');

// Middleware

app.use('/users', usersRoute);

// Connect to Database
mongoose.connect(
    process.env.DB_CONNECTION,
    {useNewUrlParser: true, useUnifiedTopology: true},
    () => console.log('connected to Database')
);

// Prevents errors when running and closing multiple times.
process.on("uncaughtException", () => server.close());
process.on("SIGTERM", () => server.close());

app.listen(5000);