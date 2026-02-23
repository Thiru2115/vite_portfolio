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
        <div className="glass" style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 2rem',
          borderRadius: '9999px',
          maxWidth: '100%',
          margin: '0 auto',
          border: '1px solid var(--glass-border)',
          boxShadow: '0 10px 40px rgba(0,0,0,0.3)'
        }}>
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="interactive"
            style={{ 
              fontSize: '1.5rem', 
              fontWeight: 900, 
              letterSpacing: '-0.05em',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            T<span className="text-gradient">M</span>
          </motion.div>

          {/* Desktop Links */}
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="interactive"
                style={{ 
                  fontSize: '0.85rem', 
                  fontWeight: 700, 
                  color: 'var(--text-secondary)',
                  letterSpacing: '0.02em',
                  textTransform: 'uppercase'
                }}
                whileHover={{ color: 'var(--text-primary)' }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>

          {/* Socials */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ display: 'flex', gap: '1.25rem' }}
          >
            <a href={PROFILE.contacts.linkedin} target="_blank" rel="noreferrer" className="interactive" style={{ color: 'var(--text-secondary)' }}>
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${PROFILE.contacts.email}`} className="interactive" style={{ color: 'var(--text-secondary)' }}>
              <Mail size={20} />
            </a>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};
