document.addEventListener('DOMContentLoaded', function () {
  // Registration form handler
  const regForm = document.getElementById('registration-form');
  if (regForm) {
    regForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const formData = new FormData(regForm);
      const data = Object.fromEntries(formData.entries());

      const response = await fetch('https://global-launch-backend.onrender.com/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      document.getElementById('pass-message').innerText = result.message;
    });
  }

  // Travel form handler
  const travelForm = document.getElementById('travel-form');
  if (travelForm) {
    travelForm.addEventListener('submit', async function (e) {
      e.preventDefault();
      const formData = new FormData(travelForm);
      const data = Object.fromEntries(formData.entries());

      const response = await fetch('https://global-launch-backend.onrender.com/send-travel-plan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      const result = await response.json();
      if (result.success) {
        alert("Travel plan submitted successfully!");
        travelForm.reset();
      } else {
        alert("Failed to submit travel plan.");
      }
    });
  }
});
