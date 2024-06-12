const User = require('./User');

class UserManager {
  constructor() {
    this.users = [];
    this.loggedInUser = null;
  }

  createUser(username, password) {
    const user = new User(username, password);
    this.users.push(user);
    return user;
  }

  loginUser(username, password) {
    const user = this.users.find(
      (user) => user.username === username && user.password === password
    );
    if (user) {
      this.loggedInUser = user;
      return user;
    }
    return null;
  }

  changePassword(username, newPassword) {
    const user = this.users.find((user) => user.username === username);
    if (user) {
      user.password = newPassword;
      return user;
    }
    return null;
  }
}

module.exports = UserManager;
