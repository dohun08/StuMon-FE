import { useRef, useEffect, useCallback } from 'react';

export default function useDebouncedCallback(callback: () => void, delay: number) {
  const timer = useRef<ReturnType<typeof setTimeout>>(null);

  const debounced = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      callback();
    }, delay);
  }, [callback, delay]);

  useEffect(() => {
    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, []);

  return debounced;
}