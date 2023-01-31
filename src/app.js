const express = require("express");
const RouteHandler = require("./handler/RouteHandler");
const ErrorHandling = require("./util/ErrorHandling");

const app = express();

app.use(express.json());
app.use(RouteHandler);

app.use((err, req, res, next) => {
  ErrorHandling.handleError(err, res);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
