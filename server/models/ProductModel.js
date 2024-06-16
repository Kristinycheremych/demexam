const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    ProductName: String,
    ProductCategory: String,
    ProductPhoto: String,
    ProductCost: String
})

const ProductModel = mongoose.model("product", ProductSchema);
module.exports = ProductModel