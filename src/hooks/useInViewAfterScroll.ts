// hooks/useInViewOnce.ts
"use client";

import { useEffect, useRef, useState } from "react";

export function useInViewOnce(threshold = 0.6) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  // détecte un VRAI scroll utilisateur
  useEffect(() => {
    const onScroll = () => {
      setHasScrolled(true);
      window.removeEventListener("scroll", onScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!hasScrolled || !ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [hasScrolled, threshold]);

  return { ref, isInView };
}
