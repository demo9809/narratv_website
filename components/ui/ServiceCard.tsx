'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Lightbulb, Target, Megaphone, BarChart2, Video, FilePen, Sparkles, ArrowRight } from 'lucide-react';
import { Service } from '@/lib/types';

const iconMap = {
  Lightbulb,
  Target,
  Megaphone,
  BarChart2,
  Video,
  FilePen,
  Sparkles
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon as keyof typeof iconMap];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={`/services/${service.slug}`} className="block h-full">
        <div className="group relative h-full p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <div className="mb-6">
            <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
              <Icon size={28} />
            </div>
          </div>

          <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary transition-colors duration-300">
            {service.title}
          </h3>

          <p className="text-gray-600 leading-relaxed text-base mb-6">
            {service.description}
          </p>

          <div className="flex items-center text-primary font-medium group-hover:translate-x-1 transition-transform duration-300 text-sm mt-auto">
            <span>Explore Service</span>
            <ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}