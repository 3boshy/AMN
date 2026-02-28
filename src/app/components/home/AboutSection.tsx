import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Shield, Code, GraduationCap } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="py-32 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 amn-gradient-text">
            {t.about.title}
          </h2>
          <p className="text-2xl text-[#a78bfa]">{t.about.subtitle}</p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="amn-glass rounded-2xl p-8 md:p-12 mb-16"
        >
          <p className="text-lg md:text-xl text-[#e9d5ff] leading-relaxed mb-6">
            {t.about.description}
          </p>
          <p className="text-lg text-[#c4b5fd] leading-relaxed">
            {t.about.mission}
          </p>
        </motion.div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.about.values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 + index * 0.2, duration: 0.8 }}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="amn-glass rounded-xl p-8 group cursor-pointer relative overflow-hidden"
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 mb-6 text-[#8b5cf6]">
                  {index === 0 && <Shield className="w-full h-full" strokeWidth={1.5} />}
                  {index === 1 && <Code className="w-full h-full" strokeWidth={1.5} />}
                  {index === 2 && <GraduationCap className="w-full h-full" strokeWidth={1.5} />}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {value.title}
                </h3>
                <p className="text-[#c4b5fd] leading-relaxed">
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
