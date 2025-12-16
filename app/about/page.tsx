'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { ArrowRight, Target, Users, Lightbulb, TrendingUp, CheckCircle2 } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Narrative-Led Strategy',
    description: 'We believe every brand has a unique story. Our methodology ensures your message resonates authentically with your specific audience, turning casual viewers into loyal advocates.'
  },
  {
    icon: Users,
    title: 'Long-Term Partnership',
    description: 'We don’t just deliver projects; we build relationships. With an average client retention of 4+ years, we become an extension of your team, invested in your long-term growth.'
  },
  {
    icon: Lightbulb,
    title: 'Creative Excellence',
    description: 'Good enough is not in our vocabulary. We combine strategic thinking with world-class design and cinematic production to deliver work that stands out in a crowded digital landscape.'
  },
  {
    icon: TrendingUp,
    title: 'Results-Driven',
    description: 'Creativity without conversion is just art. We focus on measurable outcomes, from brand awareness to revenue growth, ensuring every dollar spent delivers ROI.'
  }
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section - Dark for Impact */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-slate-900">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-blob" />
          <div className="absolute bottom-[20%] right-[10%] w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] animate-blob animation-delay-4000" />
        </div>

        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <span className="inline-block py-2 px-4 rounded-full bg-white/10 border border-white/10 text-white text-sm font-medium mb-8 backdrop-blur-sm">
              Our Agency
            </span>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight leading-[1.1]">
              The Trusted Narrator for <br /><span className="text-primary">Great Brands.</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              We help ambitious companies find their voice and tell stories that matter.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section - Light for Readability */}
      <Section background="primary">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-slate-900 tracking-tight leading-tight">
              Our Story
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
              <p>
                Founded on the belief that every brand has a compelling story waiting to be told,
                Narratv Space has spent over 8 years perfecting the art of brand storytelling.
              </p>
              <p>
                We noticed a gap in the market: agencies were either creative shops with no business sense, or consultant firms with no soul. We built Narratv to be both. We're storytellers, strategists, and creative partners who believe in the power of narrative to transform brands and drive meaningful connections.
              </p>
              <p className="font-medium text-slate-900">
                Our approach is simple: we listen, we understand, and we craft narratives that resonate. Whether it's through branding, video production, or digital campaigns, we help brands find their voice and share their story with the world.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100 flex gap-8">
              <div>
                <div className="text-3xl font-bold text-primary">8+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">50+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Brands Launched</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">4yr</div>
                <div className="text-sm text-gray-500 uppercase tracking-wide">Avg Retention</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-2xl -z-10 transform rotate-3 scale-105"></div>
            <img
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop"
              alt="Creative team discussing strategy"
              className="rounded-2xl shadow-xl border border-gray-100"
              style={{ width: '100%', height: 'auto' }}
            />
          </motion.div>
        </div>
      </Section>

      {/* Values Section - Secondary Light */}
      <Section background="secondary">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
            What Drives Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
            Our core values shape every decision we make and every project we deliver.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="inline-flex p-4 rounded-xl bg-primary/5 mb-6 text-primary">
                <value.icon size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-slate-900 tracking-tight">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-lg">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Philosophy Section - Dark Break */}
      <Section background="dark">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-10 text-white tracking-tight leading-tight">
            Our Philosophy
          </h2>
          <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed font-light">
            <p>
              We believe in the power of <span className="text-white font-medium">clarity over noise</span>. In a crowded digital world, the brands that win are the ones that speak clearly, authentically, and consistently.
            </p>
            <p>
              We don't chase trends for the sake of it. We build comprehensive systems—visual, verbal, and strategic—that allow brands to scale sustainably.
            </p>
          </div>

          <div className="mt-12 flex justify-center gap-6 flex-wrap">
            {["Clarity", "Authenticity", "Consistency", "Scalability"].map((word, i) => (
              <span key={i} className="px-6 py-3 rounded-full bg-white/10 text-white font-medium border border-white/10 backdrop-blur-sm">
                {word}
              </span>
            ))}
          </div>
        </motion.div>
      </Section>

      {/* CTA Section */}
      <section className="relative py-32 overflow-hidden bg-primary">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="container-custom relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
            Let's Write Your Story
          </h2>
          <p className="text-xl text-indigo-100 mb-10 font-medium">
            Ready to transform your brand narrative?
          </p>
          <Link href="/start-project">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 shadow-2xl scale-110 border-none">
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}