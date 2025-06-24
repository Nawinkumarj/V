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
    const scrollWrapper = document.querySelector(".scroll-wrapper");

    if (scrollWrapper) {
      // ✅ Defer ScrollTrigger setup until browser is idle
      ScrollTrigger.scrollerProxy(scrollWrapper, {
        scrollTop(value) {
          return arguments.length
            ? (scrollWrapper.scrollTop = value)
            : scrollWrapper.scrollTop;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: "fixed",
      });

      ScrollTrigger.normalizeScroll({
        target: scrollWrapper,
        allowNestedScroll: true,
        type: "touch,wheel,pointer",
      });

      ScrollTrigger.defaults({ scroller: scrollWrapper });

      ScrollTrigger.addEventListener("refresh", () => {
        scrollWrapper.style.overflow = "hidden";
        requestAnimationFrame(() => {
          scrollWrapper.style.overflow = "auto";
        });
      });

      scrollWrapper.addEventListener("scroll", ScrollTrigger.update);
      scrollWrapper.addEventListener("touchmove", ScrollTrigger.update);

      const rafFix = () => requestAnimationFrame(rafFix);
      rafFix();

      // ✅ Final call should also be deferred
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
    }
  });
}

export { gsap, ScrollTrigger};
