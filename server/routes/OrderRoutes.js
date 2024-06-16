const express = require("express");
const router = express.Router();
const OrderModel = require("../models/OrderModel");

router.get("/get/order", (req,res) =>{
    OrderModel.find()
    .populate("products.productId")
    .then((order) => res.json(order))
    .catch((error) => console.log(error))
})

router.post("/create/order", (req, res) => {
    const Order = new OrderModel({
        products: req.body.products,
        totalAmount: req.body.totalAmount
    });
    Order.save()
    .then((order) => res.json(order));
})

module.exports = router