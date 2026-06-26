const detailsStarted = document.getElementById('started');
const detailsYears = document.getElementById('years');
const form = document.getElementById('apology-form');
const result = document.getElementById('result');

fetch('/api/details')
  .then((response) => response.json())
  .then((data) => {
    detailsStarted.textContent = data.started;
    detailsYears.textContent = data.years;
  })
  .catch(() => {
    detailsStarted.textContent = '29 September 2025';
    detailsYears.textContent = '3 years';
  });

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const apology = document.getElementById('apology').value.trim();

  if (!name || !apology) {
    result.textContent = 'Please enter a name and apology message.';
    return;
  }

  result.textContent = 'Sending your apology...';

  try {
    const response = await fetch('/api/message', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, apology })
    });

    const data = await response.json();
    if (!response.ok) {
      result.textContent = data.error || 'Something went wrong. Please try again.';
      return;
    }

    result.innerHTML = `
      <strong>${data.note}</strong>
      <p>Your apology was saved with love.</p>
    `;
  } catch (error) {
    result.textContent = 'Unable to connect to the backend. Please start the server and try again.';
  }
});
