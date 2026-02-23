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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card"
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '1.5rem',
              height: '100%'
            }}
          >
            <div style={{ 
              width: '100%', 
              height: '200px', 
              background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))',
              borderRadius: '16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'rgba(255,255,255,0.2)'
            }}>
              <Layers size={48} />
            </div>

            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
              <p style={{ 
                fontSize: '0.85rem', 
                color: 'var(--accent-primary)', 
                fontWeight: 600,
                marginBottom: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                {project.tech}
              </p>
              <ul style={{ 
                paddingLeft: '1.2rem', 
                color: 'var(--text-secondary)', 
                fontSize: '0.9rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem'
              }}>
                {project.highlights.map((h, idx) => (
                  <li key={idx}>{h}</li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
              <button 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '0.5rem', 
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)'
                }}
              >
                Case Study <ExternalLink size={14} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
