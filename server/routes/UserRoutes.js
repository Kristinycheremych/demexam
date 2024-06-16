const express = require("express");
const router = express.Router();
const UserModel = require("../models/UserModel");

router.post("/register", (req, res) => {
  const User = new UserModel({
    UserLogin: req.body.UserLogin,
    UserPassword: req.body.UserPassword,
    UserRole: req.body.UserRole,
  });
  User.save().then((user) => res.json(user));
});

router.post("/login", (req, res) => {
  UserModel.findOne({
    UserLogin: req.body.UserLogin,
    UserPassword: req.body.UserPassword,
  }).then((user) => {
    if (user) {
      res.json({ message: "Вход в систему прошел успешно", user });
    } else {
      res.json({ message: "Неверные учетные данные" });
    }
  });
});

module.exports = router;
