import { useEffect, useRef, useState } from 'react';

// Animates a number counting up from 0 to `target` once the element scrolls
// into view, mirroring the old counterup.js + waypoints.js behavior.
export default function useCountUp(target, { duration = 2000 } = {}) {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const hasStarted = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const start = () => {
      if (hasStarted.current) return;
      hasStarted.current = true;

      const startTime = performance.now();
      const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        setValue(Math.round(progress * target));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    };

    if (typeof IntersectionObserver === 'undefined') {
      start();
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) start();
        });
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [target, duration]);

  return [value, ref];
}
