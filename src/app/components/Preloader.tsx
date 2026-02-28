import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 flex items-center justify-center bg-[#070712]"
          style={{ zIndex: 'var(--amn-z-preloader)' }}
        >
          <div className="text-center">
            {/* Logo/Title */}
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="mb-8"
            >
              <h1 className="text-5xl font-bold amn-gradient-text mb-2">
                AMN Studios
              </h1>
              <p className="text-[#8b5cf6] text-sm tracking-widest">
                SECURE-BY-DESIGN
              </p>
            </motion.div>

            {/* Progress Bar */}
            <div className="w-64 h-1 bg-[#16162e] rounded-full overflow-hidden mx-auto">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
                className="h-full bg-gradient-to-r from-[#8b5cf6] via-[#06b6d4] to-[#ec4899]"
                style={{
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
                }}
              />
            </div>

            {/* Progress Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-4 text-[#a78bfa] text-sm font-mono"
            >
              {Math.floor(progress)}%
            </motion.p>

            {/* Pixel Loading Dots */}
            <div className="flex gap-2 justify-center mt-6">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0.3 }}
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-2 h-2 bg-[#8b5cf6] rounded-sm"
                  style={{
                    boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)',
                  }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
