const themeButton = document.getElementById("themeButton");
function currentTheme() {
  return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
}
function updateThemeButton() {
  const dark = currentTheme() === "dark";
  themeButton.textContent = dark ? themeButton.dataset.lightLabel : themeButton.dataset.darkLabel;
  themeButton.setAttribute("aria-pressed", String(dark));
}
themeButton.addEventListener("click", function () {
  const nextTheme = currentTheme() === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", nextTheme);
  try { localStorage.setItem("siteTheme", nextTheme); } catch (error) { /* Storage is optional. */ }
  updateThemeButton();
});
updateThemeButton();

const languageLink = document.getElementById("languageLink");
languageLink.addEventListener("click", function () {
  try { localStorage.setItem("siteLanguage", languageLink.hreflang); } catch (error) { /* Storage is optional. */ }
});

const emailLink = document.getElementById("emailLink");
const emailFeedback = document.getElementById("emailFeedback");
let emailFeedbackTimer;
function showEmailCopied() {
  emailFeedback.textContent = emailLink.dataset.copiedLabel;
  emailFeedback.classList.add("visible");
  window.clearTimeout(emailFeedbackTimer);
  emailFeedbackTimer = window.setTimeout(function () {
    emailFeedback.classList.remove("visible");
    emailFeedback.textContent = "";
  }, 1600);
}
async function copyEmail(event) {
  event.preventDefault();
  const email = emailLink.dataset.email;
  try {
    if (!navigator.clipboard || !window.isSecureContext) throw new Error("Clipboard API unavailable");
    await navigator.clipboard.writeText(email);
    showEmailCopied();
  } catch (error) {
    const copyField = document.createElement("textarea");
    copyField.value = email;
    copyField.setAttribute("readonly", "");
    copyField.style.position = "fixed";
    copyField.style.opacity = "0";
    document.body.appendChild(copyField);
    copyField.focus();
    copyField.select();
    copyField.setSelectionRange(0, email.length);
    let copied = false;
    try { copied = document.execCommand("copy"); } catch (fallbackError) { copied = false; }
    copyField.remove();
    if (copied) showEmailCopied(); else window.location.href = emailLink.href;
  }
}
emailLink.addEventListener("click", copyEmail);

document.querySelectorAll(".morebtn").forEach(function (button) {
  const rest = document.getElementById(button.getAttribute("aria-controls"));
  button.addEventListener("click", function () {
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    rest.hidden = expanded;
    button.textContent = expanded ? button.dataset.moreLabel : button.dataset.lessLabel;
  });
});

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const deferredVideos = document.querySelectorAll("video[data-src]");
function loadAndPlayVideo(video) {
  if (video.dataset.loaded === "true" || reduceMotion) return;
  video.src = video.dataset.src;
  video.dataset.loaded = "true";
  video.addEventListener("canplay", function () {
    video.play().catch(function () { /* The poster remains if autoplay is blocked. */ });
  }, {once: true});
  video.load();
}
if (!reduceMotion && "IntersectionObserver" in window) {
  const videoObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      loadAndPlayVideo(entry.target);
      observer.unobserve(entry.target);
    });
  }, {rootMargin: "240px 0px"});
  deferredVideos.forEach(function (video) {
    if (video.dataset.priority === "true") loadAndPlayVideo(video);
    else videoObserver.observe(video);
  });
} else if (!reduceMotion) {
  deferredVideos.forEach(loadAndPlayVideo);
}

const lightbox = document.getElementById("lightbox");
const lightboxImage = lightbox.querySelector("img");
const lightboxClose = document.getElementById("lightboxClose");
let lightboxTrigger = null;
function closeLightbox() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
  lightboxImage.src = "";
  if (lightboxTrigger) lightboxTrigger.focus();
}
document.querySelectorAll(".image-zoom").forEach(function (button) {
  button.addEventListener("click", function () {
    const image = button.querySelector("img");
    lightboxTrigger = button;
    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    lightboxClose.focus();
  });
});
lightboxClose.addEventListener("click", closeLightbox);
lightbox.addEventListener("click", function (event) {
  if (event.target === lightbox) closeLightbox();
});
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && lightbox.classList.contains("open")) closeLightbox();
});
