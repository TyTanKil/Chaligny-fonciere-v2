"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function ScrollIndicator() {
  const containerRef = useRef<HTMLElement | null>(null);
  const sectionsRef = useRef<HTMLElement[]>([]);
  const dotsRef = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    containerRef.current = document.querySelector(
      ".scroll-container"
    ) as HTMLElement;

    sectionsRef.current = Array.from(
      document.querySelectorAll("[data-section]")
    );

    const onScroll = () => {
      const container = containerRef.current!;
      const scrollTop = container.scrollTop;
      const height = container.clientHeight;

      const index = Math.round(scrollTop / height);

      setActiveIndex(index);

      dotsRef.current.forEach((dot, i) => {
        gsap.to(dot, {
          scale: i === index ? 1.4 : 1,
          backgroundColor: i === index ? "#363D40" : "#D5DBE1",
          duration: 0.3,
          ease: "power2.out",
        });
      });
    };

    containerRef.current.addEventListener("scroll", onScroll);
    onScroll();

    return () => {
      containerRef.current?.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToSection = (index: number) => {
    sectionsRef.current[index]?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
      {Array.from({ length: sectionsRef.current.length }).map(
        (_, i) => (
          <div
            key={i}
            ref={(el) => {
              if (el) dotsRef.current[i] = el;
            }}
            onClick={() => scrollToSection(i)}
            className="w-3 h-3 rounded-sm bg-gray-300 cursor-pointer"
          />
        )
      )}
    </div>
  );
}
