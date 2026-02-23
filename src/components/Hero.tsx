import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { motion } from 'framer-motion';
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

      // Clear initial states
      gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], { opacity: 0, y: 30 });

      tl.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'expo.out',
        delay: 0.5
      })
      .to(subtitleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'expo.out'
      }, '-=0.8')
      .to(ctaRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'expo.out'
      }, '-=0.7');

      // Floating background animation
      gsap.to('.bg-blob', {
        x: 'random(-50, 50)',
        y: 'random(-50, 50)',
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 1
      });
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
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div style={{ maxWidth: '900px', zIndex: 10 }}>
        <h1 
          ref={titleRef}
          style={{ 
            fontSize: 'clamp(3.5rem, 12vw, 7.5rem)', 
            marginBottom: '2rem',
            lineHeight: 0.9,
            fontWeight: 900,
            letterSpacing: '-0.05em'
          }}
        >
          Building <span className="text-gradient">Impactful</span> Digital <br />
          <span style={{ position: 'relative' }}>
            Products.
            <motion.span 
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ delay: 1.2, duration: 1 }}
              style={{
                position: 'absolute',
                bottom: '10%',
                left: 0,
                height: '8px',
                background: 'var(--accent-primary)',
                zIndex: -1,
                opacity: 0.3,
                borderRadius: '4px'
              }}
            />
          </span>
        </h1>
        
        <p 
          ref={subtitleRef}
          style={{ 
            fontSize: 'clamp(1.1rem, 2.5vw, 1.6rem)', 
            color: 'var(--text-secondary)',
            marginBottom: '4rem',
            maxWidth: '650px',
            fontWeight: 400,
            lineHeight: 1.4
          }}
        >
          {PROFILE.summary}
        </p>

        <div ref={ctaRef} style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
          <motion.a 
            href="#projects" 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass"
            style={{ 
              padding: '1.2rem 2.8rem', 
              borderRadius: '100px', 
              fontWeight: 700,
              background: 'var(--text-primary)',
              color: 'var(--bg-primary)',
              fontSize: '1rem',
              boxShadow: '0 10px 30px rgba(255, 255, 255, 0.1)'
            }}
          >
            Explore Work
          </motion.a>
          <a 
            href="#contact" 
            className="interactive"
            style={{ 
              fontWeight: 700, 
              display: 'flex', 
              alignItems: 'center', 
              gap: '0.75rem',
              fontSize: '1rem',
              color: 'var(--text-primary)'
            }}
          >
            Start a Conversation <ArrowDown size={20} />
          </a>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="bg-blob" style={{
        position: 'absolute',
        top: '10%',
        right: '-5%',
        width: '45vw',
        height: '45vw',
        background: 'radial-gradient(circle, rgba(99, 102, 241, 0.2) 0%, transparent 70%)',
        filter: 'blur(80px)',
        zIndex: 1
      }} />
      <div className="bg-blob" style={{
        position: 'absolute',
        bottom: '-10%',
        left: '10%',
        width: '35vw',
        height: '35vw',
        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.15) 0%, transparent 70%)',
        filter: 'blur(80px)',
        zIndex: 1
      }} />
    </section>
  );
};
