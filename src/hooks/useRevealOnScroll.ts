import { useEffect, useRef, useState } from "react";

export function useRevealOnScroll(
  options?: {
    delay?: number;
    initialFlipped?: boolean;
  }
) {
  const { delay = 600, initialFlipped = true } = options || {};

  const cardRef = useRef<HTMLDivElement | null>(null);
  const [flipped, setFlipped] = useState(initialFlipped);
  const autoFlippedRef = useRef(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    let timeoutId: number | undefined;

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !autoFlippedRef.current) {
          autoFlippedRef.current = true;

          timeoutId = window.setTimeout(() => {
            setFlipped(false);
          }, delay);
        }
      });
    });

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [delay]);

  const toggleFlipped = () => setFlipped(prev => !prev);

  return {
    cardRef,
    flipped,
    toggleFlipped,
  };
}
