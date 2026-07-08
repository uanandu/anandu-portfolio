document.getElementById('yr').textContent = new Date().getFullYear();

function handleResponse(event) {
  const ok     = event.detail.successful;
  const result = document.getElementById('contact-result');
  const form   = document.getElementById('contact-form');

  if (ok) {
    form.style.display = 'none';
    result.innerHTML = `
      <div class="result result--success">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 8.5L6.5 12L13 4.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span>Message received — I'll be in touch.</span>
      </div>`;
  } else {
    result.innerHTML = `
      <div class="result result--error">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 5v4M8 11v.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
          <circle cx="8" cy="8" r="6.5" stroke="currentColor" stroke-width="1.2"/>
        </svg>
        <span>Something went wrong — try emailing me directly.</span>
      </div>`;
  }
}

document.getElementById('contact-form').addEventListener('submit', function (e) {
  const name    = this.querySelector('[name="name"]').value.trim();
  const about   = this.querySelector('[name="about"]').value.trim();
  const email   = this.querySelector('[name="email"]').value.trim();
  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  if (!name || !about || !email || !emailOk) {
    e.preventDefault();
    e.stopPropagation();
    const result = document.getElementById('contact-result');
    result.innerHTML = `
      <div class="result result--error">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 5v4M8 11v.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
          <circle cx="8" cy="8" r="6.5" stroke="currentColor" stroke-width="1.2"/>
        </svg>
        <span>${!emailOk && email ? 'Please enter a valid email address.' : 'Please fill in all fields.'}</span>
      </div>`;
  }
});
