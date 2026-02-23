import { motion } from 'framer-motion';
import { PROFILE } from '../constants/data';
import { Cpu, Code2, Database, Layout } from 'lucide-react';

export const Skills = () => {
  const categories = [
    { name: 'Frontend', icon: <Layout />, skills: PROFILE.skills.frontend },
    { name: 'Backend', icon: <Code2 />, skills: PROFILE.skills.backend },
    { name: 'Databases', icon: <Database />, skills: PROFILE.skills.databases },
    { name: 'Tools', icon: <Cpu />, skills: PROFILE.skills.tools },
  ];

  return (
    <section id="skills" className="section-padding container">
      <div style={{ marginBottom: '4rem' }}>
        <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>
          Technical <span className="text-gradient">Arsenal</span>
        </h2>
        <p style={{ color: 'var(--text-secondary)', maxWidth: '500px' }}>
          A comprehensive toolkit tailored for building high-performance web and mobile applications.
        </p>
      </div>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '2rem' 
      }}>
        {categories.map((cat, i) => (
          <motion.div 
            key={cat.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card"
          >
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem', 
              marginBottom: '1.5rem',
              color: 'var(--accent-primary)'
            }}>
              {cat.icon}
              <h3 style={{ fontSize: '1.25rem' }}>{cat.name}</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              {cat.skills.map((skill) => (
                <span 
                  key={skill}
                  style={{ 
                    padding: '0.4rem 0.8rem', 
                    borderRadius: '8px', 
                    fontSize: '0.8rem',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--text-secondary)'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
