import { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
}

export function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize stars
    const starCount = 300;
    starsRef.current = Array.from({ length: starCount }, () => ({
      x: Math.random() * canvas.width - canvas.width / 2,
      y: Math.random() * canvas.height - canvas.height / 2,
      z: Math.random() * canvas.width,
      size: Math.random() * 2,
      speed: Math.random() * 0.5 + 0.1,
    }));

    // Add occasional shooting stars
    const shootingStars: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      life: number;
    }> = [];

    const createShootingStar = () => {
      if (Math.random() > 0.995) {
        shootingStars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height * 0.5,
          vx: Math.random() * 3 + 2,
          vy: Math.random() * 2 + 1,
          life: 1,
        });
      }
    };

    // Animation loop
    const animate = () => {
      ctx.fillStyle = 'rgba(7, 7, 18, 0.3)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw stars
      starsRef.current.forEach((star) => {
        star.z -= star.speed;
        if (star.z <= 0) {
          star.z = canvas.width;
          star.x = Math.random() * canvas.width - centerX;
          star.y = Math.random() * canvas.height - centerY;
        }

        const k = 128 / star.z;
        const px = star.x * k + centerX;
        const py = star.y * k + centerY;

        if (px >= 0 && px <= canvas.width && py >= 0 && py <= canvas.height) {
          const size = (1 - star.z / canvas.width) * star.size;
          const opacity = 1 - star.z / canvas.width;
          
          ctx.beginPath();
          ctx.arc(px, py, size, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${139 + opacity * 50}, ${92 + opacity * 100}, 246, ${opacity})`;
          ctx.fill();
        }
      });

      // Draw shooting stars
      createShootingStar();
      shootingStars.forEach((star, index) => {
        star.x += star.vx;
        star.y += star.vy;
        star.life -= 0.01;

        if (star.life <= 0) {
          shootingStars.splice(index, 1);
          return;
        }

        const gradient = ctx.createLinearGradient(
          star.x,
          star.y,
          star.x - star.vx * 10,
          star.y - star.vy * 10
        );
        gradient.addColorStop(0, `rgba(34, 211, 238, ${star.life})`);
        gradient.addColorStop(1, 'rgba(34, 211, 238, 0)');

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(star.x, star.y);
        ctx.lineTo(star.x - star.vx * 10, star.y - star.vy * 10);
        ctx.stroke();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 'var(--amn-z-starfield)' }}
    />
  );
}
