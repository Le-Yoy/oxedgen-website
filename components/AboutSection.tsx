'use client';

import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

export default function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-32 overflow-hidden bg-gradient-to-b from-brand-navy via-brand-darkGray to-brand-navy"
    >
      {/* Organic Gradient Mesh - Not Perfect Circles */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 -left-20 w-[500px] h-[600px] bg-brand-cyan/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-3xl animate-morph" />
        <div className="absolute top-60 right-0 w-[450px] h-[550px] bg-brand-orange/25 rounded-[40%_60%_70%_30%/40%_60%_30%_70%] blur-3xl animate-morph-delayed" />
        <div className="absolute -bottom-40 left-1/3 w-[600px] h-[500px] bg-purple-500/20 rounded-[70%_30%_50%_50%/30%_50%_50%_70%] blur-3xl animate-morph-slow" />
      </div>

      {/* Floating Geometric Shapes - Custom SVG Background Elements */}
      <div className="absolute inset-0 opacity-10 overflow-hidden pointer-events-none">
        <svg className="absolute top-20 left-10 w-32 h-32 animate-spin-slow" viewBox="0 0 100 100">
          <polygon points="50,10 90,35 90,75 50,95 10,75 10,35" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-cyan" />
        </svg>
        <svg className="absolute bottom-40 right-20 w-24 h-24 animate-pulse-custom" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-orange" strokeDasharray="5,5" />
          <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-orange" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[87.5rem] mx-auto px-4 sm:px-6 lg:px-[clamp(1.25rem,4vw,3.75rem)]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-brand-cyan/20 to-brand-orange/20 border border-brand-cyan/30 text-brand-cyan text-sm font-semibold backdrop-blur-md">
              The Real Story
            </span>
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-brand-white">We Build Stuff That </span>
            <span className="gradient-text">Actually Works</span>
          </h2>
          <p className="text-brand-white/70 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            From our studio in Rabat, we craft digital experiences that don&apos;t just look pretty—they perform. Less buzzwords, more results.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Main Feature Card */}
          <TiltCard delay={0.2} className="md:col-span-2 lg:row-span-2">
            <div className="h-full flex flex-col justify-between p-8 sm:p-10">
              <div>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-cyan/20 to-brand-orange/20 flex items-center justify-center mb-6 backdrop-blur-md border border-brand-cyan/30">
                  <LaunchIcon />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-brand-white mb-4">
                  No BS, Just Strategy
                </h3>
                <p className="text-brand-white/70 text-base sm:text-lg leading-relaxed mb-6">
                  We skip the corporate jargon and get straight to work. Every campaign we build is backed by data, driven by creativity, and obsessed with your bottom line.
                </p>
              </div>
              <div className="space-y-3">
                <ProgressBar label="Campaign Planning" percentage={95} delay={0.5} />
                <ProgressBar label="Creative Direction" percentage={98} delay={0.7} />
                <ProgressBar label="Conversion Rate" percentage={92} delay={0.9} />
              </div>
            </div>
          </TiltCard>

          {/* Stats Cards */}
          <TiltCard delay={0.3} className="bg-gradient-to-br from-brand-cyan/10 to-transparent">
            <div className="p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-cyan/20 flex items-center justify-center mx-auto mb-4 backdrop-blur-md border border-brand-cyan/30">
                <GrowthIcon />
              </div>
              <CountUpNumber end={150} suffix="M+" delay={0.5} />
              <p className="text-brand-white/70 mt-2 text-sm">Generated for Clients</p>
            </div>
          </TiltCard>

          <TiltCard delay={0.4} className="bg-gradient-to-br from-brand-orange/10 to-transparent">
            <div className="p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-brand-orange/20 flex items-center justify-center mx-auto mb-4 backdrop-blur-md border border-brand-orange/30">
                <NetworkIcon />
              </div>
              <CountUpNumber end={100} suffix="+" delay={0.6} />
              <p className="text-brand-white/70 mt-2 text-sm">Brands We&apos;ve Scaled</p>
            </div>
          </TiltCard>

          <TiltCard delay={0.5} className="bg-gradient-to-br from-purple-500/10 to-transparent">
            <div className="p-8 text-center">
              <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center mx-auto mb-4 backdrop-blur-md border border-purple-400/30">
                <LightningIcon />
              </div>
              <CountUpNumber end={500} suffix="+" delay={0.7} />
              <p className="text-brand-white/70 mt-2 text-sm">Campaigns Shipped</p>
            </div>
          </TiltCard>

          {/* Why Work With Us */}
          <TiltCard delay={0.6} className="md:col-span-2">
            <div className="p-8 sm:p-10">
              <h3 className="text-xl sm:text-2xl font-bold text-brand-white mb-6">
                What Sets Us Apart
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FeatureItem
                  icon={<TargetIcon />}
                  title="ROI Over Vanity"
                  description="We track what matters: your revenue, not likes."
                />
                <FeatureItem
                  icon={<CodeIcon />}
                  title="Built Different"
                  description="Custom code, not cookie-cutter templates."
                />
                <FeatureItem
                  icon={<ConnectIcon />}
                  title="Real Partnership"
                  description="We win when you win. Simple as that."
                />
                <FeatureItem
                  icon={<SpeedIcon />}
                  title="Move Fast"
                  description="2-week sprints. Quality at velocity."
                />
              </div>
            </div>
          </TiltCard>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <MagneticButton />
        </motion.div>
      </div>

      <style jsx>{`
        @keyframes morph {
          0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; transform: translate(0, 0) rotate(0deg); }
          25% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; transform: translate(10px, -20px) rotate(5deg); }
          50% { border-radius: 50% 50% 30% 60% / 30% 60% 70% 40%; transform: translate(-15px, 10px) rotate(-5deg); }
          75% { border-radius: 60% 40% 60% 40% / 70% 30% 40% 70%; transform: translate(5px, 15px) rotate(3deg); }
        }
        @keyframes morph-delayed {
          0%, 100% { border-radius: 40% 60% 70% 30% / 40% 60% 30% 70%; transform: translate(0, 0) rotate(0deg); }
          33% { border-radius: 70% 30% 50% 50% / 60% 40% 60% 40%; transform: translate(-20px, 10px) rotate(-8deg); }
          66% { border-radius: 50% 50% 40% 60% / 30% 70% 40% 60%; transform: translate(15px, -15px) rotate(8deg); }
        }
        @keyframes morph-slow {
          0%, 100% { border-radius: 70% 30% 50% 50% / 30% 50% 50% 70%; transform: translate(0, 0) scale(1); }
          50% { border-radius: 30% 70% 50% 50% / 50% 30% 70% 50%; transform: translate(20px, -25px) scale(1.05); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse-custom {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        .animate-morph { animation: morph 25s ease-in-out infinite; }
        .animate-morph-delayed { animation: morph-delayed 20s ease-in-out infinite; }
        .animate-morph-slow { animation: morph-slow 30s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 30s linear infinite; }
        .animate-pulse-custom { animation: pulse-custom 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

// Custom SVG Icons - Unique Designs
function LaunchIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
      <path d="M20 4L28 12L24 16L16 8L20 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-cyan" />
      <path d="M16 8L24 16L14 26L6 18L16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-orange" />
      <circle cx="10" cy="22" r="2" fill="currentColor" className="text-brand-cyan" />
      <path d="M6 28L10 24M22 10L26 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-brand-orange" />
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
      <path d="M3 17L9 11L13 15L21 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-cyan" />
      <path d="M17 7H21V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-cyan" />
      <circle cx="9" cy="11" r="1.5" fill="currentColor" className="text-brand-orange" />
      <circle cx="13" cy="15" r="1.5" fill="currentColor" className="text-brand-orange" />
    </svg>
  );
}

function NetworkIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" className="text-brand-orange" />
      <circle cx="6" cy="6" r="2" stroke="currentColor" strokeWidth="2" className="text-brand-orange" />
      <circle cx="18" cy="6" r="2" stroke="currentColor" strokeWidth="2" className="text-brand-orange" />
      <circle cx="6" cy="18" r="2" stroke="currentColor" strokeWidth="2" className="text-brand-orange" />
      <circle cx="18" cy="18" r="2" stroke="currentColor" strokeWidth="2" className="text-brand-orange" />
      <path d="M9.5 10.5L7.5 7.5M14.5 10.5L16.5 7.5M9.5 13.5L7.5 16.5M14.5 13.5L16.5 16.5" stroke="currentColor" strokeWidth="1.5" className="text-brand-orange opacity-50" />
    </svg>
  );
}

function LightningIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
      <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-400" fill="currentColor" fillOpacity="0.2" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" className="text-brand-cyan" />
      <circle cx="16" cy="16" r="8" stroke="currentColor" strokeWidth="2" className="text-brand-cyan" />
      <circle cx="16" cy="16" r="3" fill="currentColor" className="text-brand-orange" />
      <path d="M16 4V8M16 24V28M4 16H8M24 16H28" stroke="currentColor" strokeWidth="2" className="text-brand-cyan opacity-50" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
      <path d="M10 8L4 16L10 24M22 8L28 16L22 24M19 4L13 28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-brand-orange" />
    </svg>
  );
}

function ConnectIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
      <circle cx="8" cy="16" r="4" stroke="currentColor" strokeWidth="2" className="text-brand-cyan" />
      <circle cx="24" cy="16" r="4" stroke="currentColor" strokeWidth="2" className="text-brand-orange" />
      <path d="M12 16H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-brand-cyan" />
      <path d="M14 12L18 12M14 20L18 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-brand-orange opacity-50" />
    </svg>
  );
}

function SpeedIcon() {
  return (
    <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none">
      <path d="M28 16C28 22.6274 22.6274 28 16 28C9.37258 28 4 22.6274 4 16C4 9.37258 9.37258 4 16 4C22.6274 4 28 9.37258 28 16Z" stroke="currentColor" strokeWidth="2" className="text-purple-400" />
      <path d="M16 16L22 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-purple-400" />
      <circle cx="16" cy="16" r="2" fill="currentColor" className="text-brand-orange" />
      <path d="M8 20L12 18M10 12L14 14M24 18L20 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" className="text-purple-400 opacity-50" />
    </svg>
  );
}

// Components remain the same structure but with updated copy
function TiltCard({
  children,
  delay = 0,
  className = '',
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 100,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 100,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const percentX = (e.clientX - centerX) / (rect.width / 2);
    const percentY = (e.clientY - centerY) / (rect.height / 2);
    mouseX.set(percentX);
    mouseY.set(percentY);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      className={`relative group cursor-pointer ${className}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent backdrop-blur-xl rounded-3xl border border-white/10 transition-all duration-500 group-hover:border-brand-cyan/30 group-hover:shadow-[0_8px_32px_rgba(66,189,239,0.2)]" />
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </div>
      <div className="relative" style={{ transform: 'translateZ(50px)' }}>
        {children}
      </div>
    </motion.div>
  );
}

