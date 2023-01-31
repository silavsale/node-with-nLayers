const UserRepository = require("../repositories/UserRepository");
const UserFactory = require("../factories/UserFactory");

class UserService {
  constructor() {
    this.userRepository = new UserRepository();
  }

  getAll() {
    return this.userRepository.getAll();
  }

  add(userData) {
    const user = UserFactory.create(userData.id, userData.name, userData.email);
    this.userRepository.add(user);
    return user;
  }
}

module.exports = UserService;
