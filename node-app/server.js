const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());
app.use('/api', require('./api'));

const PORT = process.env.POTR || 3000;
mongoose.connect('mongodb+srv://armen:asdfghjkl@cluster0-j6jmk.mongodb.net/test?retryWrites=true&w=majority/', { dbName: 'football' } );
app.listen(PORT, () => console.log(`App listen on port ${PORT}.. link - http://localhost:3000`));