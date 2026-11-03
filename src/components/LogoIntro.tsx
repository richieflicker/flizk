"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export const FLIZK_INTRO_SESSION_KEY = "flizkIntroPlayed";

// Same path data as public/brand/flizk-logo.svg, reused for both the big intro mark and the
// temporary header clone used during the handoff/wind-gust. Kept inline (not an <img>) because
// the intro needs to animate individual petals, letters and strokes — something only possible
// with the SVG actually in the DOM.
const LOGO_SVG_MARKUP = `
<svg viewBox="46 34 340 144" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flizk">
  <path id="stem" d="M110 100 C110 134 118.5 156.1 140.6 173.1" fill="none" stroke="#1B6B3A" stroke-width="6" stroke-linecap="round"/>
  <g id="clover" transform="translate(110 100) scale(0.85)">
    <g class="petal" transform="rotate(0) scale(0.92)"><g class="lf">
      <path d="M0 -4 C-8 -14 -36 -30 -36 -52 C-36 -68 -14 -74 0 -58 C14 -74 36 -68 36 -52 C36 -30 8 -14 0 -4 Z" fill="#2E9B5A" stroke="#EEF4EA" stroke-width="3" stroke-linejoin="round"/>
      <path d="M0 -14 L0 -54" stroke="#1B6B3A" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
    </g></g>
    <g class="petal" transform="rotate(72) scale(0.92)"><g class="lf">
      <path d="M0 -4 C-8 -14 -36 -30 -36 -52 C-36 -68 -14 -74 0 -58 C14 -74 36 -68 36 -52 C36 -30 8 -14 0 -4 Z" fill="#2E9B5A" stroke="#EEF4EA" stroke-width="3" stroke-linejoin="round"/>
      <path d="M0 -14 L0 -54" stroke="#1B6B3A" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
    </g></g>
    <g class="petal" transform="rotate(144) scale(0.92)"><g class="lf">
      <path d="M0 -4 C-8 -14 -36 -30 -36 -52 C-36 -68 -14 -74 0 -58 C14 -74 36 -68 36 -52 C36 -30 8 -14 0 -4 Z" fill="#2E9B5A" stroke="#EEF4EA" stroke-width="3" stroke-linejoin="round"/>
      <path d="M0 -14 L0 -54" stroke="#1B6B3A" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
    </g></g>
    <g class="petal" transform="rotate(216) scale(0.92)"><g class="lf">
      <path d="M0 -4 C-8 -14 -36 -30 -36 -52 C-36 -68 -14 -74 0 -58 C14 -74 36 -68 36 -52 C36 -30 8 -14 0 -4 Z" fill="#2E9B5A" stroke="#EEF4EA" stroke-width="3" stroke-linejoin="round"/>
      <path d="M0 -14 L0 -54" stroke="#1B6B3A" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
    </g></g>
    <g class="petal" transform="rotate(288) scale(0.92)"><g class="lf">
      <path d="M0 -4 C-8 -14 -36 -30 -36 -52 C-36 -68 -14 -74 0 -58 C14 -74 36 -68 36 -52 C36 -30 8 -14 0 -4 Z" fill="#2E9B5A" stroke="#EEF4EA" stroke-width="3" stroke-linejoin="round"/>
      <path d="M0 -14 L0 -54" stroke="#1B6B3A" stroke-width="2.5" stroke-linecap="round" opacity="0.5"/>
    </g></g>
  </g>
  <g fill="#14402F" id="word">
    <path class="letter" d="M190.6 160.756Q187.408 160.756 185.686 158.992Q183.964 157.228 183.964 153.868V107.584Q183.964 104.308 185.728 102.544Q187.492 100.78 190.768 100.78H219.496Q222.016 100.78 223.318 102.082Q224.62 103.384 224.62 105.82Q224.62 108.34 223.318 109.642Q222.016 110.944 219.496 110.944H196.984V125.392H217.648Q220.168 125.392 221.512 126.694Q222.856 127.996 222.856 130.432Q222.856 132.868 221.512 134.212Q220.168 135.556 217.648 135.556H196.984V153.868Q196.984 160.756 190.6 160.756Z"/>
    <path class="letter" d="M248.964 160.924Q241.488 160.924 237.792 156.766Q234.096 152.608 234.096 144.376V106.492Q234.096 103.3 235.734 101.662Q237.372 100.024 240.48 100.024Q243.504 100.024 245.142 101.662Q246.78 103.3 246.78 106.492V143.872Q246.78 147.316 248.25 148.954Q249.72 150.592 252.156 150.592Q252.828 150.592 253.416 150.508Q254.004 150.424 254.676 150.424Q256.02 150.256 256.566 151.222Q257.112 152.188 257.112 155.044Q257.112 157.564 256.104 158.866Q255.096 160.168 252.996 160.588Q252.156 160.672 251.064 160.798Q249.972 160.924 248.964 160.924Z"/>
    <path class="letter" d="M268.438 160.672Q265.33 160.672 263.692 158.866Q262.054 157.06 262.054 153.784V125.056Q262.054 121.696 263.692 119.89Q265.33 118.084 268.438 118.084Q271.462 118.084 273.1 119.89Q274.738 121.696 274.738 125.056V153.784Q274.738 157.06 273.142 158.866Q271.546 160.672 268.438 160.672ZM268.438 111.196Q264.91 111.196 263.02 109.558Q261.13 107.92 261.13 104.896Q261.13 101.788 263.02 100.15Q264.91 98.512 268.438 98.512Q271.966 98.512 273.814 100.15Q275.662 101.788 275.662 104.896Q275.662 107.92 273.814 109.558Q271.966 111.196 268.438 111.196Z"/>
    <path class="letter" d="M288.072 160.0Q286.224 160.0 284.964 159.034Q283.704 158.068 283.284 156.556Q282.864 155.044 283.326 153.28Q283.788 151.516 285.216 150.004L303.36 128.248H287.568Q285.3 128.248 284.04 126.988Q282.78 125.728 282.78 123.544Q282.78 121.192 284.04 119.974Q285.3 118.756 287.568 118.756H311.844Q314.112 118.756 315.456 119.764Q316.8 120.772 317.262 122.242Q317.724 123.712 317.346 125.434Q316.968 127.156 315.54 128.668L297.228 150.592H313.944Q318.732 150.592 318.732 155.296Q318.732 157.564 317.472 158.782Q316.212 160.0 313.944 160.0Z"/>
  </g>
  <g id="kmark" transform="translate(324 101) scale(0.69)">
    <path class="kstroke" d="M10 9 L10 77" fill="none" stroke="#14402F" stroke-width="18" stroke-linecap="round"/>
    <path class="kstroke" d="M32 46 L72 77" fill="none" stroke="#14402F" stroke-width="18" stroke-linecap="round"/>
    <path class="kstroke" d="M12 56 C26 48 38 38 50 30" fill="none" stroke="#14402F" stroke-width="18" stroke-linecap="round"/>
    <g transform="translate(52 28) rotate(50)">
    <g class="ksprout">
      <path d="M0 -4 C-8 -14 -36 -30 -36 -52 C-36 -68 -14 -74 0 -58 C14 -74 36 -68 36 -52 C36 -30 8 -14 0 -4 Z" fill="#2E9B5A"/>
      <path d="M0 -14 L0 -54" stroke="#EEF4EA" stroke-width="4" stroke-linecap="round" opacity="0.7"/>
    </g>
    </g>
  </g>
</svg>`;

