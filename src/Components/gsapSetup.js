import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// ✅ Safe idle fallback
const runIdle = (cb) =>
  "requestIdleCallback" in window
    ? requestIdleCallback(cb)
    : setTimeout(cb, 200); // fallback for unsupported browsers

if (typeof window !== "undefined") {
  runIdle(() => {
    // ✅ NO custom scroller setup since you're using native scrolling
    // So we skip scrollerProxy, normalizeScroll, defaults, etc.

    // Just refresh ScrollTrigger on load
    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
  });
}

export { gsap, ScrollTrigger };
