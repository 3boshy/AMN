import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Shield, Zap, Lock } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../../contexts/LanguageContext';

export function HeroSection() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-24 pb-20 px-6 overflow-hidden"
    >
      {/* Parallax Background Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 left-10 w-96 h-96 bg-[#8b5cf6] rounded-full opacity-20 blur-[120px]"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#06b6d4] rounded-full opacity-20 blur-[120px]"
      />

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="container mx-auto max-w-6xl relative z-10"
      >
        <div className="text-center mb-16">
          {/* Pixel Welcome */}
          <PixelTyping text={t.hero.pixelWelcome} />

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-6xl md:text-8xl font-bold mb-6"
          >
            <span className="amn-gradient-text">{t.hero.title}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-[#e9d5ff] mb-4"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-lg text-[#c4b5fd] max-w-2xl mx-auto mb-12"
          >
            {t.hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link to="/projects">
              <MagneticButton>
                <span>{t.hero.cta}</span>
                <ArrowRight className="w-5 h-5" strokeWidth={2} />
              </MagneticButton>
            </Link>
            <Link to="/contact">
              <MagneticButton variant="secondary">
                <span>{t.hero.ctaSecondary}</span>
              </MagneticButton>
            </Link>
          </motion.div>
        </div>

        {/* Glass Card with Pixel Boxes */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="amn-glass rounded-2xl p-8 max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PixelBox
              icon={<Shield className="w-8 h-8" strokeWidth={2} />}
              title="Secure"
              description="Zero-trust architecture"
              delay={2.2}
            />
            <PixelBox
              icon={<Zap className="w-8 h-8" strokeWidth={2} />}
              title="Modern"
              description="Cutting-edge tech"
              delay={2.4}
            />
            <PixelBox
              icon={<Lock className="w-8 h-8" strokeWidth={2} />}
              title="Private"
              description="End-to-end encryption"
              delay={2.6}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

// Pixel Typing Component
function PixelTyping({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayText(text.substring(0, index + 1));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 150);

    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, [text]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="inline-block mb-8"
    >
      <span className="amn-pixel text-[#06b6d4] text-sm md:text-base">
        {displayText}
        <span className={showCursor ? 'opacity-100' : 'opacity-0'}>_</span>
      </span>
    </motion.div>
  );
}

// Pixel Box Component
function PixelBox({
  icon,
  title,
  description,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="amn-glass rounded-xl p-6 text-center group cursor-pointer relative overflow-hidden"
    >
      {/* Animated Border */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <div
          className="absolute inset-0 rounded-xl"
          style={{
            background: 'var(--amn-gradient-border)',
            animation: 'amn-border-spin 3s linear infinite',
            padding: '2px',
          }}
        >
          <div className="absolute inset-[2px] bg-[#0a0a1a] rounded-xl" />
        </div>
      </div>

      <div className="relative z-10">
        <div className="text-[#8b5cf6] mb-4 inline-block group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-white mb-2 amn-pixel text-sm">
          {title}
        </h3>
        <p className="text-[#c4b5fd] text-sm">{description}</p>
      </div>
    </motion.div>
  );
}

// Magnetic Button Component
function MagneticButton({
  children,
  variant = 'primary',
}: {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`
        inline-flex items-center gap-3 px-8 py-4 rounded-xl font-semibold cursor-pointer
        transition-all duration-300
        ${
          variant === 'primary'
            ? 'bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]'
            : 'amn-glass text-white hover:amn-glass-strong'
        }
      `}
    >
      {children}
    </motion.div>
  );
}
