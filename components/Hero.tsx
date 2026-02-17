'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaMeta, FaInstagram, FaGoogle, FaLinkedin, FaTiktok, FaFacebook } from 'react-icons/fa6';

export default function Hero() {
  return (
    <section className="relative min-h-[100dvh] sm:min-h-[110vh] flex items-center justify-center overflow-hidden bg-brand-navy -mt-20 pt-24 sm:pt-32">
      {/* Animated gradient background - extends to top */}
      <div className="absolute inset-0 -top-20 bg-gradient-to-br from-brand-navy via-brand-navy to-brand-darkGray" />

      {/* Animated gradient mesh overlay - extends to top */}
      <div
        className="absolute inset-0 -top-20 opacity-40 animate-pulse-slow"
        style={{
          background: 'radial-gradient(at 20% 30%, rgba(66, 189, 239, 0.4) 0px, transparent 50%), radial-gradient(at 80% 20%, rgba(124, 58, 237, 0.3) 0px, transparent 50%), radial-gradient(at 40% 70%, rgba(255, 107, 53, 0.2) 0px, transparent 50%)',
          animation: 'pulse-slow 8s ease-in-out infinite'
        }}
      />

      {/* Floating Brand Logos - Behind Text (2 logos) - Responsive sizing */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30 sm:opacity-40 z-0">
        {/* Instagram Logo - Behind Text Left */}
        <div className="absolute top-[35%] left-[15%] sm:left-[20%] lg:left-[25%] w-20 sm:w-28 lg:w-36 h-20 sm:h-28 lg:h-36 animate-dance-left">
          <div className="relative w-full h-full p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-pink-500/20 to-orange-500/10 rounded-2xl lg:rounded-3xl backdrop-blur-lg border border-pink-400/20 shadow-[0_0_40px_rgba(236,72,153,0.3)] sm:shadow-[0_0_60px_rgba(236,72,153,0.3)] flex items-center justify-center">
            <FaInstagram className="w-full h-full text-pink-400/60" />
          </div>
        </div>

        {/* Google Logo - Behind Text Right */}
        <div className="absolute top-[40%] right-[18%] sm:right-[23%] lg:right-[28%] w-18 sm:w-24 lg:w-32 h-18 sm:h-24 lg:h-32 animate-dance-right delay-1000">
          <div className="relative w-full h-full p-3 sm:p-5 lg:p-7 bg-gradient-to-br from-red-500/20 to-yellow-500/10 rounded-2xl lg:rounded-3xl backdrop-blur-lg border border-red-400/20 shadow-[0_0_35px_rgba(239,68,68,0.3)] sm:shadow-[0_0_55px_rgba(239,68,68,0.3)] flex items-center justify-center">
            <FaGoogle className="w-full h-full text-red-400/60" />
          </div>
        </div>
      </div>

      {/* Floating Brand Logos - Around Edges (4 logos) - Responsive sizing */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-40 sm:opacity-50">
        {/* Facebook Logo - Top Left */}
        <div className="absolute top-[15%] left-[3%] sm:left-[5%] lg:left-[8%] w-14 sm:w-20 lg:w-28 h-14 sm:h-20 lg:h-28 animate-dance-left">
          <div className="relative w-full h-full p-3 sm:p-4 lg:p-6 bg-gradient-to-br from-blue-600/25 to-blue-700/15 rounded-2xl lg:rounded-3xl backdrop-blur-md border border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.4)] sm:shadow-[0_0_50px_rgba(59,130,246,0.4)] flex items-center justify-center">
            <FaFacebook className="w-full h-full text-blue-400" />
          </div>
        </div>

        {/* LinkedIn Logo - Top Right */}
        <div className="absolute top-[20%] right-[3%] sm:right-[5%] lg:right-[10%] w-16 sm:w-24 lg:w-32 h-16 sm:h-24 lg:h-32 animate-dance-right delay-500">
          <div className="relative w-full h-full p-3 sm:p-5 lg:p-7 bg-gradient-to-br from-blue-600/25 to-blue-700/15 rounded-2xl lg:rounded-3xl backdrop-blur-md border border-blue-500/30 shadow-[0_0_30px_rgba(37,99,235,0.4)] sm:shadow-[0_0_50px_rgba(37,99,235,0.4)] flex items-center justify-center">
            <FaLinkedin className="w-full h-full text-blue-500" />
          </div>
        </div>

        {/* TikTok Logo - Bottom Left */}
        <div className="absolute bottom-[25%] left-[3%] sm:left-[5%] lg:left-[10%] w-14 sm:w-20 lg:w-24 h-14 sm:h-20 lg:h-24 animate-dance-left delay-700">
          <div className="relative w-full h-full p-3 sm:p-4 lg:p-5 bg-gradient-to-br from-cyan-400/25 to-pink-500/15 rounded-2xl lg:rounded-3xl backdrop-blur-md border border-cyan-400/30 shadow-[0_0_30px_rgba(34,211,238,0.4)] sm:shadow-[0_0_45px_rgba(34,211,238,0.4)] flex items-center justify-center">
            <FaTiktok className="w-full h-full text-cyan-400" />
          </div>
        </div>

        {/* Meta Logo - Bottom Right */}
        <div className="absolute bottom-[20%] right-[3%] sm:right-[5%] lg:right-[8%] w-14 sm:w-20 lg:w-24 h-14 sm:h-20 lg:h-24 animate-dance-right delay-300">
          <div className="relative w-full h-full p-3 sm:p-4 lg:p-5 bg-gradient-to-br from-blue-500/25 to-blue-600/15 rounded-2xl lg:rounded-3xl backdrop-blur-md border border-blue-400/30 shadow-[0_0_30px_rgba(59,130,246,0.4)] sm:shadow-[0_0_45px_rgba(59,130,246,0.4)] flex items-center justify-center">
            <FaMeta className="w-full h-full text-blue-400" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[87.5rem] mx-auto px-4 sm:px-6 lg:px-[clamp(1.25rem,4vw,3.75rem)] pb-16 sm:pb-24">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge - Custom hexagon shape */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-2.5 glass border border-brand-cyan/30 mb-6 sm:mb-8 backdrop-blur-md relative max-w-[90vw]"
            style={{
              clipPath: 'polygon(8% 0%, 92% 0%, 100% 50%, 92% 100%, 8% 100%, 0% 50%)'
            }}
          >
            <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse flex-shrink-0" />
            <span className="text-xs sm:text-sm text-brand-white/80 font-medium whitespace-nowrap">
              <span className="hidden sm:inline">Digital Marketing Excellence Since 2019</span>
              <span className="sm:hidden">Excellence Since 2019</span>
            </span>
          </motion.div>

          {/* Main Headline - Animated */}
          <h1 className="font-heading font-bold mb-6 leading-tight" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block"
            >
              Transforming{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="gradient-text inline-block"
            >
              Visions
            </motion.span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              ,
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="inline-block"
            >
              Driving{' '}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="text-brand-cyan inline-block"
            >
              Results
            </motion.span>
          </h1>

          {/* Subheadline - Short & Punchy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="text-brand-white/70 mb-10 leading-relaxed max-w-2xl mx-auto"
            style={{ fontSize: 'clamp(1.125rem, 2vw, 1.5rem)' }}
          >
            Smart Strategy. Creative Excellence. Measurable Growth.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center px-4"
          >
            {/* Primary CTA */}
            <Link
              href="/contact"
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-brand-orange text-brand-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,107,53,0.5)] text-center"
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-sm sm:text-base">
                <span className="hidden sm:inline">Unleash Your Potential</span>
                <span className="sm:hidden">Get Started</span>
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-orange to-[#FF8C42] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="/about"
              className="group px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-brand-white font-semibold rounded-full border-2 border-brand-cyan/50 hover:border-brand-cyan hover:bg-brand-cyan/10 transition-all duration-300 backdrop-blur-sm text-center"
            >
              <span className="flex items-center justify-center gap-2 text-sm sm:text-base">
                Learn More
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:rotate-90"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </Link>
          </motion.div>

          {/* Stats Pills - Perfect Fit */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6"
          >
            <div className="glass px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-brand-cyan/20 backdrop-blur-md flex items-center justify-center gap-1.5 sm:gap-2 min-w-[100px] sm:min-w-[120px]">
              <span className="text-brand-cyan font-bold text-base sm:text-lg md:text-xl leading-none">5+</span>
              <span className="text-brand-white/60 text-[11px] sm:text-xs md:text-sm leading-none">Years</span>
            </div>
            <div className="glass px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-brand-cyan/20 backdrop-blur-md flex items-center justify-center gap-1.5 sm:gap-2 min-w-[110px] sm:min-w-[130px]">
              <span className="text-brand-orange font-bold text-base sm:text-lg md:text-xl leading-none">100+</span>
              <span className="text-brand-white/60 text-[11px] sm:text-xs md:text-sm leading-none">Clients</span>
            </div>
            <div className="glass px-4 sm:px-5 py-2.5 sm:py-3 rounded-full border border-brand-cyan/20 backdrop-blur-md flex items-center justify-center gap-1.5 sm:gap-2 min-w-[110px] sm:min-w-[130px]">
              <span className="text-brand-cyan font-bold text-base sm:text-lg md:text-xl leading-none">500+</span>
              <span className="text-brand-white/60 text-[11px] sm:text-xs md:text-sm leading-none">Projects</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator - Hidden on small mobile */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="hidden sm:flex absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-brand-white/40 text-[10px] sm:text-xs uppercase tracking-wider">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-5 sm:w-6 h-8 sm:h-10 border-2 border-brand-cyan/30 rounded-full flex items-start justify-center p-1.5 sm:p-2"
          >
            <div className="w-0.5 sm:w-1 h-1.5 sm:h-2 bg-brand-cyan rounded-full" />
          </motion.div>
        </div>
      </motion.div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        @keyframes dance-left {
          0%, 100% { transform: translateY(0px) rotate(-20deg); }
          50% { transform: translateY(-25px) rotate(20deg); }
        }
        @keyframes dance-right {
          0%, 100% { transform: translateY(0px) rotate(20deg); }
          50% { transform: translateY(-25px) rotate(-20deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.4; }
          50% { opacity: 0.6; }
        }
        .animate-dance-left {
          animation: dance-left 7s ease-in-out infinite;
        }
        .animate-dance-right {
          animation: dance-right 7s ease-in-out infinite;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-700 {
          animation-delay: 0.7s;
        }
        .delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
}
