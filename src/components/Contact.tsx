import { motion } from 'framer-motion';
import { PROFILE } from '../constants/data';
import { Mail, Phone, Linkedin, ArrowUpRight } from 'lucide-react';

export const Contact = () => {
  const contactMethods = [
    { 
      name: 'Email', 
      value: PROFILE.contacts.email, 
      icon: <Mail />, 
      href: `mailto:${PROFILE.contacts.email}`,
      color: '#ef4444' 
    },
    { 
      name: 'Phone', 
      value: PROFILE.contacts.phone, 
      icon: <Phone />, 
      href: `tel:${PROFILE.contacts.phone}`,
      color: '#22c55e'
    },
    { 
      name: 'LinkedIn', 
      value: 'thiru-dev', 
      icon: <Linkedin />, 
      href: PROFILE.contacts.linkedin,
      color: '#0a66c2'
    }
  ];

  return (
    <section id="contact" className="section-padding container">
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h2 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '1.5rem', fontWeight: 900 }}>
            Let's <span className="text-gradient">Connect.</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
            Open for new opportunities and collaborations.
          </p>
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '2.5rem' 
        }}>
          {contactMethods.map((method, i) => (
            <motion.a
              key={method.name}
              href={method.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="glass-card interactive"
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: '1.5rem',
                textAlign: 'center',
                padding: '4rem 2rem'
              }}
            >
              <div style={{ 
                width: '80px', 
                height: '80px', 
                borderRadius: '24px', 
                background: `${method.color}15`, 
                color: method.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem',
                border: `1px solid ${method.color}30`,
                boxShadow: `0 10px 30px ${method.color}10`
              }}>
                {method.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-0.02em' }}>{method.name}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 500 }}>{method.value}</p>
              <div style={{ 
                marginTop: '1.5rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.5rem',
                fontSize: '0.85rem',
                fontWeight: 700,
                color: 'var(--accent-primary)',
                letterSpacing: '0.05em'
              }}>
                INITIATE CONTACT <ArrowUpRight size={16} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