function setLeaf(el: Element, s: number, r: number) {
  el.setAttribute("transform", `translate(0 -4) rotate(${r}) scale(${Math.max(s, 0.0001)}) translate(0 4)`);
}

export function LogoIntro() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  const overlayRef = useRef<HTMLDivElement | null>(null);
  const bigMarkWrapRef = useRef<HTMLDivElement | null>(null);
  const skipBtnRef = useRef<HTMLButtonElement | null>(null);
  const cloneWrapRef = useRef<HTMLDivElement | null>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (!isHome) return;

    let reduceMotion = false;
    let alreadyPlayed = false;
    try {
      reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      alreadyPlayed = sessionStorage.getItem(FLIZK_INTRO_SESSION_KEY) === "1";
    } catch {
      // sessionStorage/matchMedia unavailable — fall through to playing the intro
    }

    if (reduceMotion || alreadyPlayed) {
      settleInstantly();
      return;
    }

    let cancelled = false;
    import("gsap").then(({ gsap }) => {
      if (cancelled) return;
      startIntro(gsap);
    });

    return () => {
      cancelled = true;
      tlRef.current?.kill();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isHome]);

  function markIntroPlayed() {
    try {
      sessionStorage.setItem(FLIZK_INTRO_SESSION_KEY, "1");
    } catch {
      // ignore
    }
  }

  function settleInstantly() {
    document.documentElement.classList.remove("flizk-intro-active");
    document.body.classList.remove("flizk-intro-locked");
    if (overlayRef.current) overlayRef.current.style.display = "none";
    if (skipBtnRef.current) skipBtnRef.current.style.display = "none";
    markIntroPlayed();
  }

  function animateHeroIn(gsap: typeof import("gsap").gsap, reduceMotion: boolean) {
    const heroEls = document.querySelectorAll("[data-intro-reveal]");
    if (!heroEls.length) return;
    if (reduceMotion) {
      gsap.set(heroEls, { opacity: 1, y: 0 });
      return;
    }
    gsap.fromTo(
      heroEls,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.65, ease: "power3.out", stagger: 0.12 }
    );
  }

  function startIntro(gsap: typeof import("gsap").gsap) {
    const overlay = overlayRef.current;
    const bigMarkWrap = bigMarkWrapRef.current;
    const skipBtn = skipBtnRef.current;
    if (!overlay || !bigMarkWrap || !skipBtn) return;

    bigMarkWrap.innerHTML = LOGO_SVG_MARKUP;
    const bigSvg = bigMarkWrap.querySelector("svg")!;

    document.documentElement.classList.add("flizk-intro-active");
    document.body.classList.add("flizk-intro-locked");
    overlay.style.display = "flex";
    skipBtn.style.display = "block";
    gsap.set("#site-header", { y: "-100%" });

    const petals = Array.from(bigSvg.querySelectorAll(".petal .lf"));
    const letters = bigSvg.querySelectorAll(".letter");
    const kstrokes = Array.from(bigSvg.querySelectorAll(".kstroke"));
    const ksprout = bigSvg.querySelector(".ksprout")!;
    const stem = bigSvg.querySelector("#stem") as SVGPathElement;
    const clover = bigSvg.querySelector("#clover");

    petals.forEach((lf) => setLeaf(lf, 0, -12));
    gsap.set(letters, { opacity: 0, y: 14 });
    const ksproutState = { s: 0.2 };
    ksprout.setAttribute("transform", `scale(${ksproutState.s})`);
    gsap.set(ksprout, { opacity: 0 });

    const stemLen = stem.getTotalLength();
    stem.style.strokeDasharray = String(stemLen);
    stem.style.strokeDashoffset = String(stemLen);

    kstrokes.forEach((p) => {
      const len = (p as SVGPathElement).getTotalLength();
      (p as HTMLElement).style.strokeDasharray = String(len);
      (p as HTMLElement).style.strokeDashoffset = String(len);
    });

    // deterministic per-petal organic variance — a "breeze" isn't uniform across the 5 petals.
    const variance = [
      { delay: 0, dur: 0.62, rotEase: "back.out(1.7)", fold: -68, rest: -1.4, breezeDelay: 0.0 },
      { delay: 0.09, dur: 0.7, rotEase: "back.out(1.5)", fold: -82, rest: 1.1, breezeDelay: 0.08 },
      { delay: 0.16, dur: 0.58, rotEase: "back.out(1.8)", fold: -58, rest: -0.6, breezeDelay: 0.2 },
      { delay: 0.23, dur: 0.74, rotEase: "back.out(1.4)", fold: -90, rest: 1.6, breezeDelay: 0.11 },
      { delay: 0.3, dur: 0.64, rotEase: "back.out(1.6)", fold: -75, rest: -0.9, breezeDelay: 0.26 },
    ];

    const tl = gsap.timeline({ paused: true });
    tlRef.current = tl;

    tl.to(stem, { strokeDashoffset: 0, duration: 0.6, ease: "power2.out" }, 0);

    petals.forEach((lf, i) => {
      const v = variance[i];
      const state = { s: 0, r: v.fold };
      const start = 0.32 + v.delay;
      tl.to(
        state,
        { s: 1, duration: v.dur * 0.72, ease: "power2.out", onUpdate: () => setLeaf(lf, state.s, state.r) },
        start
      );
      tl.to(
        state,
        { r: v.rest, duration: v.dur, ease: v.rotEase, onUpdate: () => setLeaf(lf, state.s, state.r) },
        start
      );
      tl.to(
        state,
        { r: 0, duration: 0.55, ease: "sine.inOut", onUpdate: () => setLeaf(lf, state.s, state.r) },
        start + v.dur + v.breezeDelay
      );
    });

    tl.to(clover, { scale: 1.045, duration: 0.22, ease: "sine.out", transformOrigin: "50% 50%" }, 1.35).to(
      clover,
      { scale: 1, duration: 0.3, ease: "sine.inOut", transformOrigin: "50% 50%" },
      1.57
    );

    tl.to(letters, { opacity: 1, y: 0, duration: 0.5, ease: "power3.out", stagger: 0.09 }, 1.55);

    kstrokes.forEach((p, i) => {
      tl.to(p, { strokeDashoffset: 0, duration: 0.32, ease: "power2.inOut" }, 2.05 + i * 0.14);
    });

    tl.to(ksprout, { opacity: 1, duration: 0.4 }, 2.55).to(
      ksproutState,
      {
        s: 0.52,
        duration: 0.4,
        ease: "back.out(2.6)",
        onUpdate: () => ksprout.setAttribute("transform", `scale(${ksproutState.s})`),
      },
      2.55
    );

    tl.call(() => flyToHeader(gsap, bigMarkWrap), [], 3.15);

    tl.play(0);
  }

  function flyToHeader(gsap: typeof import("gsap").gsap, wrap: HTMLDivElement) {
    const slotImg = document.querySelector<HTMLElement>("#header-logo-slot img");
    const slotAnchor = document.getElementById("header-logo-slot");
    const overlay = overlayRef.current;
    const skipBtn = skipBtnRef.current;
    const clone = cloneWrapRef.current;
    if (!slotAnchor || !overlay || !skipBtn || !clone) return;

    const slotRect = slotAnchor.getBoundingClientRect();

    // mount the temporary header clone — settled/static, pixel-matched to the real logo —
    // positioned exactly over the real (currently hidden) header logo. This clone is what plays
    // the wind gust, since the real logo is a flat <img> and can't animate individual petals.
    clone.innerHTML = LOGO_SVG_MARKUP;
    const cloneSvg = clone.querySelector("svg")!;
    cloneSvg.querySelectorAll(".letter").forEach((el) => {
      (el as HTMLElement).style.opacity = "1";
      (el as HTMLElement).style.transform = "none";
    });
    const cloneSprout = cloneSvg.querySelector(".ksprout") as HTMLElement;
    cloneSprout.style.opacity = "1";
    cloneSprout.setAttribute("transform", "scale(0.52)");

    gsap.set(clone, {
      position: "fixed",
      left: slotRect.left,
      top: slotRect.top,
      width: slotRect.width,
      height: slotRect.height,
      display: "block",
      opacity: 0,
      scale: 0.78,
      rotate: -6,
      transformOrigin: "50% 50%",
      zIndex: 60,
    });
    gsap.set(cloneSvg, { width: "100%", height: "auto", display: "block" });

    requestAnimationFrame(() => {
      const from = wrap.getBoundingClientRect();
      const to = clone.getBoundingClientRect();

      const scale = to.width / from.width;
      const dx = to.left + to.width / 2 - (from.left + from.width / 2);
      const dy = to.top + to.height / 2 - (from.top + from.height / 2);

      gsap
        .timeline()
        .to("#site-header", { y: "0%", duration: 0.5, ease: "power3.out" }, 0.15)
        .to(wrap, { x: dx, y: dy, scale, duration: 0.7, ease: "power3.inOut" }, 0)
        .to(wrap, { opacity: 0, duration: 0.18, ease: "power1.in" }, 0.56)
        .to(clone, { opacity: 1, duration: 0.18, ease: "power1.out" }, 0.56)
        .to(clone, { scale: 1, rotate: 0, duration: 0.5, ease: "back.out(2.4)" }, 0.56)
        .to(overlay, { opacity: 0, duration: 0.85, ease: "sine.inOut" }, 0.56)
        .add(() => {
          overlay.style.display = "none";
          document.body.classList.remove("flizk-intro-locked");
          skipBtn.style.display = "none";
          // the clone is pixel-identical to the real logo — swap instantly, no visible pop
          if (slotImg) slotImg.style.opacity = "1";
          document.documentElement.classList.remove("flizk-intro-active");
          markIntroPlayed();
          clone.style.display = "none";
          animateHeroIn(gsap, false);
        })
        .add(() => windGust(gsap), "+=0.5");
    });
  }

  // one-time directional wind gust — plays once right after landing, then every petal is reset
  // to 0 and the transform attribute removed entirely. No loop, no residue, nothing left behind.
  function windGust(gsap: typeof import("gsap").gsap) {
    // this plays on the real header logo's own inline clone only if it's still mounted; since
    // settleInstantly already swapped to the real <img>, the gust targets the clone's own petals
    // while it's still briefly visible before display:none — harmless no-op if already hidden
    const clone = cloneWrapRef.current;
    if (!clone) return;
    const lfs = clone.querySelectorAll(".petal .lf");
    if (!lfs.length) return;
    const state = [0, 1, 2, 3, 4].map(() => ({ r: 0 }));
    const setRot = (i: number, r: number) => lfs[i].setAttribute("transform", `rotate(${r} 0 -4)`);
    const master = gsap.timeline({
      onComplete: () => lfs.forEach((lf) => lf.removeAttribute("transform")),
    });
    const add = (i: number, amp: number, dur: number, at: number) => {
      master
        .to(state[i], { r: amp, duration: dur, ease: "sine.out", onUpdate: () => setRot(i, state[i].r) }, at)
        .to(
          state[i],
          { r: 0, duration: dur * 0.85, ease: "sine.inOut", onUpdate: () => setRot(i, state[i].r) },
          at + dur
        );
    };
    add(3, 4, 0.3, 0.0);
    add(4, 3, 0.3, 0.07);
    add(2, 2.5, 0.3, 0.14);
    add(0, 3.5, 0.3, 0.21);
    add(1, 4.5, 0.3, 0.28);
    add(1, -2.5, 0.25, 0.6);
    add(0, -1.5, 0.25, 0.66);
    add(2, -2, 0.25, 0.72);
    add(2, 3.5, 0.28, 1.0);
    add(1, 2.5, 0.28, 1.06);
    add(3, 3, 0.28, 1.12);
    add(0, 2.5, 0.28, 1.18);
    add(4, 4, 0.28, 1.24);
  }

  function handleSkip() {
    tlRef.current?.kill();
    import("gsap").then(({ gsap }) => {
      gsap.killTweensOf("#site-header");
      if (cloneWrapRef.current) gsap.killTweensOf(cloneWrapRef.current);
      if (bigMarkWrapRef.current) gsap.killTweensOf(bigMarkWrapRef.current);
      const slotImg = document.querySelector<HTMLElement>("#header-logo-slot img");
      if (slotImg) slotImg.style.opacity = "1";
      gsap.set("#site-header", { y: "0%" });
      settleInstantly();
      animateHeroIn(gsap, true);
    });
  }

  if (!isHome) return null;

  return (
    <>
      <div
        ref={overlayRef}
        aria-hidden="true"
        style={{
          display: "none",
          position: "fixed",
          inset: 0,
          zIndex: 100,
          background: "#fff",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div ref={bigMarkWrapRef} style={{ width: 420, maxWidth: "70vw" }} />
      </div>
      <button
        ref={skipBtnRef}
        onClick={handleSkip}
        type="button"
        style={{
          display: "none",
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 110,
          background: "rgba(20,64,47,.06)",
          border: "1px solid rgba(20,64,47,.15)",
          color: "#14402F",
          font: "500 13px Inter, sans-serif",
          padding: "9px 16px",
          borderRadius: 999,
          cursor: "pointer",
        }}
      >
        Skip intro
      </button>
      <div ref={cloneWrapRef} style={{ display: "none" }} aria-hidden="true" />
    </>
  );
}
