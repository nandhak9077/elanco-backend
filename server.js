const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
require('dotenv').config();
const elancoEndpoints = require('./routes/elancoEndpoints')
// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())
app.use(cors())
// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Elanco application."});
});

app.use('/core', elancoEndpoints)

// listen for requests
app.listen(process.env.PORT, () => {
    console.log("Server is listening on port "+ process.env.PORT);
});

