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
| `assets/site.js` | Theme preference, email copy, lazy video loading, author expansion, and image lightbox |
| `Maijunxian_Wang.jpg` | Profile photo |
| `Maijunxian_Wang_CV.pdf` | Two-page English research CV, updated 2026-10-12 from Mark's approved content |
| `figs/vbvr_pro.mp4` | Lightweight VBVR-Pro publication video used on the homepage |
| `figs/vbvr_pro_poster.jpg` | Poster frame shown before the VBVR-Pro video loads |
| `figs/object_permanence.mp4` | Public TOP demonstration video, aligned with Hokin Deng's homepage |
| `figs/object_permanence_poster.jpg` | TOP poster frame extracted from the demonstration video |
| `archive/` | Retired assets (dated subfolders) |

## Structure

`index.html` and `zh/index.html` supply language-specific front matter to the shared
`_layouts/home.html` layout. GitHub Pages/Jekyll renders `/` in English and `/zh/`
in Chinese. Update both branches of localized copy in the layout when wording changes.
The main URL always opens in English, regardless of browser locale or a previously
saved language preference. Chinese is available through the explicit `/zh/` route
and the language switch. Language links work without JavaScript; theme preference
is still remembered.

Omni-Reason remains a separate, text-only ongoing project. Publications are grouped
into Conference Papers, Preprints, and Workshop Papers. All publication cards use
the same left-media/right-text layout on desktop and stack media above text on
phones. Thumbnails use a 16:9 frame without cropping the source. Videos load near
the viewport, and none loads automatically when reduced motion is requested.

Every author list shows at most the first **12 authors** in original order, matching
the established VBVR preview length. Longer lists expand in place; Mark's position
does not change this cutoff. Preserve all equal-contribution/advising/corresponding
markers when editing author lists. Research Interests is intentionally limited to
Visual Reasoning, Video Generation & World Models, and Cognitively Grounded AI.

### TOP media and resource provenance

- Source page: https://hokindeng.com/
- Video: https://hokindeng.com/images/object-permanence.mp4
- The local video is an unchanged 2,528,138-byte copy (5 seconds, H.264, 1920×1080).
  SHA-256: `5da90f91a9e558b7fed8d8fb384abf3d6096d7a7dba57191d889b665a873087e`.
- The poster is a 640px-wide frame at 1 second; publication media uses the same
  local asset naming convention as the existing VBVR videos.
- Paper, Website, Code, Data, Model, Benchmark, and Leaderboard destinations match
  the source homepage's TOP card as checked on 2026-10-12.

## Activity log

- 2026-10-12: Refined the downloadable two-page CV after Mark approved the
  title-first text and explicitly requested website publication. Page one now
  contains education, interests, the award and publications; page two keeps all
  project-level research experience together. Paper titles are clickable, long
  author lists preserve order and equal-contribution markers, and body emphasis
  is limited to the two main Omni-Reason results. TOP now specifies parameterizing
  100 team-authored, single-scene Blender scripts. Both pages passed visual
  inspection; compilation, text bounds and all 13 link annotations passed.
  PDF SHA-256: `b50d1b0b9dd8b6109728dba0bfd92347a8dcd7807de5fc82cb2a466b6d55619e`.
  Homepage content, layout and CV URL are unchanged. The prior downloadable PDF
  remains recoverable from commit `1df0bf5da62bd0617f3dc01d3c3e92bdfbe4ce13`.
- 2026-10-12: Updated the downloadable CV after Mark explicitly requested both
  the new English document and publication on his website. The two-page PDF
  separates the user-confirmed Omni-Reason corpus (24M input-target video pairs
  across 300 tasks) from single-model capability across 100 CV tasks, retains
  the research-in-progress label, and updates project-level contributions,
  education, award wording, and conference/preprint/workshop groupings. Both
  pages were visually inspected; compilation, text bounds and 13 PDF link
  annotations passed validation. SHA-256:
  `50d36614c52a52cb50fe633b9fbfdad17503d00ce7c1be8ec54091b89621955a`.
  No homepage copy, layout or private applicant material was changed. The
  previous PDF remains recoverable from commit
  `9ae31e5faef32bd0ddcf102a77e2c9e606340bcf`.
- 2026-10-12: Prepared an English-default refinement locally at Mark's request.
  Removed saved-language redirects and persistence so visiting the main URL never
  switches to Chinese automatically. Explicit Chinese URLs and manual switching
  remain supported; theme persistence is unchanged. Verified with a Chinese
  browser locale and missing/Chinese/English/invalid saved preferences, manual
  switching in both directions, and JavaScript disabled. Mark explicitly
  authorized publication of this refinement on 2026-10-12.
- 2026-10-12: At Mark's request, retained the formal Sayan Gul Award name and
  restored its explanatory descriptor: "Best Undergraduate Student Paper" in
  English and "最佳本科生论文" in Chinese. Dezhi Luo's July 2026 update at
  https://ihzedoul.com/ explicitly describes the FlipSet award this way; checked
  on 2026-10-12. This is an undergraduate-paper distinction, not the separate
  Marr Prize or an unrestricted conference-wide Best Paper claim.
- 2026-10-12: Prepared the approved second layout/content revision locally:
  changed the opening to vision as a reasoning medium distinct from language,
  reduced interests to three, grouped nine papers into five conference papers,
  two preprints and two workshop papers, standardized publication media cards,
  added TOP's public video/resources, and applied a fixed 12-author preview to
  every list. Removed TOP's one-off contribution paragraph for consistency and
  removed AGI as Second Being from the rendered homepage at Mark's request;
  its previous entry remains recoverable in commit
  `a73450f57dc4ff5cb5605c436287b5fbd682946d`. No source paper or file was deleted.
  The downloadable CV and the existing visual theme remain unchanged.
  Mark explicitly authorized publication. Strict bilingual rendering and 14
  desktop/mobile viewport checks passed, as did author expansion, theme/language
  navigation, lazy video playback and image lightbox checks.
- 2026-10-12: Updated both languages around visual reasoning, cognitively grounded
  task design, scalable data construction, and video-model post-training. Identified
  Hippocampal as the current research team and Grow AI Like a Child as a prior
  affiliation. Added Omni-Reason as an explicitly ongoing project, without
  unpublished results or private links. Added the public Object Permanence
  preprint using arXiv:2609.28654v1 author order and Mark's confirmed generator
  contribution. Standardized the CogSci recognition to "Sayan Gul Award".
  Existing publication markers, page design, URLs, and downloadable CV are retained.
  Validated Liquid rendering and English/Chinese desktop/mobile layouts, author
  expansion, theme switching, and language navigation before publication.
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
