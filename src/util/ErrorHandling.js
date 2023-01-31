class ErrorHandling {
  static handleError(err, res) {
    console.error(err);
    res.status(500).json({ error: "An error has occurred" });
  }
}

module.exports = ErrorHandling;
