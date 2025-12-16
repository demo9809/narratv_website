// Enums
export type ServiceType = "branding" | "creative-strategy" | "ad-campaigns" | "digital-marketing" | "video-production" | "content-creation" | "ai-video";
export type CaseStudyCategory = "branding" | "video" | "campaigns" | "digital" | "ai" | "all";
export type FormStatus = "idle" | "submitting" | "success" | "error";

// Types for props and data structures
export interface Service {
  id: ServiceType;
  title: string;
  description: string;
  icon: string;
  slug: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  category: CaseStudyCategory[];
  thumbnail: string;
  challenge: string;
  strategy: string;
  execution: string;
  results: string[];
  testimonial?: Testimonial;
  slug: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar?: string;
}

export interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  thumbnail: string;
  publishedDate: string;
  slug: string;
  category: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: ServiceType | "";
  message: string;
}


export interface FAQ {
  question: string;
  answer: string;
}

export interface ServicePageData {
  service: Service;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: {
    headline: string;
    subheadline: string;
  };
  intro: {
    heading: string;
    content: string; // Long form content
    image?: string;
  };
  approach: {
    heading: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  benefits: string[];
  tools: string[];
  faqs: FAQ[];
  relatedCaseStudies: CaseStudy[];
}