const express = require("express");
const app = express();
const UserRoute = require("../routes/UserRoute");

app.use("/users", UserRoute);

module.exports = app;
