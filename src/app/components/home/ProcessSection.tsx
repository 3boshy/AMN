import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Search, Code, TestTube, Rocket } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function ProcessSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const icons = [Search, Code, TestTube, Rocket];
  const colors = ['#8b5cf6', '#06b6d4', '#ec4899', '#10b981'];

  return (
    <section ref={ref} className="py-32 px-6 relative bg-[#0a0a1a]/50">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 amn-gradient-text">
            {t.process.title}
          </h2>
          <p className="text-2xl text-[#a78bfa]">{t.process.subtitle}</p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#8b5cf6] via-[#06b6d4] to-[#10b981] opacity-30" />

          {t.process.steps.map((step, index) => {
            const Icon = icons[index];
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.3, duration: 0.8 }}
                className={`relative mb-16 md:mb-24 ${
                  isEven ? 'md:pr-[50%]' : 'md:pl-[50%] md:text-right'
                }`}
              >
                {/* Step Number Circle */}
                <div
                  className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center justify-center w-16 h-16 rounded-full amn-glass-strong border-4"
                  style={{
                    borderColor: colors[index],
                    boxShadow: `0 0 30px ${colors[index]}80`,
                  }}
                >
                  <Icon className="w-7 h-7" style={{ color: colors[index] }} strokeWidth={2} />
                </div>

                {/* Content Card */}
                <div
                  className={`amn-glass rounded-2xl p-8 ${
                    isEven ? 'md:mr-12' : 'md:ml-12'
                  }`}
                >
                  <div className="flex md:hidden items-center gap-4 mb-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center amn-glass-strong"
                      style={{
                        backgroundColor: `${colors[index]}20`,
                      }}
                    >
                      <Icon className="w-6 h-6" style={{ color: colors[index] }} strokeWidth={2} />
                    </div>
                    <h3 className="text-2xl font-bold text-white">
                      {step.title}
                    </h3>
                  </div>

                  <h3 className="hidden md:block text-2xl font-bold text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[#c4b5fd] text-lg leading-relaxed">
                    {step.description}
                  </p>

                  {/* Animated Progress Bar */}
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: '100%' } : {}}
                    transition={{ delay: index * 0.3 + 0.5, duration: 1 }}
                    className="mt-6 h-1 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${colors[index]}, transparent)`,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
