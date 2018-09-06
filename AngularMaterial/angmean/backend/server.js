const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const issue 

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('');

const connection = mongoose.connection;

connection.once('open',() => {
    console.log("Mongo DB Connected");
});

app.use('/',router);

app.listen(3000, () => {
    console.log('Server started on port 3000');
})