document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registration-form');
  const passMessage = document.getElementById('pass-message');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('https://launch-app-backend.onrender.com/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      passMessage.innerText = result.message || '✅ Pass has been sent!';
      form.reset();
    } catch (error) {
      passMessage.innerText = '❌ Failed to submit. Please try again.';
      console.error('Error submitting form:', error);
    }
  });
});
