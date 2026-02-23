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
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
          gap: '2rem' 
        }}>
          {contactMethods.map((method, i) => (
            <motion.a
              key={method.name}
              href={method.href}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card"
              style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: '1rem',
                textAlign: 'center',
                padding: '3rem 2rem'
              }}
            >
              <div style={{ 
                width: '60px', 
                height: '60px', 
                borderRadius: '50%', 
                background: `${method.color}15`, 
                color: method.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '1rem'
              }}>
                {method.icon}
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700 }}>{method.name}</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{method.value}</p>
              <div style={{ 
                marginTop: '1rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '0.25rem',
                fontSize: '0.8rem',
                fontWeight: 600,
                color: 'var(--accent-primary)'
              }}>
                MESSAGE ME <ArrowUpRight size={14} />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
