document
  .getElementById('register-form')
  .addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    fetch('/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    }).then((response) => {
      if (response.ok) {
        alert('User registered successfully');
      } else {
        alert('Registration failed');
      }
    });
  });
