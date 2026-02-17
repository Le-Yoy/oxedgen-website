'use client';

import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';

const services = [
  {
    id: 1,
    title: "Ads That Print Money",
    subtitle: "Paid Advertising",
    description: "We run Meta, Google, and TikTok ads that actually convert. No vanity metrics—just ROI.",
    deliverables: [
      "Campaign strategy & setup",
      "Creative testing (we find what works)",
      "Daily optimization & scaling",
      "Weekly performance reports"
    ],
    stat: "Avg. 4.2x ROAS",
    timeline: "Results in 14-30 days",
    notForYou: "You have less than $1k/month ad budget",
    color: "from-brand-orange to-red-500"
  },
  {
    id: 2,
    title: "SEO That Actually Ranks",
    subtitle: "Search Engine Optimization",
    description: "No keyword stuffing. We build topical authority and earn links that Google actually respects.",
    deliverables: [
      "Technical SEO audit & fixes",
      "Content strategy (topics that convert)",
      "White-hat link building",
      "Monthly ranking reports"
    ],
    stat: "Avg. 240% organic growth",
    timeline: "4-6 months to page 1",
    notForYou: "You want instant results",
    color: "from-brand-cyan to-blue-500"
  },
  {
    id: 3,
    title: "Brands That Stick",
    subtitle: "Brand Strategy",
    description: "We craft identities that people remember. Logo, voice, positioning—the whole package.",
    deliverables: [
      "Brand strategy workshop",
      "Visual identity system",
      "Messaging framework",
      "Brand guidelines doc"
    ],
    stat: "3-week delivery",
    timeline: "Done in 21 days",
    notForYou: "You just need a quick logo",
    color: "from-purple-500 to-pink-500"
  },
  {
    id: 4,
    title: "Sites That Convert",
    subtitle: "Web Development",
    description: "Fast, beautiful, conversion-optimized. Like this one. Custom code, not WordPress templates.",
    deliverables: [
      "Custom Next.js development",
      "Mobile-first responsive design",
      "Performance optimization (<2s load)",
      "Analytics integration"
    ],
    stat: "90+ Lighthouse score",
    timeline: "4-6 week builds",
    notForYou: "You need it done tomorrow",
    color: "from-brand-orange to-yellow-500"
  },
  {
    id: 5,
    title: "Social That Doesn't Suck",
    subtitle: "Social Media Management",
    description: "Content that stops the scroll. Strategy-first, not just posting for the sake of posting.",
    deliverables: [
      "Content calendar & strategy",
      "Copywriting + design",
      "Community management",
      "Monthly growth reports"
    ],
    stat: "Avg. 180% engagement boost",
    timeline: "Week-to-week sprints",
    notForYou: "You just want someone to repost memes",
    color: "from-pink-500 to-red-500"
  },
  {
    id: 6,
    title: "Emails That Get Opened",
    subtitle: "Email Marketing",
    description: "Sequences that nurture and convert. Not spam—actual value that builds relationships.",
    deliverables: [
      "Email strategy & segmentation",
      "Automated sequence setup",
      "A/B testing & optimization",
      "Performance tracking"
    ],
    stat: "35%+ open rates",
    timeline: "2-week setup + ongoing",
    notForYou: "You don't have a list yet",
    color: "from-brand-cyan to-green-500"
  },
  {
    id: 7,
    title: "Data That Makes Sense",
    subtitle: "Analytics & Tracking",
    description: "We set up tracking that actually tells you what's working. No more guessing.",
    deliverables: [
      "GA4 + pixel implementation",
      "Custom dashboard setup",
      "Conversion tracking",
      "Monthly insights reports"
    ],
    stat: "100% data accuracy",
    timeline: "1-week implementation",
    notForYou: "You're happy with vanity metrics",
    color: "from-purple-500 to-brand-cyan"
  }
];

