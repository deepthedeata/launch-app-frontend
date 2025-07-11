document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('registration-form');
  const registerBtn = document.getElementById('register-btn');

  // Check travel plan submission flag
  const travelPlanSubmitted = localStorage.getItem('travelPlanSubmitted') === 'true';

  if (travelPlanSubmitted) {
    // ✅ Enable and style the button
    registerBtn.disabled = false;
    registerBtn.style.backgroundColor = '#FFD700';
    registerBtn.style.cursor = 'pointer';
    registerBtn.style.boxShadow = '0 0 12px #FFD700';
  } else {
    // 🛑 Disabled behavior
    registerBtn.addEventListener('click', function (e) {
      e.preventDefault();
      alert('❗ Please fill your travel plan before registering.');
    });
  }

  // Handle actual registration
  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    if (!travelPlanSubmitted) {
      alert("❗ Please fill your travel plan before registering.");
      return;
    }

    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('http://127.0.0.1:5000/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const result = await response.json();
    document.getElementById('pass-message').innerText = result.message || '✅ Pass has been sent!';
    form.reset();

    // Optionally clear flag
    // localStorage.removeItem('travelPlanSubmitted');
  });
});