import { useEffect, useRef, useState } from 'react';

export function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const idRef = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX}px`;
        glowRef.current.style.top = `${e.clientY}px`;
      }

      // Add trail particle occasionally
      if (Math.random() > 0.7) {
        const newParticle = {
          x: e.clientX,
          y: e.clientY,
          id: idRef.current++,
        };
        setTrail((prev) => [...prev.slice(-10), newParticle]);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Fade out trail particles
  useEffect(() => {
    if (trail.length > 0) {
      const timer = setTimeout(() => {
        setTrail((prev) => prev.slice(1));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [trail]);

  return (
    <>
      {/* Main Cursor Glow */}
      <div
        ref={glowRef}
        className="fixed pointer-events-none mix-blend-screen"
        style={{
          zIndex: 'var(--amn-z-cursor)',
          width: '400px',
          height: '400px',
          marginLeft: '-200px',
          marginTop: '-200px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          transition: 'left 0.1s ease-out, top 0.1s ease-out',
        }}
      />

      {/* Trail Particles */}
      {trail.map((particle, index) => (
        <div
          key={particle.id}
          className="fixed pointer-events-none rounded-full mix-blend-screen"
          style={{
            zIndex: 'var(--amn-z-cursor)',
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: '4px',
            height: '4px',
            marginLeft: '-2px',
            marginTop: '-2px',
            background: 'rgba(34, 211, 238, 0.6)',
            boxShadow: '0 0 10px rgba(34, 211, 238, 0.8)',
            opacity: (index + 1) / trail.length,
            animation: 'fade-out 0.5s ease-out forwards',
          }}
        />
      ))}
    </>
  );
}
