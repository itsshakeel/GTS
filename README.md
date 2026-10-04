# GTS Transport — Demo Website

A stunning, fully responsive one-page demo website for **GTS Transport**, a Pakistani
loading / offloading & goods transport company operating 24/7.

## What it is

- Dark charcoal (`#101418`) + amber (`#f5a623`) industrial theme
- Sections: sticky navbar, hero with 24/7 badge, animated stats strip, services grid,
  fleet cards (20FT Truck, Mazda Truck, Shahzore Pickup, Suzuki Pickup), How It Works,
  gallery, auto-rotating testimonials, booking form → WhatsApp deep link, FAQ accordion,
  footer, floating WhatsApp button
- Fully responsive (mobile-first), hand-written CSS — no frameworks, no build tools
- AI-generated photorealistic vehicle/team photos in `images/` (6 files)

## Files

| File          | Purpose                                        |
|---------------|------------------------------------------------|
| `index.html`  | All page markup                                |
| `style.css`   | Theme, layout, responsive breakpoints          |
| `script.js`   | Menu, scroll reveals, counters, slider, FAQ, booking → WhatsApp |
| `images/`     | hero, 4 fleet photos, loading-team photo       |

## ⚠️ Placeholder contact info — REPLACE BEFORE GOING LIVE

Every contact detail on the site is a placeholder:

- Phone: **+92 300 1234567** (`tel:+923001234567`)
- WhatsApp: **https://wa.me/923001234567**
- Email: **info@gts-example.com**

Search the files for `923001234567`, `+92 300 1234567`, and `info@gts-example.com`
and replace with the real GTS Transport details.

## Run locally

Just open `index.html` in a browser (double-click), or serve the folder:

```bash
cd ~/workspace/gts-transport
python3 -m http.server 8080
# then visit http://localhost:8080
```

## Deploy / push

The site is static — push the folder contents to GitHub and deploy to Vercel
(or any static host) as-is. No build step required.
