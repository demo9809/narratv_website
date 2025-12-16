import { notFound } from 'next/navigation';
import { getServicePageData, services } from '@/lib/data';
import ServiceDetails from './ServiceDetails';
import { Metadata } from 'next';

// Generate static params for all services to support SSG/ISR
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate SEO Metadata
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = getServicePageData(slug);

  if (!data) {
    return {
      title: 'Service Not Found',
    };
  }

  return {
    title: data.seo.title,
    description: data.seo.description,
    keywords: data.seo.keywords,
    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
      type: 'website',
    }
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = getServicePageData(slug);

  if (!data) {
    notFound();
  }

  // JSON-LD Schema for Service
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: data.service.title,
    description: data.seo.description,
    provider: {
      '@type': 'Organization',
      name: 'Narratv Space',
      url: 'https://narratv.space'
    },
    areaServed: 'Worldwide',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: data.service.title,
      itemListElement: data.process.map((step, index) => ({
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: step.title,
          description: step.description
        },
        position: index + 1
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServiceDetails data={data} />
    </>
  );
}