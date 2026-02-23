import { motion } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import { PROFILE } from '../constants/data';

export const Navbar = () => {
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="glass flex items-center justify-between px-6 py-3 rounded-full border border-white/10" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 1.5rem',
          borderRadius: '9999px',
          maxWidth: '100%',
          margin: '0 auto'
        }}>
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold tracking-tighter"
          >
            T<span className="text-gradient">M</span>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8" style={{ display: 'flex', gap: '2rem' }}>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                style={{ fontSize: '0.875rem', fontWeight: 500 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Socials / Button */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ display: 'flex', gap: '1rem' }}
          >
            <a href={PROFILE.contacts.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} />
            </a>
            <a href={`mailto:${PROFILE.contacts.email}`}>
              <Mail size={18} />
            </a>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};
