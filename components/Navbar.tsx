'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [particles, setParticles] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const pathname = usePathname();
  const navRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'About', href: '/about' },
    { name: 'Insights', href: '/insights' },
    { name: 'Contact', href: '/contact' },
  ];

  // Initialize particles (only on desktop for performance)
  useEffect(() => {
    // Check if screen is desktop size
    const isDesktop = window.innerWidth >= 768;
    if (!isDesktop) return;

    const initialParticles = Array.from({ length: 80 }, (_, i) => ({
      x: Math.random() * (navRef.current?.offsetWidth || 1000),
      y: Math.random() * 100,
      id: i,
    }));
    setParticles(initialParticles);
  }, []);

  // Animate particles canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const animate = () => {
      if (!navRef.current) return;

      canvas.width = navRef.current.offsetWidth;
      canvas.height = 100;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cursorX = smoothMouseX.get();
      const cursorY = smoothMouseY.get();

      // Draw particles with connections
      particles.forEach((particle, i) => {
        const dx = cursorX - particle.x;
        const dy = cursorY - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const force = Math.max(0, 1 - distance / 300);

        // Move particle away from cursor
        particle.x += dx * force * 0.5;
        particle.y += dy * force * 0.5;

        // Drift animation
        particle.x += Math.sin(time * 0.001 + i * 0.1) * 0.3;
        particle.y += Math.cos(time * 0.001 + i * 0.15) * 0.2;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = 100;
        if (particle.y > 100) particle.y = 0;

        // Draw particle
        const opacity = 0.3 + force * 0.4;
        const hue = (time * 0.05 + i * 5) % 360;
        ctx.fillStyle = `hsla(${hue}, 80%, 60%, ${opacity})`;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, 1 + force * 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        particles.forEach((other, j) => {
          if (j <= i) return;
          const dx2 = other.x - particle.x;
          const dy2 = other.y - particle.y;
          const dist = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (dist < 120) {
            const lineOpacity = (1 - dist / 120) * 0.15;
            ctx.strokeStyle = `hsla(${hue}, 70%, 65%, ${lineOpacity})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();
          }
        });
      });

      time++;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [particles, smoothMouseX, smoothMouseY]);

  // Track mouse
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (navRef.current) {
        const rect = navRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 overflow-hidden"
    >
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 opacity-90">
        <div
          className="absolute inset-0 animate-mesh-1"
          style={{
            background: 'radial-gradient(at 0% 0%, rgba(66, 189, 239, 0.3) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(124, 58, 237, 0.25) 0px, transparent 50%), radial-gradient(at 100% 100%, rgba(255, 107, 53, 0.2) 0px, transparent 50%)',
          }}
        />
        <div
          className="absolute inset-0 animate-mesh-2"
          style={{
            background: 'radial-gradient(at 40% 40%, rgba(66, 189, 239, 0.25) 0px, transparent 50%), radial-gradient(at 80% 10%, rgba(255, 107, 53, 0.2) 0px, transparent 50%)',
          }}
        />
      </div>

      {/* Particle Canvas - Hidden on mobile for performance */}
      <canvas
        ref={canvasRef}
        className="hidden md:block absolute inset-0 pointer-events-none"
        style={{ height: '100%', width: '100%' }}
      />

      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 backdrop-blur-2xl bg-gradient-to-b from-brand-navy/60 via-brand-navy/40 to-brand-navy/20 border-b border-white/5" />

      {/* Holographic shimmer effect */}
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay animate-shimmer"
        style={{
          background: 'linear-gradient(110deg, transparent 20%, rgba(255, 255, 255, 0.1) 40%, rgba(66, 189, 239, 0.3) 50%, rgba(255, 107, 53, 0.2) 55%, transparent 70%)',
          backgroundSize: '200% 100%',
        }}
      />

      {/* Content */}
      <nav className="relative max-w-[87.5rem] mx-auto px-4 sm:px-6 lg:px-[clamp(1.25rem,4vw,3.75rem)] py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo with holographic effect */}
          <Link href="/" className="relative group">
            <motion.div
              whileHover={{ scale: 1.08, rotateY: 5 }}
              transition={{ type: 'spring', stiffness: 300 }}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/30 via-brand-orange/20 to-purple-500/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Image
                src="/logo.png"
                alt="OXEDGEN"
                width={150}
                height={40}
                className="relative h-6 sm:h-8 w-auto transition-all duration-500 group-hover:drop-shadow-[0_0_15px_rgba(66,189,239,0.8)]"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation - 3D Floating Cards */}
          <div className="hidden md:flex items-center gap-1 relative" style={{ perspective: '1000px' }}>
            {navLinks.map((link, index) => (
              <NavLink3D
                key={link.name}
                href={link.href}
                isActive={pathname === link.href}
                index={index}
              >
                {link.name}
              </NavLink3D>
            ))}

            {/* Holographic CTA */}
            <Link
              href="/contact"
              className="ml-4 relative group"
            >
              <motion.div
                whileHover={{ scale: 1.05, rotateX: -5 }}
                whileTap={{ scale: 0.98 }}
                style={{ transformStyle: 'preserve-3d' }}
                className="relative px-6 py-2.5 bg-gradient-to-r from-brand-orange via-[#FF8C42] to-brand-orange rounded-full font-semibold text-brand-white overflow-hidden"
              >
                <span className="relative z-10">Let's Talk</span>

                {/* Animated shine */}
                <div className="absolute inset-0 animate-shine bg-gradient-to-r from-transparent via-white/30 to-transparent" style={{ backgroundSize: '200% 100%' }} />

                {/* Glow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-[#FF8C42] opacity-0 group-hover:opacity-75 blur-lg transition-opacity duration-500" />
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-brand-white relative"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <motion.div
              animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden backdrop-blur-2xl bg-brand-navy/80 border-t border-white/10"
        >
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={link.href}
                  className={`block text-lg font-medium ${
                    pathname === link.href ? 'text-brand-cyan' : 'text-brand-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Keyframe animations */}
      <style jsx>{`
        @keyframes mesh-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -20px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
        }
        @keyframes mesh-2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-30px, 10px) rotate(5deg); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        @keyframes shine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-mesh-1 {
          animation: mesh-1 20s ease-in-out infinite;
        }
        .animate-mesh-2 {
          animation: mesh-2 15s ease-in-out infinite;
        }
        .animate-shimmer {
          animation: shimmer 8s linear infinite;
        }
        .animate-shine {
          animation: shine 2s linear infinite;
        }
      `}</style>
    </div>
  );
}

// 3D Floating Nav Link Component
function NavLink3D({
  href,
  children,
  isActive,
  index,
}: {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        animate={{
          rotateX: isHovered ? -8 : 0,
          rotateY: isHovered ? 8 : 0,
          z: isHovered ? 50 : 0,
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative px-4 py-2"
      >
        {/* Glassmorphic card background */}
        <div
          className={`absolute inset-0 rounded-lg transition-all duration-500 ${
            isActive || isHovered
              ? 'bg-gradient-to-br from-brand-cyan/20 via-brand-orange/10 to-purple-500/20 backdrop-blur-md border border-brand-cyan/30 shadow-[0_8px_32px_rgba(66,189,239,0.2)]'
              : 'bg-white/5 backdrop-blur-sm border border-white/5'
          }`}
          style={{
            transform: isHovered ? 'translateZ(-20px)' : 'translateZ(0px)',
          }}
        />

        {/* Holographic shimmer on hover */}
        {isHovered && (
          <div
            className="absolute inset-0 rounded-lg opacity-60 mix-blend-overlay animate-shimmer"
            style={{
              background: 'linear-gradient(110deg, transparent 30%, rgba(255,255,255,0.3) 50%, transparent 70%)',
              backgroundSize: '200% 100%',
            }}
          />
        )}

        {/* Text */}
        <span
          className={`relative font-medium transition-all duration-300 ${
            isActive
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-brand-cyan via-brand-orange to-purple-400'
              : isHovered
              ? 'text-brand-cyan'
              : 'text-brand-white/90'
          }`}
          style={{
            transform: isHovered ? 'translateZ(30px)' : 'translateZ(0px)',
            textShadow: isActive || isHovered ? '0 0 20px rgba(66, 189, 239, 0.5)' : 'none',
          }}
        >
          {children}
        </span>

        {/* Bottom glow line for active */}
        {isActive && (
          <motion.div
            layoutId="activeIndicator"
            className="absolute -bottom-1 left-1/2 w-1/2 h-0.5 bg-gradient-to-r from-transparent via-brand-cyan to-transparent"
            style={{ transform: 'translateX(-50%)' }}
          />
        )}
      </motion.div>
    </Link>
  );
}
