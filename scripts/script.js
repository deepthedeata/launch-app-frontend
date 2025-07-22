document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registration-form');
  const passMessage = document.getElementById('pass-message');
  const submitButton = document.getElementById('register-btn');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.innerText = '🚀 Sending...';

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    console.log("📤 Submitting data:", data);

    try {
      const response = await fetch('https://launch-app-backend.onrender.com/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Server error occurred');
      }

      passMessage.innerText = result.message || '✅ Pass has been sent!';
      form.reset();
    } catch (error) {
      console.error('❌ Error submitting form:', error);
      passMessage.innerText = `❌ ${error.message}`;
    } finally {
      // Re-enable button
      submitButton.disabled = false;
      submitButton.innerText = '🚀 Register Now';
    }
  });
});