export default function ServicesSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const nextService = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  const goToService = (index: number) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-32 overflow-hidden bg-brand-navy"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(66, 189, 239, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-40 -right-40 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-40 w-96 h-96 bg-brand-cyan/20 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-[87.5rem] mx-auto px-4 sm:px-6 lg:px-[clamp(1.25rem,4vw,3.75rem)]">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-brand-orange/20 to-brand-cyan/20 border border-brand-orange/30 text-brand-orange text-sm font-semibold backdrop-blur-md">
              The Work Deck
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-brand-white">What We </span>
            <span className="gradient-text">Actually Do</span>
          </h2>
          <p className="text-brand-white/70 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Seven ways we help brands grow. No fluff, just what you'll get and how long it takes.
          </p>
        </motion.div>

        {/* Card Deck */}
        <div className="relative max-w-4xl mx-auto">
          {/* Desktop: Stacked Cards */}
          <div className="hidden md:block relative h-[600px]">
            <AnimatePresence mode="wait" custom={direction}>
              {services.map((service, index) => {
                const offset = index - activeIndex;
                const isActive = index === activeIndex;
                const isVisible = Math.abs(offset) <= 2;

                if (!isVisible) return null;

                return (
                  <motion.div
                    key={service.id}
                    custom={direction}
                    initial={{ opacity: 0, scale: 0.8, rotateY: direction * 90 }}
                    animate={{
                      opacity: isActive ? 1 : 0.4,
                      scale: isActive ? 1 : 0.9 - Math.abs(offset) * 0.05,
                      rotateY: 0,
                      x: offset * 30,
                      y: Math.abs(offset) * 20,
                      z: -Math.abs(offset) * 100,
                      zIndex: services.length - Math.abs(offset)
                    }}
                    exit={{ opacity: 0, scale: 0.8, rotateY: -direction * 90 }}
                    transition={{ duration: 0.5, ease: 'easeInOut' }}
                    className="absolute inset-0 cursor-pointer"
                    style={{ transformStyle: 'preserve-3d' }}
                    onClick={() => !isActive && goToService(index)}
                  >
                    <ServiceCard service={service} isActive={isActive} />
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Mobile: Single Card with Swipe */}
          <div className="md:hidden">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={activeIndex}
                custom={direction}
                initial={{ opacity: 0, x: direction * 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 100 }}
                transition={{ duration: 0.3 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  if (offset.x > 100 || velocity.x > 500) {
                    prevService();
                  } else if (offset.x < -100 || velocity.x < -500) {
                    nextService();
                  }
                }}
              >
                <ServiceCard service={services[activeIndex]} isActive={true} />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevService}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-brand-white hover:bg-white/10 hover:border-brand-cyan/30 transition-all duration-300"
              aria-label="Previous service"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToService(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === activeIndex
                      ? 'w-8 bg-brand-orange'
                      : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to service ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextService}
              className="p-3 rounded-full bg-white/5 border border-white/10 text-brand-white hover:bg-white/10 hover:border-brand-cyan/30 transition-all duration-300"
              aria-label="Next service"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Counter */}
          <div className="text-center mt-6">
            <span className="text-brand-white/50 text-sm">
              {activeIndex + 1} / {services.length}
            </span>
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-cyan to-brand-orange rounded-full font-semibold text-brand-white hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(66,189,239,0.3)]"
          >
            Let's Build Something
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function ServiceCard({ service, isActive }: { service: typeof services[0]; isActive: boolean }) {
  return (
    <div className="relative h-full">
      {/* Card Background - Fully opaque solid background */}
      <div className={`absolute inset-0 rounded-3xl border ${
        isActive
          ? 'bg-gradient-to-br from-brand-darkGray via-[#1a2730] to-brand-navy border-brand-cyan/30 shadow-[0_0_40px_rgba(66,189,239,0.2)]'
          : 'bg-gradient-to-br from-brand-darkGray to-brand-navy border-white/10'
      }`} />

      {/* Gradient Accent */}
      <div className={`absolute top-0 left-0 right-0 h-1 rounded-t-3xl bg-gradient-to-r ${service.color} ${!isActive && 'opacity-30'}`} />

      {/* Content */}
      <div className="relative p-8 sm:p-10 h-full flex flex-col">
        {/* Icon */}
        <div className="mb-6">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} opacity-20 flex items-center justify-center`}>
            <ServiceIcon type={service.subtitle} />
          </div>
        </div>

        {/* Title */}
        <div className="mb-4">
          <h3 className="text-3xl sm:text-4xl font-bold text-brand-white mb-2">
            {service.title}
          </h3>
          <p className="text-brand-white/50 text-sm uppercase tracking-wider">
            {service.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-brand-white/70 text-lg mb-6 leading-relaxed">
          {service.description}
        </p>

        {/* Deliverables */}
        <div className="mb-6">
          <h4 className="text-brand-white font-semibold mb-3 text-sm uppercase tracking-wider">
            What You Get:
          </h4>
          <ul className="space-y-2">
            {service.deliverables.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-brand-white/70 text-sm">
                <svg className="w-5 h-5 text-brand-cyan flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <p className="text-brand-cyan font-bold text-lg">{service.stat}</p>
            <p className="text-brand-white/50 text-xs">Performance</p>
          </div>
          <div className="p-3 rounded-xl bg-white/5 border border-white/10">
            <p className="text-brand-orange font-bold text-lg">{service.timeline}</p>
            <p className="text-brand-white/50 text-xs">Timeline</p>
          </div>
        </div>

        {/* Not For You */}
        <div className="mt-auto pt-4 border-t border-white/10">
          <p className="text-brand-white/40 text-sm">
            <span className="text-brand-orange font-semibold">Not for you if: </span>
            {service.notForYou}
          </p>
        </div>
      </div>
    </div>
  );
}

function ServiceIcon({ type }: { type: string }) {
  const icons: Record<string, JSX.Element> = {
    'Paid Advertising': (
      <svg className="w-8 h-8 text-white" viewBox="0 0 32 32" fill="none">
        <path d="M16 8L20 16L16 24L12 16L16 8Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
        <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="2" />
        <path d="M16 6V10M16 22V26M6 16H10M22 16H26" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    'Search Engine Optimization': (
      <svg className="w-8 h-8 text-white" viewBox="0 0 32 32" fill="none">
        <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="2" />
        <path d="M20 20L26 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 14H18M14 10V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    'Brand Strategy': (
      <svg className="w-8 h-8 text-white" viewBox="0 0 32 32" fill="none">
        <path d="M16 4L6 10V16C6 22 16 28 16 28C16 28 26 22 26 16V10L16 4Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
        <path d="M12 16L15 19L21 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    'Web Development': (
      <svg className="w-8 h-8 text-white" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="6" width="24" height="20" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M4 11H28" stroke="currentColor" strokeWidth="2" />
        <path d="M11 16L14 19L11 22M17 22H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    'Social Media Management': (
      <svg className="w-8 h-8 text-white" viewBox="0 0 32 32" fill="none">
        <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="22" cy="10" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="16" cy="22" r="4" stroke="currentColor" strokeWidth="2" />
        <path d="M13 12L13 20M19 12L19 20" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    'Email Marketing': (
      <svg className="w-8 h-8 text-white" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M4 10L16 18L28 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    'Analytics & Tracking': (
      <svg className="w-8 h-8 text-white" viewBox="0 0 32 32" fill="none">
        <path d="M6 26V18M12 26V12M18 26V16M24 26V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path d="M6 16L12 10L18 14L24 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  };

  return icons[type] || icons['Paid Advertising'];
}
