# endured-site

Marketing site for Endured — endured.app.

Static HTML/CSS, deployed via Cloudflare Pages with GitHub auto-deploy.

## Structure

```
.
├── index.html         # marketing page
├── privacy.html       # privacy policy (linked from app Settings)
├── support.html       # support page with FAQ
├── styles.css         # shared stylesheet
├── _headers           # Cloudflare Pages cache + security headers
└── images/            # screenshots and assets (see below)
```

## Images required

Drop these into `images/`:

| File | Source / size | Notes |
|---|---|---|
| `tonight.png` | screenshot, ~600×1300 | Tonight tab mid-session, ideally Slate stage |
| `history.png` | screenshot, ~600×1300 | History tab with several sessions |
| `live-activity.png` | screenshot, ~600×1300 | Lock screen showing the Live Activity |
| `also-01-gradient.png` | composition, ~1200×800 | The five-stage gradient as a continuous band |
| `also-02-honest.png` | screenshot or composition | A history detail showing a broken session |
| `also-03-health.png` | screenshot, ~600×1300 | Settings tab with Apple Health row |
| `also-04-device.png` | composition, ~1200×800 | Schematic of an iPhone with data labeled "stays here" |

Plus root-level assets:

| File | Size | Notes |
|---|---|---|
| `og-image.png` | 1200×630 | Open Graph preview image |
| `favicon.png` | 32×32 | Site favicon |
| `apple-touch-icon.png` | 180×180 | iOS home screen icon |

## Deployment

Connect this repo to Cloudflare Pages (build command: none, output directory: `/`). The site auto-deploys on push to `main`.

Custom domain `endured.app` configured in Cloudflare Pages → Custom domains.

## Analytics

Plausible Analytics on `endured.app`. No cookies, no personal data. Privacy policy references this.
