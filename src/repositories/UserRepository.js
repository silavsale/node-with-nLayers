class UserRepository {
  constructor() {
    this.users = [];
  }

  getAll() {
    return this.users;
  }

  add(user) {
    console.log("User - ", user);
    this.users.push(user);
  }
}

module.exports = UserRepository;