function ProgressBar({ label, percentage, delay }: { label: string; percentage: number; delay: number }) {
  const progressRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(progressRef, { once: true, amount: 0.5 });

  return (
    <div ref={progressRef}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-brand-white/80 text-sm">{label}</span>
        <span className="text-brand-cyan font-semibold text-sm">{percentage}%</span>
      </div>
      <div className="h-2 bg-white/10 rounded-full overflow-hidden backdrop-blur-sm">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, delay, ease: 'easeOut' }}
          className="h-full bg-gradient-to-r from-brand-cyan via-brand-orange to-brand-cyan bg-[length:200%_100%] animate-gradient-x rounded-full"
        />
      </div>
    </div>
  );
}

function CountUpNumber({ end, suffix = '', delay }: { end: number; suffix?: string; delay: number }) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(countRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    let current = 0;

    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCount(end);
          clearInterval(interval);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [isInView, end, delay]);

  return (
    <div ref={countRef} className="text-4xl sm:text-5xl font-bold gradient-text">
      {count}
      {suffix}
    </div>
  );
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="flex items-start gap-3 group">
      <div className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
        {icon}
      </div>
      <div>
        <h4 className="text-brand-white font-semibold mb-1">{title}</h4>
        <p className="text-brand-white/60 text-sm">{description}</p>
      </div>
    </div>
  );
}

function MagneticButton() {
  const buttonRef = useRef<HTMLAnchorElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 15 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) * 0.3);
    mouseY.set((e.clientY - centerY) * 0.3);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.a
      ref={buttonRef}
      href="/about"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block relative group"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        className="relative px-8 py-4 bg-gradient-to-r from-brand-orange via-[#FF8C42] to-brand-orange rounded-full font-semibold text-brand-white overflow-hidden"
      >
        <span className="relative z-10 flex items-center gap-2">
          See How We Work
          <motion.svg
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.3 }}
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </motion.svg>
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
        <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-[#FF8C42] opacity-0 group-hover:opacity-75 blur-xl transition-opacity duration-500" />
      </motion.div>
    </motion.a>
  );
}
