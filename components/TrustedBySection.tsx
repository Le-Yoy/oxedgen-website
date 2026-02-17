'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

// Placeholder client logos - replace with actual client names/logos
const clients = [
  { name: 'TechCorp', width: 'w-32' },
  { name: 'StartupX', width: 'w-28' },
  { name: 'GlobalBrand', width: 'w-36' },
  { name: 'InnovateCo', width: 'w-32' },
  { name: 'NextGen', width: 'w-30' },
  { name: 'ScaleUp', width: 'w-28' },
  { name: 'FutureTech', width: 'w-34' },
  { name: 'GrowthHub', width: 'w-32' },
  { name: 'DataFlow', width: 'w-30' },
  { name: 'CloudNine', width: 'w-28' },
  { name: 'Momentum', width: 'w-32' },
  { name: 'Velocity', width: 'w-30' }
];

export default function TrustedBySection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-brand-navy via-brand-darkGray to-brand-navy"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(to right, rgba(66, 189, 239, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(66, 189, 239, 0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-[87.5rem] mx-auto px-4 sm:px-6 lg:px-[clamp(1.25rem,4vw,3.75rem)]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-brand-white/50">Trusted By </span>
            <span className="gradient-text">Brands That Move Fast</span>
          </h2>
          <p className="text-brand-white/60 text-base sm:text-lg max-w-2xl mx-auto">
            From startups to established brands, we help businesses scale their digital presence.
          </p>
        </motion.div>

        {/* Logo Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative"
        >
          {/* Gradient Overlays for fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-r from-brand-darkGray to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-32 bg-gradient-to-l from-brand-darkGray to-transparent z-10 pointer-events-none" />

          {/* Infinite Scroll Container */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: [0, -1920] }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
              className="flex gap-12 sm:gap-16 items-center"
            >
              {/* Duplicate the array twice for seamless loop */}
              {[...clients, ...clients].map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 group cursor-pointer"
                >
                  <div className={`${client.width} h-12 sm:h-16 flex items-center justify-center px-6 py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-brand-cyan/30 transition-all duration-300`}>
                    <span className="text-brand-white/40 group-hover:text-brand-white/80 font-semibold text-sm sm:text-base transition-colors duration-300 whitespace-nowrap">
                      {client.name}
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto"
        >
          <StatItem number="100+" label="Clients Served" />
          <StatItem number="500+" label="Projects Launched" />
          <StatItem number="150M+" label="Revenue Generated" />
          <StatItem number="98%" label="Client Retention" />
        </motion.div>
      </div>
    </section>
  );
}

function StatItem({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
        {number}
      </div>
      <div className="text-brand-white/50 text-xs sm:text-sm">
        {label}
      </div>
    </div>
  );
}
