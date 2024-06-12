const UserManager = require('../src/UserManager');

describe('UserManager', () => {
  let userManager;

  beforeEach(() => {
    userManager = new UserManager();
  });

  test('should create a new user', () => {
    const user = userManager.createUser('testuser', 'password123');
    expect(user.username).toBe('testuser');
  });

  test('should login an existing user', () => {
    userManager.createUser('testuser', 'password123');
    const user = userManager.loginUser('testuser', 'password123');
    expect(user).not.toBeNull();
  });

  test('should change the password of an existing user', () => {
    userManager.createUser('testuser', 'password123');
    const user = userManager.changePassword('testuser', 'newpassword123');
    expect(user.password).toBe('newpassword123');
  });
});
