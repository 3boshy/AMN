import { Outlet, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { LanguageProvider } from '../contexts/LanguageContext';
import { Navigation } from './Navigation';
import { Starfield } from './Starfield';
import { CursorGlow } from './CursorGlow';
import { BackToTop } from './BackToTop';
import { Preloader } from './Preloader';

export function Root() {
  const location = useLocation();

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#070712] text-white overflow-x-hidden">
        {/* Preloader */}
        <Preloader />

        {/* Starfield Background */}
        <Starfield />

        {/* Cursor Glow Effect */}
        <CursorGlow />

        {/* Navigation */}
        <Navigation />

        {/* Page Content with Transition */}
        <AnimatePresence mode="wait">
          <motion.main
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="relative"
            style={{ zIndex: 'var(--amn-z-content)' }}
          >
            <Outlet />
          </motion.main>
        </AnimatePresence>

        {/* Back to Top Button */}
        <BackToTop />
      </div>
    </LanguageProvider>
  );
}
