# Nine Fives — site clone

A faithful, self-contained static copy of [ninefives.com](https://ninefives.com/) (a Shopify
Dawn-theme storefront). Built by inspecting the live site with browser/inspector tooling and
rebuilding clean markup that reuses the original theme CSS/JS and assets.

## What's included

| Page | File | Notes |
|------|------|-------|
| Home | `index.html` | Scroll-driven **3D rack hero** (real `three.js` + the original `.glb` models), alternating text + video sections, footer |
| Catalog | `pages/catalog.html` | Collection hero, filter labels, sort dropdown, 4-up product grid (Pre-Release) |
| Contact | `pages/contact.html` | Contact form (Name / Email / Phone / Comment) |
| About Us | `pages/about-us.html` | Mission copy + "Meet the team" cards |
| Documentation | `pages/documentation.html` | Developer-resources landing with product doc cards |

## Fidelity details

- **Real assets** are vendored locally under `assets/`: the Assistant web font, the logo SVG,
  the hero fallback image, all 6 product/marketing MP4s, and the 10 `.glb` models + screen
  texture that drive the hero animation.
- **Theme styling** uses the site's actual compiled Dawn CSS (`assets/css/*.css`) plus the
  extracted color-scheme / CSS-variable block in `assets/css/theme-vars.css`.
- **The 3D hero** is the original `model-3d-banner.js` web component, pointed at the local
  models. Scrolling plays the slot-insertion animation exactly like the live site.
- **Fully offline / self-contained.** `three.js` (+ its addons), the DRACO mesh decoder, and the
  product datasheet PDFs are all vendored under `assets/vendor/` and `assets/docs/`. Verified to
  render with all non-localhost hosts blocked. The only remaining external links are the separate
  hosted docs site (`docs.ninefives.com`) and Y Combinator destination links.
- Shopify-only plumbing (analytics, checkout, cart, captcha, pixels) was intentionally removed;
  forms and cart/account links are inert.

## Run it

```bash
cd ninefives-clone
python3 -m http.server 8923
# open http://localhost:8923/index.html
```

A local web server is required (the hero loads `.glb`/font assets via `fetch`, which `file://`
blocks). No internet connection is needed — `three.js` and the DRACO decoder are served locally.

## Structure

```
index.html
pages/            catalog, contact, about-us, documentation
assets/
  css/            theme-vars + vendored Dawn component/section CSS
  js/             Dawn behaviors + model-3d-banner.js
  fonts/          Assistant (woff2/woff)
  img/            logo, favicon, hero fallback, team photos, product image
  video/          6 section MP4s
  models/         chassis, knob + 8 module .glb files
  docs/           product datasheet PDFs
  vendor/         three.js (+ addons) and DRACO decoder
```
