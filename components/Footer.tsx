'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaLinkedin, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa6';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-brand-navy via-brand-darkGray to-black border-t border-brand-cyan/20 text-brand-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(66, 189, 239, 0.2) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-cyan/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-[87.5rem] mx-auto px-4 sm:px-6 lg:px-[clamp(1.25rem,4vw,3.75rem)] py-12 sm:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo.png"
                alt="OXEDGEN"
                width={150}
                height={40}
                className="h-8 w-auto hover:opacity-80 transition-opacity"
              />
            </Link>
            <p className="text-brand-white/60 text-sm leading-relaxed mb-4">
              Digital marketing that delivers. Based in Rabat, working with brands worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/company/oxedgen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-cyan/20 hover:border-brand-cyan/30 transition-all duration-300 group"
              >
                <FaLinkedin className="w-5 h-5 text-brand-white/60 group-hover:text-brand-cyan transition-colors" />
              </a>
              <a
                href="https://instagram.com/oxedgen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-orange/20 hover:border-brand-orange/30 transition-all duration-300 group"
              >
                <FaInstagram className="w-5 h-5 text-brand-white/60 group-hover:text-brand-orange transition-colors" />
              </a>
              <a
                href="https://facebook.com/oxedgen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300 group"
              >
                <FaFacebook className="w-5 h-5 text-brand-white/60 group-hover:text-blue-500 transition-colors" />
              </a>
              <a
                href="https://twitter.com/oxedgen"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-cyan/20 hover:border-brand-cyan/30 transition-all duration-300 group"
              >
                <FaTwitter className="w-5 h-5 text-brand-white/60 group-hover:text-brand-cyan transition-colors" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="text-brand-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/services/paid-ads" className="text-brand-white/60 hover:text-brand-cyan transition-colors text-sm inline-flex items-center gap-1 group">
                  <span className="w-1 h-1 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                  Paid Advertising
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-brand-white/60 hover:text-brand-cyan transition-colors text-sm inline-flex items-center gap-1 group">
                  <span className="w-1 h-1 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                  SEO & Content
                </Link>
              </li>
              <li>
                <Link href="/services/branding" className="text-brand-white/60 hover:text-brand-cyan transition-colors text-sm inline-flex items-center gap-1 group">
                  <span className="w-1 h-1 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                  Brand Strategy
                </Link>
              </li>
              <li>
                <Link href="/services/web-dev" className="text-brand-white/60 hover:text-brand-cyan transition-colors text-sm inline-flex items-center gap-1 group">
                  <span className="w-1 h-1 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services/social" className="text-brand-white/60 hover:text-brand-cyan transition-colors text-sm inline-flex items-center gap-1 group">
                  <span className="w-1 h-1 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                  Social Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-brand-white font-semibold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-2.5">
              <li>
                <Link href="/about" className="text-brand-white/60 hover:text-brand-cyan transition-colors text-sm inline-flex items-center gap-1 group">
                  <span className="w-1 h-1 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-brand-white/60 hover:text-brand-cyan transition-colors text-sm inline-flex items-center gap-1 group">
                  <span className="w-1 h-1 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-brand-white/60 hover:text-brand-cyan transition-colors text-sm inline-flex items-center gap-1 group">
                  <span className="w-1 h-1 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-brand-white/60 hover:text-brand-cyan transition-colors text-sm inline-flex items-center gap-1 group">
                  <span className="w-1 h-1 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-brand-white/60 hover:text-brand-cyan transition-colors text-sm inline-flex items-center gap-1 group">
                  <span className="w-1 h-1 rounded-full bg-brand-orange opacity-0 group-hover:opacity-100 transition-opacity" />
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-brand-white font-semibold mb-4 text-sm uppercase tracking-wider">Get in Touch</h3>
            <ul className="space-y-2.5 text-sm">
              <li className="text-brand-white/60">
                <span className="text-brand-cyan">Email:</span>
                <br />
                <a href="mailto:info@oxedgen.com" className="hover:text-brand-cyan transition-colors">
                  info@oxedgen.com
                </a>
              </li>
              <li className="text-brand-white/60">
                <span className="text-brand-cyan">Phone:</span>
                <br />
                <a href="tel:+212661427413" className="hover:text-brand-cyan transition-colors">
                  +212 6 61 42 74 13
                </a>
              </li>
              <li className="text-brand-white/60">
                <span className="text-brand-cyan">Location:</span>
                <br />
                Rabat, Morocco
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
            <p className="text-brand-white/50">
              &copy; {currentYear} OXEDGEN. All rights reserved.
            </p>

            {/* Built by Section */}
            <div className="flex items-center gap-2">
              <span className="text-brand-white/40">Crafted with precision by</span>
              <a
                href="https://www.linkedin.com/in/houssam-boutaleb-677a9723b/"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-brand-cyan/10 to-brand-orange/10 border border-brand-cyan/20 hover:border-brand-cyan/40 transition-all duration-300"
              >
                <span className="font-semibold gradient-text">Houssam Boutaleb</span>
                <FaLinkedin className="w-4 h-4 text-brand-cyan group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
