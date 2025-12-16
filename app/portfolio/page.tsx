'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import { caseStudies } from '@/lib/data';
import { CaseStudyCategory } from '@/lib/types';
import { ArrowRight } from 'lucide-react';

const categories: { value: CaseStudyCategory; label: string }[] = [
  { value: 'all', label: 'All Projects' },
  { value: 'branding', label: 'Branding' },
  { value: 'video', label: 'Video Production' },
  { value: 'campaigns', label: 'Ad Campaigns' },
  { value: 'digital', label: 'Digital Marketing' },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState<CaseStudyCategory>('all');

  const filteredCaseStudies = activeCategory === 'all'
    ? caseStudies
    : caseStudies.filter(cs => cs.category.includes(activeCategory));

  return (
    <>
      {/* Hero Section - Dark */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[400px] h-[400px] bg-primary/20 rounded-full blur-[100px] animate-blob" />
          <div className="absolute bottom-[10%] left-[10%] w-[300px] h-[300px] bg-secondary/20 rounded-full blur-[80px] animate-blob animation-delay-2000" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight">
              Our <span className="text-primary">Work</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              Stories that made an impact. Explore our portfolio of successful brand narratives and creative campaigns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter & Portfolio Grid - Light Theme */}
      <Section background="primary" className="pt-16">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${activeCategory === category.value
                  ? 'bg-slate-900 border-slate-900 text-white shadow-lg'
                  : 'bg-white border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300'
                }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {filteredCaseStudies.map((caseStudy, index) => (
            <motion.div
              layout
              key={caseStudy.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className={`group ${index % 2 !== 0 ? 'md:translate-y-16' : ''}`}
            >
              <Link href={`/portfolio/${caseStudy.slug}`}>
                <div className="relative overflow-hidden rounded-2xl aspect-[16/10] mb-6 shadow-sm hover:shadow-2xl transition-all duration-500">
                  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  <img
                    src={caseStudy.thumbnail}
                    alt={`${caseStudy.title} case study`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 scale-0 group-hover:scale-100 transition-transform duration-300">
                      <ArrowRight className="text-white w-8 h-8 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                    </div>
                  </div>
                </div>

                <div>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {caseStudy.category.slice(0, 3).map((cat) => (
                      <span
                        key={cat}
                        className="px-2.5 py-1 text-[11px] uppercase tracking-wider font-bold text-gray-500 bg-gray-100 rounded-md"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {caseStudy.title}
                  </h3>
                  <p className="text-gray-500 text-lg font-light">{caseStudy.client}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom spacer for offset grid */}
        <div className="h-20 hidden md:block"></div>
      </Section>
    </>
  );
}