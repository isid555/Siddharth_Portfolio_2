
import { useState, useEffect, useRef, RefObject } from 'react';

export function useInView(
  threshold: number = 0.1
): [RefObject<HTMLElement>, boolean] {
  const ref = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update state when observer callback fires
        setIsInView(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px', // Slightly before elements come into view
      }
    );

    const currentRef = ref.current;
    
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]); // Re-run effect if threshold changes

  return [ref, isInView];
}
