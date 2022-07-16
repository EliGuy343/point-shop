const mongoose = require('mongoose');
const CartSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      unique: true
    },
    quantity:{
      type: Number,
      required: true
    },
    total: {
      type: Number,
      required: true
    },
    Products: [
      {
        productId: {
          type: String
        },
        quantity: {
          type: Number,
          default: 1
        },
        price: {
            type: Number
          }
      }
    ]
  }, {timestamps: true}
);

module.exports = mongoose.model('Cart', CartSchema);