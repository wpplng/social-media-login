document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const username = document.getElementById('login-username').value;
  const password = document.getElementById('login-password').value;

  fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  }).then((response) => {
    if (response.ok) {
      alert('User logged in successfully');
      window.location.href = '/dashboard';
    } else {
      alert('Login failed');
    }
  });
});
