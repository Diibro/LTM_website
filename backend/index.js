const express = require("express");
const mongoose = require('mongoose')
const cors = require("cors");
const dotenv = require('dotenv');
const bodyParser = require("body-parser");
const api = require('./Routes/routes');

dotenv.config();


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
     extended: false
}));
app.use(cors());

app.use(cors({
     origin: 'http://localhost:5173'
   }));

app.use('/Assets', express.static('public'));
app.use('/api', api);

const port = process.env.PORT || 4000;

mongoose.connect(process.env.DB_URL)
     .then(() => {
          console.log("Connected to database succesfully");
          app.listen(port, () => {
               console.log(`Listening on port ${port}`);
          })
     });

