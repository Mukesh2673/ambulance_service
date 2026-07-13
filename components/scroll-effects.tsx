"use client";
import { useEffect } from "react";

/**
 * Drives scroll-based UI:
 *  - reveals `.reveal` elements as they enter the viewport (IntersectionObserver)
 *  - fills the top progress bar (--scroll on :root)
 *  - toggles a shadow on the sticky header once the page is scrolled
 */
export function ScrollEffects() {
  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll<HTMLElement>(".reveal"));

    if (!("IntersectionObserver" in window)) {
      reveals.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    reveals.forEach((el) => io.observe(el));

    const root = document.documentElement;
    const header = document.querySelector(".site-header");
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const max = root.scrollHeight - root.clientHeight;
        root.style.setProperty("--scroll", max > 0 ? String(window.scrollY / max) : "0");
        header?.classList.toggle("is-scrolled", window.scrollY > 8);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return <div className="scroll-progress" aria-hidden="true" />;
}
