const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const UserManager = require('./UserManager');

const app = express();
const userManager = new UserManager();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  const user = userManager.createUser(username, password);
  res.status(201).json(user);
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const user = userManager.loginUser(username, password);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

app.post('/change-password', (req, res) => {
  const { username, newPassword } = req.body;
  const user = userManager.changePassword(username, newPassword);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'User not found' });
  }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
