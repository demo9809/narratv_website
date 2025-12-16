'use client';

import { use } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { getCaseStudyBySlug } from '@/lib/data';
import { ArrowRight, Quote, CheckCircle2 } from 'lucide-react';

export default function CaseStudyDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-0 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 bg-deep-space">
          <div className="absolute top-[-20%] left-[20%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-blob" />
          <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[80px] animate-blob animation-delay-2000" />
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              {caseStudy.category.map((cat) => (
                <span
                  key={cat}
                  className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-primary text-sm font-medium backdrop-blur-sm"
                >
                  {cat}
                </span>
              ))}
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white tracking-tight">
              {caseStudy.title}
            </h1>

            <p className="text-2xl text-gray-400 font-light">
              {caseStudy.client}
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10"
          >
            <div className="aspect-[16/9]">
              <img
                src={caseStudy.thumbnail}
                alt={caseStudy.title}
                className="w-full h-full object-cover"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">
              The Challenge
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              {caseStudy.challenge}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Strategy Section */}
      <Section background="secondary">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">
              Our Strategy
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              {caseStudy.strategy}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Execution Section */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">
              Execution
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed font-light">
              {caseStudy.execution}
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Results Section */}
      <Section background="secondary">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-white tracking-tight">
              The Results
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.results.map((result, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start space-x-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-colors"
                >
                  <CheckCircle2
                    className="text-primary flex-shrink-0 mt-1"
                    size={24}
                  />
                  <p className="text-gray-300 leading-relaxed font-medium">
                    {result}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Testimonial Section */}
      {caseStudy.testimonial && (
        <Section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="p-12 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10">
              <Quote className="text-primary mb-6" size={48} />

              <p className="text-2xl text-white mb-8 leading-relaxed font-light">
                "{caseStudy.testimonial.quote}"
              </p>

              <div className="flex items-center space-x-4">
                {caseStudy.testimonial.avatar && (
                  <img
                    src={caseStudy.testimonial.avatar}
                    alt={caseStudy.testimonial.author}
                    className="w-16 h-16 rounded-full border-2 border-primary/20"
                    style={{ width: '64px', height: '64px' }}
                  />
                )}
                <div>
                  <div className="font-bold text-white text-lg">
                    {caseStudy.testimonial.author}
                  </div>
                  <div className="text-gray-400">
                    {caseStudy.testimonial.position}, {caseStudy.testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Section>
      )}

      {/* CTA Section */}
      <Section background="secondary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Ready for Similar Results?
          </h2>
          <p className="text-xl text-gray-400 mb-8 font-light">
            Let's create your success story together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/start-project">
              <Button size="lg" variant="primary" className="shadow-lg shadow-primary/20">
                Start a Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button size="lg" variant="outline">
                View More Work
              </Button>
            </Link>
          </div>
        </motion.div>
      </Section>
    </>
  );
}