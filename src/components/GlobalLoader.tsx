import { useState, useEffect } from 'react';
import { LoadingSpinner } from './animations/LoadingSpinner';
import { AnimatePresence } from 'framer-motion';

export const GlobalLoader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial app loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && <LoadingSpinner />}
    </AnimatePresence>
  );
};