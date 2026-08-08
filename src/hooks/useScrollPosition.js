import { useEffect, useState } from 'react';

// Tracks whether the page has been scrolled past `threshold` px, used by the
// sticky navbar shadow and the back-to-top button's visibility.
export default function useScrollPosition(threshold = 300) {
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsPast(window.scrollY > threshold);
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return isPast;
}
