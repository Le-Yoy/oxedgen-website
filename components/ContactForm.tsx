'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement Airtable integration
    console.log('Form submitted:', formData);
    alert('Form submission - Airtable integration pending');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          required
          className="w-full px-4 py-3 bg-brand-navy/50 border border-brand-cyan/20 rounded-lg focus:outline-none focus:border-brand-cyan transition-colors"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-2">
          Email *
        </label>
        <input
          type="email"
          id="email"
          required
          className="w-full px-4 py-3 bg-brand-navy/50 border border-brand-cyan/20 rounded-lg focus:outline-none focus:border-brand-cyan transition-colors"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium mb-2">
          Company Name *
        </label>
        <input
          type="text"
          id="company"
          required
          className="w-full px-4 py-3 bg-brand-navy/50 border border-brand-cyan/20 rounded-lg focus:outline-none focus:border-brand-cyan transition-colors"
          value={formData.company}
          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium mb-2">
          Phone (optional)
        </label>
        <input
          type="tel"
          id="phone"
          className="w-full px-4 py-3 bg-brand-navy/50 border border-brand-cyan/20 rounded-lg focus:outline-none focus:border-brand-cyan transition-colors"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2">
          Message *
        </label>
        <textarea
          id="message"
          required
          rows={6}
          className="w-full px-4 py-3 bg-brand-navy/50 border border-brand-cyan/20 rounded-lg focus:outline-none focus:border-brand-cyan transition-colors resize-none"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-brand-cyan text-brand-white py-4 rounded-lg font-semibold hover:bg-brand-cyan/80 transition-all duration-300"
      >
        Send Message
      </button>
    </form>
  );
}
