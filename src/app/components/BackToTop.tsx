import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Rocket } from 'lucide-react';

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 180 }}
          whileHover={{ scale: 1.1, y: -5 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 rounded-full amn-glass hover:amn-glass-strong transition-all group z-50"
          style={{
            boxShadow: 'var(--amn-glow-violet-md)',
          }}
        >
          <Rocket
            className="w-6 h-6 text-[#8b5cf6] group-hover:text-[#a78bfa] transition-colors"
            strokeWidth={2}
          />
          
          {/* Trail Effect */}
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-[#8b5cf6] to-transparent"
            animate={{
              height: [0, 20, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
