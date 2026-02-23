import { motion } from 'framer-motion';
import { PROFILE } from '../constants/data';
import { Calendar, MapPin } from 'lucide-react';

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

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {PROFILE.experience.map((exp, i) => (
            <motion.div 
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              style={{ position: 'relative', paddingLeft: '60px' }}
            >
              {/* Dot */}
              <div style={{ 
                position: 'absolute', 
                left: '12px', 
                top: '0', 
                width: '16px', 
                height: '16px', 
                borderRadius: '50%', 
                background: 'var(--accent-primary)',
                border: '4px solid var(--bg-primary)',
                zIndex: 1
              }} />

              <div className="glass-card">
                <div style={{ display: 'flex', justifyContent: 'between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                    <div>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{exp.role}</h3>
                        <p style={{ color: 'var(--accent-primary)', fontWeight: 600 }}>{exp.company}</p>
                    </div>
                </div>
                
                <div style={{ display: 'flex', gap: '2rem', marginBottom: '1.5rem', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Calendar size={14} /> {exp.period}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={14} /> {exp.location}
                  </span>
                </div>

                <ul style={{ paddingLeft: '1.2rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                  {exp.highlights.map((item, idx) => (
                    <li key={idx} style={{ marginBottom: '0.75rem' }}>{item}</li>
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
