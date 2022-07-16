const mongoose = require('mongoose');
const Product = require('./Product').schema;
const CartSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      unique: true,
      required: true
    },
    quantity:{
      type: Number,
    },
    total: {
      type: Number,
    },
    products:{
      type: [{}],
      unique: false
    } 
  }, {timestamps: true}
);

module.exports = mongoose.model('Cart', CartSchema);