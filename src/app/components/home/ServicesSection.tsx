import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Globe, Shield, GraduationCap, Palette, Check } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function ServicesSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const icons = [Globe, Shield, GraduationCap, Palette];

  return (
    <section ref={ref} className="py-32 px-6 relative bg-[#0a0a1a]/50">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 amn-gradient-text">
            {t.services.title}
          </h2>
          <p className="text-2xl text-[#a78bfa]">{t.services.subtitle}</p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {t.services.items.map((service, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                className="amn-glass rounded-2xl p-8 group cursor-pointer relative overflow-hidden"
              >
                {/* Animated Gradient Background */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(135deg, ${
                      index % 4 === 0
                        ? '#8b5cf6'
                        : index % 4 === 1
                        ? '#06b6d4'
                        : index % 4 === 2
                        ? '#ec4899'
                        : '#10b981'
                    } 0%, transparent 100%)`,
                    opacity: 0.1,
                  }}
                />

                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-6">
                    <div
                      className="p-3 rounded-xl amn-glass-strong"
                      style={{
                        boxShadow:
                          index % 4 === 0
                            ? 'var(--amn-glow-violet-sm)'
                            : index % 4 === 1
                            ? 'var(--amn-glow-cyan-sm)'
                            : 'var(--amn-glow-pink-sm)',
                      }}
                    >
                      <Icon
                        className={`w-8 h-8 ${
                          index % 4 === 0
                            ? 'text-[#8b5cf6]'
                            : index % 4 === 1
                            ? 'text-[#06b6d4]'
                            : index % 4 === 2
                            ? 'text-[#ec4899]'
                            : 'text-[#10b981]'
                        }`}
                        strokeWidth={2}
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-[#c4b5fd] text-lg mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{
                          delay: index * 0.15 + featureIndex * 0.1,
                          duration: 0.5,
                        }}
                        className="flex items-center gap-3"
                      >
                        <Check
                          className="w-5 h-5 text-[#10b981] flex-shrink-0"
                          strokeWidth={2.5}
                        />
                        <span className="text-[#e9d5ff]">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
