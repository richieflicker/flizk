// Shared by the inline <head> script in app/layout.tsx and components/LogoIntro.tsx so both
// make the same "should the logo intro play?" decision.
export const INTRO_SESSION_KEY = "flizkIntroPlayed";

// Crawlers and automated speed tests always arrive with an empty sessionStorage, so without
// this they would sit through the full intro on every visit. Skipping it for them shows the
// same content a visitor sees — the intro is decoration only.
export const INTRO_SKIP_UA_PATTERN =
  "bot|crawl|spider|lighthouse|pagespeed|headless|slurp|bingpreview";

// Hero content stays hidden (via CSS) only while this class is on <html>. If it is never set,
// or removed by any safeguard, the hero is simply visible.
export const INTRO_PENDING_CLASS = "flizk-intro-pending";

// Last-resort timer: if the intro never starts (e.g. the gsap chunk fails to load), reveal the
// hero anyway after this long.
export const INTRO_FAILSAFE_MS = 6000;

export const introBootScript = `(function(){try{
var d=document.documentElement;
if(location.pathname!=="/")return;
var skip=false;
try{skip=sessionStorage.getItem(${JSON.stringify(INTRO_SESSION_KEY)})==="1"}catch(e){}
try{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)skip=true}catch(e){}
try{if(navigator.webdriver||new RegExp(${JSON.stringify(INTRO_SKIP_UA_PATTERN)},"i").test(navigator.userAgent))skip=true}catch(e){}
if(skip)return;
d.classList.add(${JSON.stringify(INTRO_PENDING_CLASS)});
setTimeout(function(){if(!d.classList.contains("flizk-intro-active"))d.classList.remove(${JSON.stringify(INTRO_PENDING_CLASS)})},${INTRO_FAILSAFE_MS});
}catch(e){}})();`;
