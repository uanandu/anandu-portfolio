# Security

## Audit — Standby Portfolio Page

Audited: 2026-07-08  
Scope: `index.html`, `static/style.css`, `static/script.js`

---

### Findings & Resolutions

| # | Finding | Severity | Status |
|---|---------|----------|--------|
| 1 | Third-party CDN script (HTMX from unpkg) | High | Removed |
| 2 | Inline `<script>` block prevented a strict CSP | Medium | Fixed |
| 3 | No Content Security Policy | Medium | Fixed |
| 4 | `novalidate` with no client-side validation guard | Low | Fixed |
| 5 | Web3Forms access key exposed in HTML source | Informational | Accepted |

---

### 1. Third-party CDN Script (Removed)

**Risk:** A compromised CDN (unpkg) could serve malicious JavaScript that runs with full page access.

**Fix:** HTMX was removed entirely — the form is submitted with a plain `fetch()` in `static/script.js`, so no third-party JavaScript loads at all and `script-src` is locked to `'self'`.

> Historical note: the previous SRI hash was computed with
> `curl -s https://unpkg.com/htmx.org@2.0.4 | openssl dgst …`, which hashes
> unpkg's *redirect page* rather than the JavaScript file, producing a hash
> that never matched — the browser blocked the script and the form silently
> broke. If a CDN script is ever reintroduced, pin the full file path
> (e.g. `…/dist/htmx.min.js`) and hash that exact URL with `curl -sL`.

---

### 2. Inline Script (Fixed)

**Risk:** Inline `<script>` blocks in HTML require `'unsafe-inline'` in the Content Security Policy, which weakens XSS protection significantly.

**Fix:** Moved all JavaScript to `static/script.js` and loaded it with `defer`. The CSP `script-src` now only allows `'self'`.

---

### 3. Content Security Policy (Fixed)

**Risk:** Without a CSP, a browser will execute any script injected into the page (e.g., via a future vulnerability in a dependency).

**Fix:** Added a `<meta http-equiv="Content-Security-Policy">` tag with a strict allowlist:

| Directive | Allowed |
|-----------|---------|
| `script-src` | `'self'` |
| `style-src` | `'self'`, `fonts.googleapis.com` |
| `font-src` | `fonts.gstatic.com` |
| `img-src` | `'self'` |
| `connect-src` | `api.web3forms.com` (fetch submission) |
| `form-action` | `api.web3forms.com` (no-JS fallback post) |
| `frame-ancestors` | `'none'` (blocks clickjacking) |
| `default-src` | `'none'` (deny everything else) |

> Note: A `<meta>` CSP cannot set `frame-ancestors`. For full clickjacking protection, set the `Content-Security-Policy` and `X-Frame-Options: DENY` HTTP headers at the hosting layer (Netlify/Vercel config).

---

### 4. Client-side Validation (Fixed)

**Risk:** With `novalidate` on the form, browsers skip built-in validation — empty or malformed submissions reach the Web3Forms API unnecessarily.

**Fix:** The `submit` handler in `static/script.js` validates all three fields and checks email format with a regex before the `fetch()` request is sent.

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
