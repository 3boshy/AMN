import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'motion/react';
import { Search, Filter, X, ExternalLink, Github } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { projects, searchProjects, sortProjects, type Project } from '../data/projects';
import { Footer } from '../components/Footer';

export function ProjectsPage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'newest' | 'popular' | 'security' | 'ui'>('newest');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Filter and search logic
  let filteredProjects = projects;
  if (selectedCategory !== 'all') {
    filteredProjects = filteredProjects.filter(
      (p) => p.category === selectedCategory || p.tags.some((tag) => tag.toLowerCase() === selectedCategory)
    );
  }
  if (searchQuery) {
    filteredProjects = searchProjects(searchQuery);
  }
  filteredProjects = sortProjects(filteredProjects, sortBy);

  const categories = [
    { id: 'all', label: t.projects.filters.all },
    { id: 'security', label: t.projects.filters.security },
    { id: 'education', label: t.projects.filters.education },
    { id: 'dashboard', label: 'Dashboard' },
  ];

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 amn-gradient-text">
            {t.projects.title}
          </h1>
          <p className="text-xl md:text-2xl text-[#a78bfa]">
            {t.projects.subtitle}
          </p>
        </motion.div>

        {/* Filters & Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-12"
        >
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-6 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-white shadow-[0_0_20px_rgba(139,92,246,0.4)]'
                    : 'amn-glass text-[#c4b5fd] hover:amn-glass-strong'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Search & Sort */}
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#8b5cf6]"
                strokeWidth={2}
              />
              <input
                type="text"
                placeholder={t.projects.search}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-xl amn-glass text-white placeholder:text-[#a78bfa] focus:amn-glass-strong outline-none transition-all"
              />
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-6 py-4 rounded-xl amn-glass text-white outline-none cursor-pointer hover:amn-glass-strong transition-all"
            >
              <option value="newest">{t.projects.sort.newest}</option>
              <option value="popular">{t.projects.sort.popular}</option>
              <option value="security">{t.projects.sort.security}</option>
              <option value="ui">{t.projects.sort.ui}</option>
            </select>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <p className="text-2xl text-[#a78bfa]">No projects found.</p>
          </div>
        )}
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <Footer />
    </div>
  );
}

// Project Card with 3D Tilt
function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const { t } = useLanguage();

  const gradients = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%)',
    'linear-gradient(135deg, #ec4899 0%, #f093fb 100%)',
    'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
    'linear-gradient(135deg, #f59e0b 0%, #ec4899 100%)',
    'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 100%)',
  ];

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -8;
    const rotateY = ((x - centerX) / centerX) * 8;

    ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
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
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transition: 'transform 0.2s ease-out, box-shadow 0.3s ease-out',
      }}
      className="cursor-pointer hover:shadow-[0_0_40px_rgba(139,92,246,0.3)] amn-border-spin"
    >
      <div className="amn-glass rounded-2xl overflow-hidden h-full flex flex-col">
        {/* Mock Screenshot */}
        <div
          className="h-56 relative overflow-hidden"
          style={{ background: gradients[index % gradients.length] }}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <ExternalLink className="w-16 h-16 text-white/20" />
          </div>
          {project.featured && (
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#10b981] text-white text-xs font-bold">
              FEATURED
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-[#c4b5fd] mb-4 flex-1">{project.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-md bg-[#8b5cf6]/20 text-[#a78bfa] text-xs font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Project Modal
function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[var(--amn-z-modal)]"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed inset-4 md:inset-20 z-[calc(var(--amn-z-modal)+1)] overflow-auto"
          >
            <div className="amn-glass-strong rounded-3xl p-8 md:p-12 max-w-4xl mx-auto">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-3 rounded-xl amn-glass hover:amn-glass-strong transition-all"
              >
                <X className="w-6 h-6 text-white" strokeWidth={2} />
              </button>

              {/* Content */}
              <h2 className="text-4xl font-bold text-white mb-4">{project.title}</h2>
              <p className="text-xl text-[#c4b5fd] mb-8">{project.longDescription}</p>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t.projects.modal.techStack}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-lg amn-glass text-[#a78bfa]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {t.projects.modal.features}
                </h3>
                <ul className="space-y-2">
                  {project.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6] mt-2" />
                      <span className="text-[#e9d5ff]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.links.live && (
                  <a
                    href={project.links.live}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-white font-semibold"
                  >
                    <ExternalLink className="w-5 h-5" />
                    {t.projects.modal.visitLive}
                  </a>
                )}
                {project.links.github && (
                  <a
                    href={project.links.github}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl amn-glass hover:amn-glass-strong text-white font-semibold"
                  >
                    <Github className="w-5 h-5" />
                    {t.projects.modal.viewCode}
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
