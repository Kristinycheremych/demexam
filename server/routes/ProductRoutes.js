const express = require("express");
const router = express.Router();
const ProductModel = require("../models/ProductModel");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cd) {
    cd(null, "uploads/");
  },
  filename: function (req, file, cd) {
    cd(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });
router.use("/uploads", express.static(path.join(__dirname, "../uploads"))); 

router.get("/get/product", (req, res) => {
  ProductModel.find()
    .then((product) => res.json(product))
    .catch((error) => console.log(error));
});

router.post("/create/product", upload.single("ProductPhoto"), (req, res) => {
  const Product = new ProductModel({
    ProductName: req.body.ProductName,
    ProductCategory: req.body.ProductCategory,
    ProductPhoto: `/uploads/${req.file.filename}`,
    ProductCost: req.body.ProductCost,
  });
  Product.save().then((product) => res.json(product));
});

router.delete("/delete/product/:id", (req, res) =>{
    ProductModel.findByIdAndDelete(req.params.id)
    .then((product) => res.json(product))
    .catch((error) => console.log(error))
})

module.exports = router
