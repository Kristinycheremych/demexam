const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    UserLogin: String,
    UserPassword: String,
    UserRole: {
        type: String,
        enum: ["client", "manager", "admin"],
        default: "client"
    }
});

const ProductModel = mongoose.model("user", ProductSchema);
module.exports = ProductModel