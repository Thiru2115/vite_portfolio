import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { PROFILE } from '../constants/data';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: 'power4.out',
        delay: 0.5
      })
      .from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.5')
      .from(ctaRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out'
      }, '-=0.3');
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="section-padding container" 
      style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      <div style={{ maxWidth: '800px' }}>
        <h1 
          ref={titleRef}
          style={{ 
            fontSize: 'clamp(3rem, 10vw, 6rem)', 
            marginBottom: '1.5rem',
            lineHeight: 1
          }}
        >
          I build <span className="text-gradient">Scalable</span> Digital <span className="text-gradient">Experiences.</span>
        </h1>
        
        <p 
          ref={subtitleRef}
          style={{ 
            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', 
            color: 'var(--text-secondary)',
            marginBottom: '3rem',
            maxWidth: '600px'
          }}
        >
          {PROFILE.summary}
        </p>

        <div ref={ctaRef} style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
          <a 
            href="#projects" 
            className="glass"
            style={{ 
              padding: '1rem 2rem', 
              borderRadius: '12px', 
              fontWeight: 600,
              background: 'white',
              color: 'black'
            }}
          >
            View Projects
          </a>
          <a 
            href="#contact" 
            style={{ fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
          >
            Get in touch <ArrowDown size={18} />
          </a>
        </div>
      </div>

      {/* Background Decor */}
      <div 
        style={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: '40vw',
          height: '40vw',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(60px)',
          zIndex: -1
        }}
      />
    </section>
  );
};
