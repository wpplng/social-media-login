class UserDatabase {
  constructor() {
    this.users = {};
  }

  async getUser(username) {
    console.log(this.users);
    return this.users[username];
  }

  async saveUser(user) {
    this.users[user.username] = user;
  }
}

module.exports = UserDatabase;
