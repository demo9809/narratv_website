'use client';

import { motion } from 'framer-motion';
import Section from '@/components/ui/Section';
import ServiceCard from '@/components/ui/ServiceCard';
import { services } from '@/lib/data';
import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-slate-900 text-white">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Comprehensive <span className="text-primary">Capabilities.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light leading-relaxed max-w-2xl">
              From strategic foundations to execution at scale, we provide the full stack of storytelling services your brand needs to thrive.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <Section background="primary">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </Section>

      {/* Philosophy Section */}
      <Section background="secondary" className="border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Why Our Approach Works
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Strategy First</h3>
                <p className="text-gray-600">We don't just make things pretty. We build creative solutions on a foundation of data and market insights.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Narrative Led</h3>
                <p className="text-gray-600">Humans are wired for stories. We ensure your brand narrative is consistent across every channel and touchpoint.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Execution Obsessed</h3>
                <p className="text-gray-600">Great strategy is nothing without flawless execution. We sweat the small stuff so you don't have to.</p>
              </div>
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {/* Placeholder for methodology image */}
            <div className="absolute inset-0 bg-slate-200 flex items-center justify-center">
              <span className="text-slate-400 font-medium">Methodology Visualization</span>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="dark" className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Ready to Build Something Great?
          </h2>
          <p className="text-xl text-gray-400 mb-10 font-light leading-relaxed">
            Let's discuss how we can elevate your brand through strategic storytelling.
          </p>
          <Link href="/start-project">
            <Button variant="primary" size="lg">Start a Project</Button>
          </Link>
        </motion.div>
      </Section>
    </>
  );
}