const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarSchema = new Schema({
     name: {
          type: String
     },
     carImage: {
          type: String
     },
     price: {
          type: Number
     },
     description: {
          type: String
     },
     year: {
          type: Number
     }
});

module.exports = mongoose.model('car', CarSchema);