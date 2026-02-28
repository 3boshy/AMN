import { useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Mail, Github, Instagram, Send, Check, AlertCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Footer } from '../components/Footer';

export function ContactPage() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate sending
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setStatus('success');

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setStatus('idle');
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 amn-gradient-text">
            {t.contact.title}
          </h1>
          <p className="text-xl md:text-2xl text-[#a78bfa]">
            {t.contact.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <form onSubmit={handleSubmit} className="amn-glass rounded-2xl p-8">
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl amn-glass text-white placeholder:text-[#a78bfa] focus:amn-glass-strong outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl amn-glass text-white placeholder:text-[#a78bfa] focus:amn-glass-strong outline-none transition-all"
                    placeholder="john@example.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    {t.contact.form.subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl amn-glass text-white placeholder:text-[#a78bfa] focus:amn-glass-strong outline-none transition-all"
                    placeholder="Project Inquiry"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-white font-semibold mb-2">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl amn-glass text-white placeholder:text-[#a78bfa] focus:amn-glass-strong outline-none transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  whileHover={{ scale: status === 'idle' ? 1.02 : 1 }}
                  whileTap={{ scale: status === 'idle' ? 0.98 : 1 }}
                  className={`w-full py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-3 ${
                    status === 'success'
                      ? 'bg-[#10b981] text-white'
                      : status === 'error'
                      ? 'bg-[#ef4444] text-white'
                      : 'bg-gradient-to-r from-[#8b5cf6] to-[#06b6d4] text-white hover:shadow-[0_0_30px_rgba(139,92,246,0.5)]'
                  }`}
                >
                  {status === 'sending' && (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      {t.contact.form.sending}
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      <Check className="w-5 h-5" />
                      {t.contact.form.success}
                    </>
                  )}
                  {status === 'error' && (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      {t.contact.form.error}
                    </>
                  )}
                  {status === 'idle' && (
                    <>
                      <Send className="w-5 h-5" />
                      {t.contact.form.send}
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </motion.div>

          {/* Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-8"
          >
            {/* Social Cards */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                {t.contact.social.title}
              </h3>
              <div className="space-y-4">
                <SocialCard
                  icon={<Mail className="w-6 h-6" strokeWidth={2} />}
                  title={t.contact.social.email}
                  value="contact@amnstudios.dev"
                  href="mailto:contact@amnstudios.dev"
                  color="#8b5cf6"
                />
                <SocialCard
                  icon={<Github className="w-6 h-6" strokeWidth={2} />}
                  title={t.contact.social.github}
                  value="@amnstudios"
                  href="#"
                  color="#06b6d4"
                />
                <SocialCard
                  icon={<Instagram className="w-6 h-6" strokeWidth={2} />}
                  title={t.contact.social.instagram}
                  value="@amnstudios"
                  href="#"
                  color="#ec4899"
                />
              </div>
            </div>

            {/* Additional Info */}
            <div className="amn-glass rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                {t.contact.info.title}
              </h3>
              <div className="space-y-4 text-[#c4b5fd]">
                <p>
                  <span className="text-white font-semibold">Location:</span>{' '}
                  {t.contact.info.location}
                </p>
                <p>
                  <span className="text-white font-semibold">Availability:</span>{' '}
                  {t.contact.info.availability}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function SocialCard({
  icon,
  title,
  value,
  href,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
  color: string;
}) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.03, x: 10 }}
      className="block amn-glass rounded-xl p-6 group cursor-pointer transition-all hover:amn-glass-strong"
    >
      <div className="flex items-center gap-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center amn-glass-strong"
          style={{ color }}
        >
          {icon}
        </div>
        <div>
          <h4 className="text-white font-semibold mb-1">{title}</h4>
          <p className="text-[#a78bfa] group-hover:text-[#c4b5fd] transition-colors">
            {value}
          </p>
        </div>
      </div>
    </motion.a>
  );
}
