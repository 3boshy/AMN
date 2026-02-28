import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router';
import { Send } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function CTASection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-32 px-6 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8b5cf6] rounded-full opacity-20 blur-[150px] animate-pulse" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="amn-glass-strong rounded-3xl p-12 md:p-16 text-center"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 amn-gradient-text"
          >
            {t.cta.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-[#e9d5ff] mb-10 max-w-2xl mx-auto"
          >
            {t.cta.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-white font-bold text-lg transition-all duration-300 hover:shadow-[0_0_40px_rgba(139,92,246,0.6)]"
              >
                <Send className="w-6 h-6" strokeWidth={2} />
                <span>{t.cta.button}</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Decorative Elements */}
          <div className="mt-12 flex justify-center gap-4">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.5 }}
                className="w-2 h-2 rounded-full bg-[#8b5cf6]"
                style={{
                  boxShadow: 'var(--amn-glow-violet-sm)',
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
