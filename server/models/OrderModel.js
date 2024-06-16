const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  products: [
    {
      productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
      quantity: {
        type: Number,
        required: true,
      }
    },
  ],
  totalAmount: {
    type: Number,
    required: true,
  },
  orderDeliveryDate: {
    type: Date,
    default: Date.now,
  },
});

const OrderModel = mongoose.model("order", OrderSchema);

module.exports = OrderModel;