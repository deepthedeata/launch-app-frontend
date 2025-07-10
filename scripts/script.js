document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registration-form');
  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('http://127.0.0.1:5000/register', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });

    const result = await response.json();
    document.getElementById('pass-message').innerText = result.message;
  });
});