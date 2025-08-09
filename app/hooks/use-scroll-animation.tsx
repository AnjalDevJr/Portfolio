"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollAnimation() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const reference = ref.current;

    if (reference) {
      observer.observe(reference);
    }

    return () => {
      if (reference) {
        observer.unobserve(reference);
      }
    };
  }, []);

  return { ref, isVisible };
}
