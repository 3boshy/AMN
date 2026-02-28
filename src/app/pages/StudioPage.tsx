import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Footer } from '../components/Footer';

export function StudioPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 amn-gradient-text">
            {t.studio.title}
          </h1>
          <p className="text-xl md:text-2xl text-[#a78bfa]">
            {t.studio.subtitle}
          </p>
        </motion.div>

        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="amn-glass rounded-3xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t.studio.story.title}
          </h2>
          <p className="text-lg md:text-xl text-[#e9d5ff] leading-relaxed">
            {t.studio.story.content}
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="amn-glass rounded-3xl p-8 md:p-12 mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            {t.studio.mission.title}
          </h2>
          <p className="text-lg md:text-xl text-[#e9d5ff] leading-relaxed">
            {t.studio.mission.content}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <StatsSection />
      </div>

      <Footer />
    </div>
  );
}

function StatsSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      className="grid md:grid-cols-4 gap-6"
    >
      {t.studio.stats.map((stat, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
          whileHover={{ scale: 1.05, y: -5 }}
          className="amn-glass rounded-2xl p-8 text-center group cursor-pointer relative overflow-hidden"
        >
          {/* Animated Glow */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${
                index % 4 === 0
                  ? '#8b5cf6'
                  : index % 4 === 1
                  ? '#06b6d4'
                  : index % 4 === 2
                  ? '#ec4899'
                  : '#10b981'
              }20, transparent 70%)`,
            }}
          />

          <div className="relative z-10">
            <motion.h3
              className="text-4xl md:text-5xl font-bold mb-3 amn-gradient-text"
              initial={{ scale: 1 }}
              animate={isInView ? { scale: [1, 1.1, 1] } : {}}
              transition={{
                delay: 0.8 + index * 0.1 + 0.3,
                duration: 0.5,
              }}
            >
              {stat.value}
            </motion.h3>
            <p className="text-[#c4b5fd] text-sm md:text-base font-semibold">
              {stat.label}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
