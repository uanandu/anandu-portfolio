document.getElementById('yr').textContent = new Date().getFullYear();

// Subtle parallax on the portrait — pointer devices only, and never
// when the visitor prefers reduced motion.
(function () {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer  = window.matchMedia('(pointer: fine)');
  const cell = document.querySelector('.cell--image');
  const img  = cell && cell.querySelector('img');
  if (!img || !finePointer.matches || reduceMotion.matches) return;

  cell.addEventListener('mousemove', (e) => {
    const r = cell.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width  - 0.5;
    const y = (e.clientY - r.top)  / r.height - 0.5;
    img.style.setProperty('--px', `${(x * -8).toFixed(1)}px`);
    img.style.setProperty('--py', `${(y * -8).toFixed(1)}px`);
  });

  cell.addEventListener('mouseleave', () => {
    img.style.setProperty('--px', '0px');
    img.style.setProperty('--py', '0px');
  });
})();

// Mad-libs inputs stretch to fit what's typed, so the sentence
// keeps flowing naturally around longer answers.
document.querySelectorAll('.ml-input').forEach((input) => {
  const baseSize = input.size;
  input.addEventListener('input', () => {
    input.size = Math.max(baseSize, input.value.length + 1);
  });
});

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
