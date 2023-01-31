const express = require("express");
const router = express.Router();
const UserService = require("../services/UserService");
const userService = new UserService();

router.get("/", (req, res) => {
  const users = userService.getAll();
  res.json(users);
});

router.post("/", (req, res) => {
  const user = userService.add(req.body);
  res.json(user);
});

module.exports = router;
