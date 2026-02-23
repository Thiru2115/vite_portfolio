import { motion } from 'framer-motion';
import { PROFILE } from '../constants/data';
import { Calendar } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="section-padding container">
      <div style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>
          Professional <span className="text-gradient">Journey</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          Proven track record in delivering high-impact solutions for enterprise and startup environments.
        </p>
      </div>

      <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
        {/* Vertical Line */}
        <div style={{ 
          position: 'absolute', 
          left: '20px', 
          top: 0, 
          bottom: 0, 
          width: '1px', 
          background: 'var(--glass-border)',
          zIndex: 0
        }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {PROFILE.experience.map((exp, i) => (
            <motion.div 
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              style={{ position: 'relative', paddingLeft: '80px' }}
            >
              {/* Refined Dot */}
              <div style={{ 
                position: 'absolute', 
                left: '11px', 
                top: '0', 
                width: '18px', 
                height: '18px', 
                borderRadius: '50%', 
                background: 'var(--accent-primary)',
                border: '4px solid var(--bg-primary)',
                boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)',
                zIndex: 1
              }} />

              <div className="glass-card">
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.02em' }}>{exp.role}</h3>
                        <p style={{ color: 'var(--accent-primary)', fontWeight: 700, fontSize: '1.1rem' }}>{exp.company}</p>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                       <span style={{ 
                         display: 'inline-flex', 
                         alignItems: 'center', 
                         gap: '0.5rem',
                         background: 'rgba(255,255,255,0.03)',
                         padding: '6px 16px',
                         borderRadius: '99px',
                         border: '1px solid var(--glass-border)',
                         fontSize: '0.85rem',
                         color: 'var(--text-secondary)'
                       }}>
                         <Calendar size={14} /> {exp.period}
                       </span>
                    </div>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, color: 'var(--text-secondary)', fontSize: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} style={{ display: 'flex', gap: '1rem', lineHeight: 1.5 }}>
                      <span style={{ color: 'var(--accent-primary)', fontWeight: 900 }}>•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
