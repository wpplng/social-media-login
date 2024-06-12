const UserDatabase = require('../src/UserDatabase');

jest.mock('../src/UserDatabase', () => {
  return jest.fn().mockImplementation(() => {
    return {
      getUser: jest.fn((username) => {
        const users = {
          testuser: { username: 'testuser', password: 'password123' },
        };
        return Promise.resolve(users[username]);
      }),
      saveUser: jest.fn((user) => {
        return Promise.resolve();
      }),
    };
  });
});

describe('UserDatabase', () => {
  let userDatabase;

  beforeEach(() => {
    userDatabase = new UserDatabase();
  });

  test('should fetch user data from mock database', async () => {
    const user = await userDatabase.getUser('testuser');
    expect(user).toEqual({ username: 'testuser', password: 'password123' });
  });

  test('should save user data to mock database', async () => {
    const newUser = { username: 'newuser', password: 'newpassword123' };
    await userDatabase.saveUser(newUser);
    expect(userDatabase.saveUser).toHaveBeenCalledWith(newUser);
  });
});
