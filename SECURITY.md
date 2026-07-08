# Security

## Audit — Standby Portfolio Page

Audited: 2026-07-08  
Scope: `index.html`, `static/style.css`, `static/script.js`

---

### Findings & Resolutions

| # | Finding | Severity | Status |
|---|---------|----------|--------|
| 1 | HTMX loaded from CDN without Subresource Integrity | High | Fixed |
| 2 | Inline `<script>` block prevented a strict CSP | Medium | Fixed |
| 3 | No Content Security Policy | Medium | Fixed |
| 4 | `novalidate` with no client-side validation guard | Low | Fixed |
| 5 | Web3Forms access key exposed in HTML source | Informational | Accepted |

---

### 1. HTMX SRI (Fixed)

**Risk:** A compromised CDN (unpkg) could serve malicious JavaScript that runs with full page access.

**Fix:** Added `integrity` and `crossorigin` attributes to the HTMX script tag. The browser verifies the file hash before executing it — if the file is tampered with, it is blocked.

```html
<script src="https://unpkg.com/htmx.org@2.0.4"
  integrity="sha384-M06VwgoUOHG3FN0UchwWKqh9jS4ejwpoL0yjF3EVljtsxFwFETEYMkyNL5lXbJ5/"
  crossorigin="anonymous" defer></script>
```

If HTMX is upgraded, recompute the hash:
```bash
curl -s https://unpkg.com/htmx.org@NEW_VERSION | openssl dgst -sha384 -binary | openssl base64 -A
```

---

### 2. Inline Script (Fixed)

**Risk:** Inline `<script>` blocks in HTML require `'unsafe-inline'` in the Content Security Policy, which weakens XSS protection significantly.

**Fix:** Moved all JavaScript to `static/script.js` and loaded it with `defer`. The CSP now only allows `'self'` and the pinned HTMX URL.

---

### 3. Content Security Policy (Fixed)

**Risk:** Without a CSP, a browser will execute any script injected into the page (e.g., via a future vulnerability in a dependency).

**Fix:** Added a `<meta http-equiv="Content-Security-Policy">` tag with a strict allowlist:

| Directive | Allowed |
|-----------|---------|
| `script-src` | `'self'`, `unpkg.com/htmx.org/` |
| `style-src` | `'self'`, `fonts.googleapis.com` |
| `font-src` | `fonts.gstatic.com` |
| `img-src` | `'self'` |
| `connect-src` | `api.web3forms.com` |
| `frame-ancestors` | `'none'` (blocks clickjacking) |
| `default-src` | `'none'` (deny everything else) |

> Note: A `<meta>` CSP cannot set `frame-ancestors`. For full clickjacking protection, set the `Content-Security-Policy` and `X-Frame-Options: DENY` HTTP headers at the hosting layer (Netlify/Vercel config).

---

### 4. Client-side Validation (Fixed)

**Risk:** With `novalidate` on the form, browsers skip built-in validation — empty or malformed submissions reach the Web3Forms API unnecessarily.

**Fix:** Added a `submit` event listener in `static/script.js` that validates all three fields and checks email format with a regex before allowing HTMX to send the request.

---

### 5. Web3Forms Access Key (Accepted Risk)

The Web3Forms access key (`access_key`) is visible in the HTML source. This is **by design** — Web3Forms is built for static sites where the key must be public.

**Mitigations already in place:**
- Honeypot field (`botcheck`) silently rejects bot submissions
- Web3Forms free tier limits to 250 submissions/month (natural rate limit)

**Recommended action:**
- Log in to [web3forms.com](https://web3forms.com) and restrict the key to your domain (e.g., `yourdomain.com`). This prevents the key from being used on any other site.

---

### Reporting a Vulnerability

If you find a security issue, email **anandu_dev@icloud.com** directly.
