import { motion } from 'motion/react';
import { Link } from 'react-router';
import { Github, Instagram, Mail } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold amn-gradient-text mb-4">
              AMN Studios
            </h3>
            <p className="text-[#c4b5fd] mb-6">{t.footer.tagline}</p>
            <div className="flex gap-4">
              <SocialLink href="#" icon={<Github className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Instagram className="w-5 h-5" />} />
              <SocialLink href="#" icon={<Mail className="w-5 h-5" />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Quick Links</h4>
            <nav className="space-y-2">
              <FooterLink to="/">{t.nav.home}</FooterLink>
              <FooterLink to="/projects">{t.nav.projects}</FooterLink>
              <FooterLink to="/studio">{t.nav.studio}</FooterLink>
              <FooterLink to="/contact">{t.nav.contact}</FooterLink>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-4">Contact</h4>
            <div className="space-y-2 text-[#c4b5fd]">
              <p>Email: contact@amnstudios.dev</p>
              <p>Location: Remote / Global</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#a78bfa] text-sm">
            © {currentYear} AMN Studios. {t.footer.rights}
          </p>
          <div className="flex gap-6 text-sm text-[#c4b5fd]">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.1, y: -3 }}
      whileTap={{ scale: 0.9 }}
      className="w-10 h-10 rounded-lg amn-glass flex items-center justify-center text-[#8b5cf6] hover:text-[#a78bfa] hover:amn-glass-strong transition-all"
    >
      {icon}
    </motion.a>
  );
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="block text-[#c4b5fd] hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}
