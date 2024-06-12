document
  .getElementById('change-password-form')
  .addEventListener('submit', function (e) {
    e.preventDefault();
    const newPassword = document.getElementById('change-password').value;
    const username = 'newuser'; // mocked user to change password

    fetch('/change-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, newPassword }),
    }).then((response) => {
      if (response.ok) {
        alert('Password changed successfully');
      } else {
        alert('Failed to change password');
      }
    });
  });
