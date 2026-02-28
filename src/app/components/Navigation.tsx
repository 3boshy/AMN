import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import type { Language } from '../i18n';

export function Navigation() {
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.projects, path: '/projects' },
    { label: t.nav.studio, path: '/studio' },
    { label: t.nav.contact, path: '/contact' },
  ];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-[var(--amn-z-navigation)] transition-all duration-300 ${
          scrolled
            ? 'amn-glass-strong py-4'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-2xl font-bold amn-gradient-text">
                AMN
              </span>
              <span className="text-sm text-[#a78bfa] ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Studios
              </span>
            </motion.div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative text-[#e9d5ff] hover:text-white transition-colors"
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4]"
                    style={{
                      boxShadow: '0 0 10px rgba(139, 92, 246, 0.5)',
                    }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3 py-1.5 rounded-lg amn-glass hover:amn-glass-strong transition-all group"
            >
              <Globe className="w-4 h-4 text-[#06b6d4]" strokeWidth={2} />
              <span className="text-sm font-medium text-white">
                {language.toUpperCase()}
              </span>
              <motion.div
                initial={false}
                animate={{ rotate: language === 'ar' ? 180 : 0 }}
                className="w-6 h-0.5 bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] rounded-full"
              />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg amn-glass hover:amn-glass-strong transition-all"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-white" strokeWidth={2} />
              ) : (
                <Menu className="w-6 h-6 text-white" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[calc(var(--amn-z-navigation)-1)] md:hidden"
            />

            {/* Menu Panel */}
            <motion.div
              initial={{ x: language === 'ar' ? -300 : 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: language === 'ar' ? -300 : 300, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className={`fixed ${
                language === 'ar' ? 'left-0' : 'right-0'
              } top-0 bottom-0 w-72 amn-glass-strong z-[var(--amn-z-navigation)] md:hidden overflow-y-auto`}
            >
              <div className="p-6">
                {/* Close Button */}
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="mb-8 p-2 rounded-lg amn-glass hover:amn-glass-strong transition-all ml-auto block"
                >
                  <X className="w-6 h-6 text-white" strokeWidth={2} />
                </button>

                {/* Menu Items */}
                <div className="space-y-4">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.path}
                      initial={{ x: language === 'ar' ? -50 : 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block px-4 py-3 rounded-lg transition-all ${
                          location.pathname === item.path
                            ? 'amn-glass-strong text-white'
                            : 'text-[#e9d5ff] hover:amn-glass'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
