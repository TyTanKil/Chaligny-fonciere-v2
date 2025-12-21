// context/ScrollContext.tsx
"use client";

import {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";

type ScrollContextType = {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  hasUserScrolled: boolean;
};

const ScrollContext = createContext<ScrollContextType | null>(null);

export function ScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [hasUserScrolled, setHasUserScrolled] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      setHasUserScrolled(true);
      el.removeEventListener("scroll", onScroll);
    };

    el.addEventListener("scroll", onScroll, { passive: true });

    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <ScrollContext.Provider value={{ scrollRef, hasUserScrolled }}>
      {children}
    </ScrollContext.Provider>
  );
}

export function useScrollContext() {
  const ctx = useContext(ScrollContext);
  if (!ctx) {
    throw new Error("useScrollContext must be used inside ScrollProvider");
  }
  return ctx;
}
