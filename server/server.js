const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const userRouter = require("./routes/UserRoutes");
const productRouter = require("./routes/ProductRoutes");
const orderRouter = require("./routes/OrderRoutes");

dotenv.config();
const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/eremenko")
  .then(console.log("База данных запущена"))
  .catch((error) => console.log(error));

app.use("/", userRouter);
app.use("/", productRouter);
app.use("/", orderRouter);

app.listen(`${PORT}`, () => {
    console.log("Сервер запущен");
});
