'use client';

import { use } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Section from '@/components/ui/Section';
import Button from '@/components/ui/Button';
import { blogPosts } from '@/lib/data';
import { formatDate } from '@/lib/utils';
import { ArrowLeft, ArrowRight, Calendar, Tag, Clock } from 'lucide-react';

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    notFound();
  }

  // Get related posts
  const relatedPosts = blogPosts.filter(p => p.id !== post.id).slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 z-0 bg-deep-space">
          <div className="absolute top-[-10%] right-[10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] animate-blob" />
          <div className="absolute bottom-[10%] left-[-10%] w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-[100px] animate-blob animation-delay-4000" />
        </div>

        <div className="container-custom max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center text-gray-400 hover:text-primary transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Insights
            </Link>

            <div className="flex flex-wrap items-center gap-4 mb-8">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Tag className="mr-2" size={14} />
                {post.category}
              </span>
              <span className="inline-flex items-center text-gray-400 text-sm">
                <Calendar className="mr-2" size={14} />
                {formatDate(post.publishedDate)}
              </span>
              <span className="inline-flex items-center text-gray-400 text-sm">
                <Clock className="mr-2" size={14} />
                5 min read
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-8 text-white tracking-tight leading-tight">
              {post.title}
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              {post.excerpt}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="container-custom max-w-5xl mb-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-3xl overflow-hidden shadow-2xl shadow-primary/10 border border-white/10"
        >
          <div className="aspect-[21/9]">
            <img
              src={post.thumbnail}
              alt={post.title}
              className="w-full h-full object-cover"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </motion.div>
      </section>

      {/* Article Content */}
      <Section className="pt-0">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg prose-invert max-w-none prose-headings:text-white prose-p:text-gray-300 prose-li:text-gray-300 prose-strong:text-white prose-a:text-primary hover:prose-a:text-primary-light"
          >
            {/* Sample Article Content */}
            <div className="space-y-8 leading-relaxed font-light">
              <p className="text-xl leading-relaxed text-gray-300">
                In the ever-evolving landscape of brand communication, storytelling has emerged as the most powerful tool for creating meaningful connections with audiences. But what does effective brand storytelling look like in 2025?
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6 tracking-tight">
                The Evolution of Brand Narratives
              </h2>

              <p>
                Traditional advertising is giving way to narrative-driven content that resonates on a deeper, more emotional level. Brands are no longer just selling products—they're sharing values, experiences, and visions for the future.
              </p>

              <p>
                This shift requires a fundamental rethinking of how we approach brand communication. It's not about what you sell, but <strong className="text-white">why you exist</strong> and how you make people feel.
              </p>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6 tracking-tight">
                Key Elements of Modern Storytelling
              </h2>

              <p>
                Successful brand stories in 2025 share several common characteristics:
              </p>

              <ul className="space-y-4 my-8 pl-4 border-l-2 border-primary/30">
                <li className="pl-4">
                  <strong className="text-white block mb-1">Authenticity</strong>
                  Audiences can detect insincerity instantly. Your story must be genuine and aligned with your actions.
                </li>
                <li className="pl-4">
                  <strong className="text-white block mb-1">Emotional Connection</strong>
                  Facts tell, but stories sell. Create narratives that resonate emotionally.
                </li>
                <li className="pl-4">
                  <strong className="text-white block mb-1">Consistency</strong>
                  Your story should be coherent across all touchpoints and channels.
                </li>
                <li className="pl-4">
                  <strong className="text-white block mb-1">Purpose-Driven</strong>
                  Modern consumers want to support brands that stand for something beyond profit.
                </li>
              </ul>

              <h2 className="text-3xl font-bold text-white mt-12 mb-6 tracking-tight">
                The Role of Technology
              </h2>

              <p>
                AI, immersive experiences, and personalization are reshaping how stories are told and consumed. But technology should enhance, not replace, the human element of storytelling.
              </p>

              <p>
                The brands that will thrive are those that use technology to create more personal, relevant, and engaging narratives while maintaining the authenticity that makes stories powerful.
              </p>

              <div className="p-8 my-10 bg-gradient-to-br from-white/5 to-transparent rounded-2xl border border-white/10">
                <h3 className="text-xl font-bold text-white mb-3">Looking Ahead</h3>
                <p className="mb-0 text-gray-300">
                  As we move forward, the importance of storytelling will only grow. Brands that invest in developing compelling narratives, understanding their audiences deeply, and staying true to their values will build lasting relationships and drive meaningful impact.
                </p>
              </div>

              <p className="text-2xl font-light text-center text-white my-12 italic">
                "The future of branding isn't about shouting louder—it's about telling better stories."
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section background="secondary">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
              Related Articles
            </h2>
            <p className="text-xl text-gray-400 font-light max-w-2xl mx-auto">
              More insights to help you grow your brand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost, index) => (
              <motion.div
                key={relatedPost.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/blog/${relatedPost.slug}`}>
                  <div className="group h-full flex flex-col rounded-2xl overflow-hidden glass-panel border border-white/5 hover:border-primary/50 transition-all duration-300 cursor-pointer bg-white/[0.02]">
                    <div className="aspect-[16/9] relative overflow-hidden">
                      <img
                        src={relatedPost.thumbnail}
                        alt={relatedPost.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        style={{ width: '100%', height: '100%' }}
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                    </div>

                    <div className="flex-1 p-6 flex flex-col">
                      <div className="mb-4">
                        <span className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-medium">
                          {relatedPost.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-primary transition-colors duration-300 leading-tight">
                        {relatedPost.title}
                      </h3>

                      <div className="mt-auto pt-4 flex items-center text-sm text-gray-500 border-t border-white/5">
                        <Calendar size={14} className="mr-2" />
                        {formatDate(relatedPost.publishedDate)}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Section>
      )}

      {/* CTA Section */}
      <Section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto p-12 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 backdrop-blur-md"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white tracking-tight">
            Ready to Tell Your Story?
          </h2>
          <p className="text-lg text-gray-300 mb-8 font-light">
            Let's create a compelling narrative for your brand.
          </p>
          <Link href="/start-project">
            <Button size="lg" variant="primary" className="shadow-lg shadow-primary/20">
              Start a Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </motion.div>
      </Section>
    </>
  );
}