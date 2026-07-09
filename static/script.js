document.getElementById('yr').textContent = new Date().getFullYear();

// Visitor counter — persists per-browser, counts up with a roll animation.
(function () {
  const BASE = 63;
  const delta = parseInt(localStorage.getItem('vc') || '0', 10);
  localStorage.setItem('vc', delta + 1);
  const target = BASE + delta;
  const el = document.getElementById('visitor-count');
  if (!el) return;

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = target.toLocaleString();
    return;
  }

  const DURATION = 900, START_DELAY = 1400;
  const start = Math.max(0, target - Math.min(target, 30));
  let startTime = null;

  function ease(t) { return 1 - Math.pow(1 - t, 3); }

  setTimeout(() => {
    requestAnimationFrame(function step(now) {
      if (!startTime) startTime = now;
      const t = Math.min((now - startTime) / DURATION, 1);
      el.textContent = Math.round(start + (target - start) * ease(t)).toLocaleString();
      if (t < 1) requestAnimationFrame(step);
    });
  }, START_DELAY);
})();

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

// Typewriter cycling through roles. Stays on the first role (static)
// when the visitor prefers reduced motion.
(function () {
  const el = document.getElementById('role-word');
  if (!el) return;

  const roles = [
    'a fullstack developer',
    'a DevOps engineer',
    'an AI enthusiast',
  ];
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    el.textContent = roles[0];
    return;
  }

  const TYPE_MS = 85, ERASE_MS = 40, HOLD_MS = 2400, GAP_MS = 400, START_MS = 3000;
  let word = 0, chars = roles[0].length, erasing = true;

  function tick() {
    chars += erasing ? -1 : 1;
    el.textContent = roles[word].slice(0, chars);

    let delay = erasing ? ERASE_MS : TYPE_MS;
    if (erasing && chars === 0) {
      erasing = false;
      word = (word + 1) % roles.length;
      delay = GAP_MS;
    } else if (!erasing && chars === roles[word].length) {
      erasing = true;
      delay = HOLD_MS;
    }
    setTimeout(tick, delay);
  }

  // let the entrance choreography finish before the cycle begins
  setTimeout(tick, START_MS);
})();

// Mad-libs inputs stretch to fit what's typed, so the sentence
// keeps flowing naturally around longer answers.
document.querySelectorAll('.ml-input').forEach((input) => {
  const baseSize = input.size;
  input.addEventListener('input', () => {
    input.size = Math.max(baseSize, input.value.length + 1);
  });
});

// Contact form: submitted with fetch so the page never reloads. On success
// the sentence flies off like a paper plane, a "sent" stamp thumps down and
// the confirmation types itself out — echoing the role typewriter above.
(function () {
  const form   = document.getElementById('contact-form');
  const result = document.getElementById('contact-result');
  const button = form.querySelector('.submit-btn');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  function showError(text) {
    result.innerHTML = `
      <div class="result result--error">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M8 5v4M8 11v.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/>
          <circle cx="8" cy="8" r="6.5" stroke="currentColor" stroke-width="1.2"/>
        </svg>
        <span></span>
      </div>`;
    result.querySelector('span').textContent = text;
  }

  function showSuccess() {
    // Full text lands in the live region at once for screen readers;
    // the typewriter plays out in a parallel aria-hidden line.
    const text = 'Message received — I’ll be in touch.';
    result.innerHTML = `
      <div class="result--sent">
        <span class="stamp" aria-hidden="true">Sent ✈</span>
        <p class="sent-line">
          <span class="visually-hidden"></span>
          <span class="sent-type" aria-hidden="true"></span>
        </p>
      </div>`;
    result.querySelector('.visually-hidden').textContent = text;

    const typed = result.querySelector('.sent-type');
    if (reduceMotion.matches) {
      typed.textContent = text;
      return;
    }
    typed.classList.add('typing');
    let i = 0;
    (function step() {
      typed.textContent = text.slice(0, ++i);
      if (i < text.length) setTimeout(step, 32);
      else typed.classList.remove('typing');
    })();
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const name    = form.querySelector('[name="name"]').value.trim();
    const about   = form.querySelector('[name="about"]').value.trim();
    const email   = form.querySelector('[name="email"]').value.trim();
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!name || !about || !email || !emailOk) {
      showError(!emailOk && email ? 'Please enter a valid email address.' : 'Please fill in all fields.');
      return;
    }

    result.innerHTML = '';
    form.classList.add('is-sending');
    button.disabled = true;

    let ok = false;
    try {
      // Only safelisted headers, so the request stays "simple" — the
      // web3forms API rejects CORS preflights outright.
      const res  = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      const data = await res.json();
      ok = res.ok && data.success === true;
    } catch (err) {
      ok = false;
    }

    form.classList.remove('is-sending');
    button.disabled = false;

    if (!ok) {
      showError('Something went wrong — try emailing me directly.');
      return;
    }

    // Fold the sentence into a paper plane and send it off, then stamp.
    form.addEventListener('animationend', function onFly(ev) {
      if (ev.target !== form) return;
      form.removeEventListener('animationend', onFly);
      form.classList.add('form--gone');
      showSuccess();
    });
    form.classList.add('form--sent');
  });
})();
