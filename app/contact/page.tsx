'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { Mail, Phone, MapPin } from 'lucide-react';
import { formatPhone } from '@/lib/utils';
import { ContactFormData, FormStatus } from '@/lib/types';

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-background-secondary">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-text-primary tracking-tight leading-[1.05]">
              Get in Touch
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary font-light leading-relaxed">
              Let's start a conversation about your brand story
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary tracking-tight leading-tight">
                Contact Information
              </h2>
              <p className="text-text-secondary mb-8 font-light text-lg leading-relaxed">
                Reach out to us and let's discuss how we can help tell your brand story.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-background-elevated">
                  <Mail className="text-primary" style={{ width: '24px', height: '24px' }} />
                </div>
                <div>
                  <div className="font-medium text-text-primary mb-1">Email</div>
                  <a
                    href="mailto:hello@narratv.co"
                    className="text-text-secondary hover:text-primary transition-colors duration-300"
                  >
                    hello@narratv.co
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-background-elevated">
                  <Phone className="text-primary" style={{ width: '24px', height: '24px' }} />
                </div>
                <div>
                  <div className="font-medium text-text-primary mb-1">Phone & WhatsApp</div>
                  <a
                    href="tel:+918714531301"
                    className="text-text-secondary hover:text-primary transition-colors duration-300"
                  >
                    {formatPhone('+918714531301')}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-lg bg-background-elevated">
                  <MapPin className="text-primary" style={{ width: '24px', height: '24px' }} />
                </div>
                <div>
                  <div className="font-medium text-text-primary mb-1">Address</div>
                  <p className="text-text-secondary">
                    KINFRA Advanced Technology Park<br />
                    Calicut
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background-elevated border border-subtle-border text-text-primary focus:border-primary focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-background-elevated border border-subtle-border text-text-primary focus:border-primary focus:outline-none transition-colors duration-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                  Phone / WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background-elevated border border-subtle-border text-text-primary focus:border-primary focus:outline-none transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background-elevated border border-subtle-border text-text-primary focus:border-primary focus:outline-none transition-colors duration-300"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-text-primary mb-2">
                  Service Interested In
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background-elevated border border-subtle-border text-text-primary focus:border-primary focus:outline-none transition-colors duration-300"
                >
                  <option value="">Select a service</option>
                  <option value="branding">Branding & Identity</option>
                  <option value="creative-strategy">Creative Strategy</option>
                  <option value="ad-campaigns">Ad Campaigns</option>
                  <option value="digital-marketing">Digital Performance Marketing</option>
                  <option value="video-production">Video Production</option>
                  <option value="content-creation">Content Creation</option>
                  <option value="ai-video">AI Video Production</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-background-elevated border border-subtle-border text-text-primary focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                fullWidth
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </Button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-lg bg-primary/10 border border-primary/20 text-primary text-center"
                >
                  Thank you! We'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </Section >
    </>
  );
}