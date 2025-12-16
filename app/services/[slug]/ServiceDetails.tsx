'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { ServicePageData } from '@/lib/types';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

export default function ServiceDetails({ data }: { data: ServicePageData }) {
    const { service, hero, intro, approach, process, tools, benefits, faqs, relatedCaseStudies } = data;
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-40 pb-20 overflow-hidden bg-slate-900 text-white">
                <div className="container-custom relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-4xl mx-auto"
                    >
                        <div className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/10 text-primary-foreground text-sm font-medium mb-6 backdrop-blur-sm">
                            {service.title}
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight">
                            {hero.headline}
                        </h1>

                        <p className="text-xl md:text-2xl text-gray-300 mb-12 font-light leading-relaxed">
                            {hero.subheadline}
                        </p>

                        <Link href="/start-project">
                            <Button size="lg" variant="primary">
                                Start a Project
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </section>

            {/* Intro / Long Content */}
            <Section background="primary">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-3xl mx-auto prose prose-lg prose-slate"
                >
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">{intro.heading}</h2>
                    <div className="text-gray-600 leading-relaxed font-light whitespace-pre-line">
                        {intro.content}
                    </div>
                </motion.div>
            </Section>

            {/* Approach */}
            <Section background="secondary">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{approach.heading}</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {approach.items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all"
                            >
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Process */}
            <Section background="primary">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-16 text-center">Our Process</h2>
                    <div className="space-y-8">
                        {process.map((step, index) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col md:flex-row gap-8 items-start p-8 rounded-2xl bg-white border border-gray-100 shadow-sm"
                            >
                                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                                    {step.step}
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-2">{step.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Section>

            {/* Benefits & Tools */}
            <Section background="secondary">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl mx-auto">
                    {/* Benefits */}
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Benefits</h3>
                        <div className="space-y-4">
                            {benefits.map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center gap-3"
                                >
                                    <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                                    <span className="text-gray-700">{benefit}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Tools */}
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Tools We Use</h3>
                        <div className="flex flex-wrap gap-2">
                            {tools.map((tool, i) => (
                                <span key={i} className="px-3 py-1 bg-white border border-gray-200 rounded-full text-sm text-gray-600">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>

            {/* FAQ */}
            <Section background="primary">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex justify-between items-center p-6 bg-white hover:bg-gray-50 transition-colors text-left"
                                >
                                    <span className="font-semibold text-slate-900">{faq.question}</span>
                                    {openFaqIndex === index ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                                </button>
                                {openFaqIndex === index && (
                                    <div className="p-6 pt-0 bg-white border-t border-gray-100">
                                        <p className="text-gray-600 leading-relaxed mt-4">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* CTA */}
            <Section background="dark" className="text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Ready to Elevate Your Brand?</h2>
                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">Stop settling for average. Let's build a {service.title.toLowerCase()} strategy that actually drives revenue.</p>
                    <Link href="/start-project">
                        <Button variant="primary" size="lg">Get Started Now</Button>
                    </Link>
                </motion.div>
            </Section>
        </>
    );
}
