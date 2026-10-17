# 🚀 Saud App Studio — Official Developer Website

A modern, high-converting, mobile-responsive website built for **Saud App Studio** and optimized for the **Google Play Console** and **GitHub Pages**.

Designed to showcase your Android apps, establish developer authority, boost organic installs, and comply with all Google Play store requirements (including dedicated Privacy Policy and Terms of Service).

---

## 🌟 Features Included

- **High-Converting Hero Section**: Sleek dark aesthetic with glowing ambient orbs, modern typography, floating feature badges, and direct Google Play badge CTAs.
- **Flagship App Showcase (Advanced English Dictionary)**:
  - High-res simulated phone UI mockup with audio pronunciations, dictionary search, and offline status.
  - Interactive **QR Code** card for instant camera-scan mobile installation from desktop visitors.
  - Feature highlights (500K+ offline words, US/UK accents, thesaurus, vocabulary quiz).
- **Dedicated App Landing Page**: Located at [`apps/advanced-english-dictionary.html`](apps/advanced-english-dictionary.html) with full technical specifications (OS requirements, package ID, download size) and changelog.
- **Modular App Portfolio Grid**:
  - Interactive category filtering tabs (*All Apps*, *Education*, *Utilities*, *Coming Soon*).
  - Ready to add unlimited new apps as your studio expands.
- **Google Play Compliance Ready**:
  - Full **Privacy Policy** (`privacy-policy.html`) tailored for Google Play Store review.
  - **Terms of Service** (`terms.html`).
- **SEO & Social Share Ready**:
  - OpenGraph & Twitter Card meta tags for previews on WhatsApp, Telegram, and X.
  - Schema.org `SoftwareApplication` & `Organization` JSON-LD structured data for Google search indexing.
  - `sitemap.xml` and `robots.txt` included.

---

## 📁 Project Structure

```text
saud_app_studio/
├── index.html                           # Main Studio Homepage
├── privacy-policy.html                  # Play Store Compliant Privacy Policy
├── terms.html                           # Terms of Service
├── robots.txt                           # Search engine crawling rules
├── sitemap.xml                          # SEO Sitemap
├── .nojekyll                            # GitHub Pages asset flag
├── README.md                            # Documentation & Deployment Guide
├── apps/
│   └── advanced-english-dictionary.html # Dedicated Product Landing Page
└── assets/
    ├── css/
    │   └── style.css                    # Modern CSS design system
    ├── js/
    │   └── main.js                      # Interactivity, tabs, FAQ, share buttons
    └── images/
        ├── logo.svg                     # Saud App Studio brand vector logo
        ├── app-icon-dictionary.svg      # Advanced English Dictionary 3D squircle icon
        ├── google-play-badge.svg        # Official Google Play badge vector
        ├── phone-screen-dictionary.svg  # High-res simulated phone UI mockup
        └── qr-placeholder.svg           # Scan-to-install QR code
```

---

## ⚙️ How to Customize Your Links

All core URLs can be updated in one place! Open [`assets/js/main.js`](assets/js/main.js):

```javascript
const STUDIO_CONFIG = {
  developerName: "Saud App Studio",
  supportEmail: "saudappstudio.support@gmail.com",
  playStoreDeveloperUrl: "https://play.google.com/store/apps/dev?id=saudappstudio",
  dictionaryAppUrl: "https://play.google.com/store/apps/details?id=com.saudappstudio.advancedenglishdictionary",
  githubUrl: "https://github.com/saudappstudio"
};
```

To update the Google Play links in the HTML files, search for:
`https://play.google.com/store/apps/details?id=com.saudappstudio.advancedenglishdictionary`
and replace it with your app's published URL from Google Play Console.

---

## 🚢 How to Deploy to GitHub Pages (Free Hosting)

1. **Initialize Git & Commit**:
   ```bash
   git init
   git add .
   git commit -m "Initial release of Saud App Studio website"
   ```

2. **Create a GitHub Repository**:
   - Go to [GitHub](https://github.com) and create a new public repository (e.g., `saud-app-studio` or `<your-username>.github.io`).

3. **Push to GitHub**:
   ```bash
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git branch -M main
   git push -u origin main
   ```

4. **Activate GitHub Pages**:
   - In your repository, go to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, choose **Deploy from a branch**.
   - Select branch **`main`** and folder **`/(root)`**, then click **Save**.
   - Your site will be live at:
     `https://<your-username>.github.io/<your-repo-name>/`

---

## 📱 Adding to Google Play Console

To maximize visibility and keep your app fully compliant:

1. **Privacy Policy URL**:
   - In Google Play Console, go to **Policy and programs** > **App content**.
   - Click **Privacy Policy** and paste:
     `https://<your-username>.github.io/<your-repo-name>/privacy-policy.html`
2. **Developer Website**:
   - In Google Play Console, go to **Grow** > **Store presence** > **Store settings**.
   - Under **Website**, enter:
     `https://<your-username>.github.io/<your-repo-name>/`
3. **App Description**:
   - In your app's store description, add:
     *"Visit official website: https://<your-username>.github.io/<your-repo-name>/"*

---

## ➕ Adding More Apps in the Future

When you launch your next app:
1. Open [`index.html`](index.html), find the `<div class="apps-grid">` section.
2. Duplicate an `<div class="app-card">` card and update the app title, icon, description, and status tag to `status-live`.
3. Create a copy of [`apps/advanced-english-dictionary.html`](apps/advanced-english-dictionary.html) for your new app.
