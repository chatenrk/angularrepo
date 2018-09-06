const express = require('express');
const path = require('path');
const cors = require('cors');
const port = 3000;

const app = express();
app.use(cors());

// var p1 = path.join(__dirname,'../client');
// console.log(path);
app.use(express.static(path.join(__dirname,'../client/mfapp/src')));

app.get('/', (req, res) => {
    res.send('Please select correct route');
});

app.listen(port);
console.log("listening on port 3000");

