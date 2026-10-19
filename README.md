# endured-site

Marketing site for Endured, endured.app.

Static HTML/CSS, set in Spectral and Public Sans. The home page is a session: it runs Bone to Iron from top to bottom, and a meter reads the elapsed time from how far down you are. Deployed via Cloudflare Pages with GitHub auto-deploy.

## Structure

```
.
├── index.html         # marketing page
├── privacy.html       # privacy policy (linked from app Settings)
├── support.html       # support page with FAQ
├── event/duo.html     # 2.1 release page (deep link target)
├── styles.css         # shared stylesheet
├── scripts.js         # the session meter on the home page
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

None. The privacy policy says the site collects nothing: no analytics, no cookies, no third-party scripts. Keep it that way.
