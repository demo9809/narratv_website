'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import ServiceCard from '@/components/ui/ServiceCard';
import { services, stats, testimonials, caseStudies } from '@/lib/data';
import { ArrowRight, Star, ChevronRight, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Dark Theme for Impact */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900 pt-20">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] animate-blob" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-blob animation-delay-4000" />
        </div>

        <div className="relative z-10 container-custom text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <span className="inline-block py-2 px-4 rounded-full bg-white/10 border border-white/10 text-white text-sm font-medium mb-8 backdrop-blur-sm">
              The Digital Storytelling Agency
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 text-white leading-[1.1] tracking-tight">
              Crafting Brands That <br />
              <span className="text-primary">Defy Gravity.</span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          >
            We blend strategic thinking with cinematic visuals to create digital experiences that resonate, inspire, and convert.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link href="/start-project">
              <Button size="lg" variant="primary" className="shadow-xl shadow-primary/20">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline" className="text-white border-white/20 hover:bg-white/10">
                View Our Work
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Light Theme for Readability */}
      <Section background="primary" className="border-b border-gray-100">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-bold text-slate-900 mb-2 font-heading">
                {stat.value}{stat.suffix}
              </div>
              <div className="text-gray-500 font-medium tracking-wide text-sm uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Services Section - Light Theme */}
      <Section background="secondary">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900">
            Comprehensive Expertise
          </h2>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            From brand identity to performance marketing, we provide the full stack of services needed to scale in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.slice(0, 6).map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>

        <div className="text-center mt-16">
          <Link href="/services">
            <Button variant="outline" size="lg">View All Services</Button>
          </Link>
        </div>
      </Section>

      {/* Featured Works - Light Theme */}
      <Section background="primary">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-2xl">
            <span className="text-primary font-bold tracking-wider uppercase mb-3 block text-sm">Selected Works</span>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Recent Case Studies</h2>
            <p className="text-gray-600 text-lg">Real results for ambitious brands.</p>
          </div>
          <Link href="/portfolio" className="hidden md:block">
            <Button variant="outline">View All Projects <ArrowRight className="ml-2 w-4 h-4" /></Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {caseStudies.slice(0, 4).map((caseStudy, index) => (
            <motion.div
              key={caseStudy.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link href={`/portfolio/${caseStudy.slug}`}>
                <div className="relative overflow-hidden rounded-2xl aspect-[16/10] mb-6 shadow-sm hover:shadow-xl transition-all duration-300">
                  <img
                    src={caseStudy.thumbnail}
                    alt={caseStudy.title}
                    className="object-cover w-full h-full transform transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                </div>
                <div>
                  <div className="flex gap-3 mb-3">
                    {caseStudy.category.slice(0, 2).map(cat => (
                      <span key={cat} className="text-xs font-semibold uppercase tracking-wider text-primary bg-primary/5 px-2 py-1 rounded-md">
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors">{caseStudy.title}</h3>
                  <p className="text-gray-500">{caseStudy.client}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Link href="/portfolio">
            <Button variant="outline" className="w-full">View All Projects</Button>
          </Link>
        </div>
      </Section>

      {/* Why Choose Us - Dark Theme Break */}
      <Section background="dark">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Narratv?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed font-light">
              We don't just execute tasks; we act as strategic partners invested in your growth. Our approach combines data-driven insights with world-class creativity.
            </p>
            <div className="space-y-4">
              {[
                "Data-Driven Creative Strategy",
                "Full-Funnel Marketing Solutions",
                "Award-Winning Design Team",
                "Transparent ROI Reporting"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-6 h-6" />
                  <span className="text-white text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] bg-slate-800 rounded-2xl overflow-hidden border border-white/10">
            {/* Placeholder for agency culture/team image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
              Agency Visual / Showreel Overlay
            </div>
          </div>
        </div>
      </Section>

      {/* Testimonials - Light Theme */}
      <Section background="secondary">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">Client Stories</h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">Don't just take our word for it.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="text-amber-400 mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-slate-600 text-sm">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{testimonial.author}</div>
                  <div className="text-gray-500 text-xs">{testimonial.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Final CTA */}
      <section className="relative py-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">Ready to launch?</h2>
          <p className="text-xl text-indigo-100 mb-10 max-w-2xl mx-auto font-medium">
            Let's build something extraordinary together. Schedule your free consultation today.
          </p>
          <Link href="/start-project">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-2xl scale-110 border-none">
              Start Your Project Now
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}