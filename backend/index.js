const express = require("express");
const mongodb = require("mongodb");
const cors = require("cors");


const App = express();
App.use(cors);

App.listen(3001, () => {
     console.log("Listening on port 3001");
})
