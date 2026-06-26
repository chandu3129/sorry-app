const detailsStarted = document.getElementById('started');
const detailsYears = document.getElementById('years');
const form = document.getElementById('apology-form');
const result = document.getElementById('result');

// Static page cannot call backend on GitHub Pages, so show the relationship details directly.
function loadDetails() {
  detailsStarted.textContent = '29 September 2025';
  detailsYears.textContent = '3 years';
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const apology = document.getElementById('apology').value.trim();

  if (!name || !apology) {
    result.textContent = 'Please enter a name and apology message.';
    return;
  }

  result.innerHTML = `
    <strong>Dear ${name}, your message is ready.</strong>
    <p>This static page cannot send the apology to a backend from GitHub Pages, but your feelings are captured here.</p>
  `;
});

loadDetails();
