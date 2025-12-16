'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { ContactFormData, FormStatus } from '@/lib/types';
import { CheckCircle2, Send, Clock, ShieldCheck } from 'lucide-react';
import { sendEmail } from '@/app/actions';

const benefits = [
  { icon: Clock, text: '24-hour response time' },
  { icon: ShieldCheck, text: 'NDA available on request' },
  { icon: CheckCircle2, text: 'Free initial consultation' },
];

export default function StartProjectPage() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const result = await sendEmail(formData);

    if (result.success) {
      setStatus('success');
      setFormData({ name: '', email: '', company: '', service: '', message: '' });
    } else {
      setStatus('error');
      setErrorMessage(result.message || 'Something went wrong');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <>
      {/* Hero Section - Dark */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-blob" />
          <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight">
              Start Your <span className="text-primary">Project</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              Ready to grow? Tell us about your vision and let's build something extraordinary.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section - Light for Usability */}
      <Section background="primary">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Benefits / Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 tracking-tight leading-tight">
                What to Expect
              </h2>
              <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                We're not just a vendor; we're your specific growth partner. Fill out the form, and our strategists will review your goals before our first call.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-gray-50 border border-gray-100"
                >
                  <div className="p-2 bg-white rounded-full shadow-sm text-primary">
                    <benefit.icon size={20} />
                  </div>
                  <span className="text-slate-700 font-medium">{benefit.text}</span>
                </motion.div>
              ))}
            </div>

            <div className="p-6 rounded-xl bg-slate-900 text-white shadow-xl mt-8">
              <h4 className="font-bold mb-2 text-lg">Direct Contact</h4>
              <p className="text-gray-400 mb-1">hello@narratv.space</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
          </motion.div>

          {/* Project Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="p-8 md:p-10 rounded-3xl bg-white shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />

              <h3 className="text-2xl font-bold mb-8 text-slate-900 tracking-tight relative z-10">
                Project Details
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder-gray-400"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder-gray-400"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 placeholder-gray-400"
                    placeholder="Company Ltd"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                    Service Required *
                  </label>
                  <div className="relative">
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 appearance-none"
                    >
                      <option value="">Select a service...</option>
                      <option value="branding">Branding & Identity</option>
                      <option value="creative-strategy">Creative Strategy</option>
                      <option value="ad-campaigns">Ad Campaigns</option>
                      <option value="digital-marketing">Digital Performance Marketing</option>
                      <option value="video-production">Video Production</option>
                      <option value="web-development">Web Design & Dev</option>
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Description *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 text-slate-900 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none placeholder-gray-400"
                    placeholder="Tell us about your project goals, timeline, and budget..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  fullWidth
                  disabled={status === 'submitting'}
                  className="shadow-xl shadow-primary/20 hover:scale-[1.02] transform transition-all"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Send Project Request <Send size={18} />
                    </span>
                  )}
                </Button>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-50 border border-green-200 text-green-800"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="text-green-600" size={24} />
                      <div>
                        <p className="font-bold">Request Sent Successfully!</p>
                        <p className="text-sm">We'll be in touch within 24 hours.</p>
                      </div>
                    </div>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-800"
                  >
                    <p className="font-bold">Error Sending Request</p>
                    <p className="text-sm">{errorMessage}</p>
                  </motion.div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}