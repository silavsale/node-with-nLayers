const User = require("../entities/User");

class UserFactory {
  static create(id, name, email) {
    return new User(id, name, email);
  }
}

module.exports = UserFactory;
