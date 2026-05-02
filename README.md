# Oromo News & Views

A simple, fast, accessible static website delivering news, cultural stories,
and community perspectives for the Oromo people — hosted on **GitHub Pages**.

---

## 🚀 View the Live Site

**[https://yabo1234.github.io/oromo3.html/](https://yabo1234.github.io/oromo3.html/)**

---

## 💻 View Locally

No build step or server required:

1. **Clone or download** this repository:
   ```bash
   git clone https://github.com/yabo1234/oromo3.html.git
   cd oromo3.html
   ```
2. **Open** `index.html` directly in your browser:
   - **macOS:** `open index.html`
   - **Windows:** `start index.html`
   - **Linux:** `xdg-open index.html`
   - Or simply drag the file into any browser window.

That's it — the site is pure HTML + CSS with no dependencies to install.

---

## 📁 File Structure

```
oromo3.html/
├── index.html   ← Main entry page
├── styles.css   ← Shared stylesheet (responsive, accessible)
└── README.md    ← This file
```

---

## ✨ What Was Improved

| Area | Changes |
|---|---|
| **HTML validity** | Added `<!DOCTYPE html>`, `lang="en"`, `<meta charset>`, `<meta viewport>` |
| **Semantic structure** | Proper `<header>`, `<nav>`, `<main>`, `<footer>`, `<article>`, `<section>`, headings hierarchy |
| **Accessibility** | Skip-to-content link, `aria-label` / `aria-labelledby` / `aria-current`, `role` landmarks, `prefers-reduced-motion` support |
| **Responsiveness** | Mobile-first CSS, `clamp()` fluid typography, CSS Grid auto-fill cards, sticky header |
| **SEO** | Descriptive `<title>`, `<meta name="description">`, OpenGraph and Twitter Card tags |
| **Performance** | Single external stylesheet, no render-blocking scripts, tiny inline JS for the year only |
| **Design** | CSS custom properties (color tokens), smooth hover/focus transitions, accessible color contrast |
| **Cleanup** | Consistent formatting, `prefers-reduced-motion` media query for users who prefer less animation |

---

## 🔧 GitHub Pages Setup

1. Go to **Settings → Pages** in the repository.
2. Set **Source** to the `main` branch, root (`/`) folder.
3. Click **Save** — the site will be live at `https://yabo1234.github.io/oromo3.html/`.

---

## 📝 Follow-up Suggestions

- Add real article pages (e.g. `article-1.html`) and link from the news cards.
- Integrate a lightweight CMS (e.g. Netlify CMS or Decap) for content editing without code.
- Add a language-switch button for Afaan Oromoo (`lang="om"` content).
- Use a service worker for offline support.
