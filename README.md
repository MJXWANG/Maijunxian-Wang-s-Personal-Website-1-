# Maijunxian (Mark) Wang — Personal Website

Academic homepage for Maijunxian (Mark) Wang, undergraduate researcher in Cognitive
Science at UC Berkeley. The English and Chinese pages are built by GitHub Pages from
a shared Jekyll layout.

**Live:** https://mjxwang.github.io/Maijunxian-Wang-s-Personal-Website-1-/

## Contents

| File | Purpose |
|------|---------|
| `index.html` | English route and preserved legacy single-page source |
| `zh/index.html` | Chinese route |
| `_layouts/home.html` | Shared page structure and publication content |
| `assets/site.css` | Responsive layout, themes, publication cards, and accessibility styles |
| `assets/site.js` | Theme/language preferences, email copy, lazy video loading, author expansion, and image lightbox |
| `Maijunxian_Wang.jpg` | Profile photo |
| `Maijunxian_Wang_CV.pdf` | Downloadable CV (kept in sync with the `markcv` source) |
| `figs/vbvr_pro.mp4` | Lightweight VBVR-Pro publication video used on the homepage |
| `figs/vbvr_pro_poster.jpg` | Poster frame shown before the VBVR-Pro video loads |
| `archive/` | Retired assets (dated subfolders) |

## Structure

`index.html` and `zh/index.html` supply language-specific front matter to the shared
`_layouts/home.html` layout. GitHub Pages/Jekyll renders `/` in English and `/zh/`
in Chinese. Update both branches of localized copy in the layout when wording changes.

VBVR-Pro and VBVR are featured cards. Other publications use compact cards. Only
the lead VBVR-Pro video loads immediately; remaining videos load near the viewport,
and no video is loaded automatically when reduced motion is requested.

## Activity log

- 2026-09-02: Made light mode the default for first-time visitors while preserving
  a returning visitor's explicit theme selection.
- 2026-09-02: Split English and Chinese into crawlable routes with canonical,
  hreflang, Open Graph, and Twitter metadata; added persistent theme/language
  preferences, keyboard-visible focus states, an accessible image lightbox, safe
  external links, and explicit media dimensions. Promoted VBVR-Pro and VBVR to
  featured cards, compacted the remaining publications, and changed secondary
  videos to viewport-based loading without adding a pause control. Marked the first
  six VBVR-Pro authors as equal contributors and Hokin Deng and Zhongang Cai as
  corresponding authors, following the paper source.
- 2026-09-02: Made the visible sidebar email copy to the clipboard on click,
  added bilingual success feedback, and retained `mailto:` as the no-copy
  fallback.
- 2026-09-02: Replaced the generic sidebar Email/邮箱 label with the visible
  `mjxwang@berkeley.edu` address while retaining the `mailto:` link.
- 2026-09-02: Added VBVR-Pro as the leading publication, using the same public
  project video and publication metadata as Hokin Deng's homepage, with the
  complete 52-author list and official Paper, Website, Code, Data, Models,
  Bench, Leaderboard, and Scorers links.
