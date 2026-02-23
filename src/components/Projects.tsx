import { motion } from 'framer-motion';
import { PROFILE } from '../constants/data';
import { ExternalLink, Layers } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="section-padding container">
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>
          Selected <span className="text-gradient">Works</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '500px' }}>
          A showcase of complex systems and applications built with modern technology stacks.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '2.5rem' 
      }}>
        {PROFILE.projects.map((project, i) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="glass-card"
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '2rem',
              height: '100%',
              padding: '3rem'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ 
                width: '60px', 
                height: '60px', 
                background: 'rgba(99, 102, 241, 0.1)', 
                borderRadius: '16px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)'
              }}>
                <Layers size={32} />
              </div>
              <a 
                href="#" 
                className="interactive"
                style={{ 
                  color: 'var(--text-secondary)',
                  padding: '8px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid var(--glass-border)'
                }}
              >
                <ExternalLink size={20} />
              </a>
            </div>

            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', fontWeight: 800 }}>{project.title}</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {project.tech.split(', ').map(t => (
                  <span key={t} style={{ 
                    fontSize: '0.7rem', 
                    fontWeight: 700, 
                    background: 'rgba(99, 102, 241, 0.05)', 
                    color: 'var(--accent-primary)',
                    padding: '4px 12px',
                    borderRadius: '99px',
                    border: '1px solid rgba(99, 102, 241, 0.1)'
                  }}>
                    {t}
                  </span>
                ))}
              </div>
              <ul style={{ 
                listStyle: 'none',
                padding: 0, 
                color: 'var(--text-secondary)', 
                fontSize: '0.95rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem'
              }}>
                {project.highlights.map((h, idx) => (
                  <li key={idx} style={{ display: 'flex', gap: '0.75rem' }}>
                    <span style={{ color: 'var(--accent-primary)', fontWeight: 900 }}>→</span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
