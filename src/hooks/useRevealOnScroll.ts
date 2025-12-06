import { useEffect, useRef, useState } from "react";

export function useFlipOnIntersect(
  options?: {
    delay?: number;          // ms antes de revelar
    initialFlipped?: boolean; // true = empieza boca abajo
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
            setFlipped(false); // revela el frente y se queda así
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
