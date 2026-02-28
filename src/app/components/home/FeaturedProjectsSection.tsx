import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Link } from 'react-router';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getFeaturedProjects } from '../../data/projects';

export function FeaturedProjectsSection() {
  const { t } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const featuredProjects = getFeaturedProjects().slice(0, 3);

  const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
    'linear-gradient(135deg, #ec4899 0%, #f093fb 100%)',
  ];

  return (
    <section ref={ref} className="py-32 px-6 relative">
      <div className="container mx-auto max-w-7xl">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 amn-gradient-text">
            {t.projects.title}
          </h2>
          <p className="text-2xl text-[#a78bfa] mb-8">{t.projects.subtitle}</p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <TiltCard key={project.id} delay={index * 0.2}>
              <div className="amn-glass rounded-2xl overflow-hidden h-full flex flex-col">
                {/* Mock Screenshot */}
                <div
                  className="h-48 relative overflow-hidden"
                  style={{ background: gradients[index % gradients.length] }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ExternalLink className="w-12 h-12 text-white/30" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 rounded-full amn-glass-strong text-xs text-white">
                      {project.type.toUpperCase()}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#c4b5fd] text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md bg-[#8b5cf6]/20 text-[#a78bfa] text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 text-[#06b6d4] hover:text-[#22d3ee] transition-colors group"
                  >
                    <span className="text-sm font-semibold">
                      {t.projects.viewProject}
                    </span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-center"
        >
          <Link
            to="/projects"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl amn-glass hover:amn-glass-strong transition-all group"
          >
            <span className="font-semibold">{t.projects.viewAll}</span>
            <ArrowRight
              className="w-5 h-5 group-hover:translate-x-2 transition-transform"
              strokeWidth={2}
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// 3D Tilt Card Component
function TiltCard({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform =
      'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.8 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transition: 'transform 0.3s ease-out, box-shadow 0.3s ease-out',
      }}
      className="cursor-pointer hover:shadow-[0_0_40px_rgba(139,92,246,0.3)]"
    >
      {children}
    </motion.div>
  );
}
