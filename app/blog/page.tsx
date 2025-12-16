'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import { blogPosts } from '@/lib/data';
import { formatDate } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <>
      {/* Hero Section - Dark */}
      <section className="relative pt-40 pb-20 bg-slate-900 overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-5xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight leading-[1.05]">
              Insights <span className="text-primary">&</span> Ideas
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-3xl mx-auto">
              Thoughts on storytelling, branding, and the future of creative marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid - Light */}
      <Section background="secondary">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="group h-full flex flex-col rounded-2xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                  {/* Image */}
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <img
                      src={post.thumbnail}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-8 flex flex-col">
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-sm font-medium">
                        {formatDate(post.publishedDate)}
                      </span>
                    </div>

                    <h2 className="text-2xl font-bold mb-3 text-slate-900 group-hover:text-primary transition-colors duration-300 tracking-tight leading-tight">
                      {post.title}
                    </h2>

                    <p className="text-gray-600 mb-6 flex-1 font-light leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-primary font-bold text-sm group-hover:translate-x-2 transition-transform duration-300">
                      <span>READ ARTICLE</span>
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </Section>
    </>
  );
}