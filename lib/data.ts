import { Service, CaseStudy, Testimonial, Stat, BlogPost, ServicePageData, CaseStudyCategory } from './types';

export const services: Service[] = [
  {
    id: "branding",
    title: "Branding & Identity",
    description: "Craft compelling brand narratives that resonate with your audience and stand the test of time.",
    icon: "Lightbulb",
    slug: "branding-identity"
  },
  {
    id: "creative-strategy",
    title: "Creative Strategy",
    description: "Strategic storytelling that aligns your brand vision with market opportunities.",
    icon: "Target",
    slug: "creative-strategy"
  },
  {
    id: "ad-campaigns",
    title: "Ad Campaigns",
    description: "Bold, attention-grabbing campaigns that drive engagement and conversions.",
    icon: "Megaphone",
    slug: "ad-campaigns"
  },
  {
    id: "digital-marketing",
    title: "Digital Performance Marketing",
    description: "Data-driven digital strategies that deliver measurable results and ROI.",
    icon: "BarChart2",
    slug: "digital-performance-marketing"
  },
  {
    id: "video-production",
    title: "Video Production",
    description: "Cinematic storytelling through professional video production that captivates audiences.",
    icon: "Video",
    slug: "video-production"
  },
  {
    id: "content-creation",
    title: "Content Creation",
    description: "Engaging content that tells your brand story across all platforms.",
    icon: "FilePen",
    slug: "content-creation"
  },
  {
    id: "ai-video",
    title: "AI Video Production",
    description: "Cutting-edge AI-powered video creation for modern, efficient storytelling.",
    icon: "Sparkles",
    slug: "ai-video-production"
  }
];

export const stats: Stat[] = [
  {
    value: "8",
    label: "Years of Experience",
    suffix: "+"
  },
  {
    value: "95",
    label: "Client Retention Rate",
    suffix: "%"
  },
  {
    value: "150",
    label: "Projects Delivered",
    suffix: "+"
  },
  {
    value: "12",
    label: "Industry Awards",
    suffix: "+"
  }
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "Narratv Space transformed our brand identity completely. Their storytelling approach helped us connect with our audience on a deeper level. The results exceeded our expectations.",
    author: "Sarah Johnson",
    position: "Marketing Director",
    company: "TechVision Inc",
    avatar: "https://i.pravatar.cc/150?u=sarah"
  },
  {
    id: "2",
    quote: "Working with Narratv was a game-changer for our digital presence. Their creative strategy and execution were flawless. We saw a 300% increase in engagement within the first quarter.",
    author: "Michael Chen",
    position: "CEO",
    company: "GrowthLabs",
    avatar: "https://i.pravatar.cc/150?u=michael"
  },
  {
    id: "3",
    quote: "The team at Narratv Space doesn't just create content—they craft experiences. Their video production quality is cinematic, and their understanding of our brand narrative is unmatched.",
    author: "Priya Sharma",
    position: "Brand Manager",
    company: "Innovate Solutions",
    avatar: "https://i.pravatar.cc/150?u=priya"
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Redefining Luxury Retail",
    client: "Elegance Boutique",
    category: ["branding", "digital"],
    thumbnail: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
    challenge: "A premium fashion retailer needed to modernize their brand while maintaining their luxury positioning.",
    strategy: "We developed a narrative-driven brand refresh that honored their heritage while embracing contemporary aesthetics.",
    execution: "Complete brand identity redesign, luxury e-commerce platform, social media campaign, and influencer partnerships.",
    results: [
      "250% increase in online sales",
      "180% growth in social media engagement",
      "40% younger customer demographic",
      "Featured in Vogue and Harper's Bazaar"
    ],
    testimonial: testimonials[0],
    slug: "elegance-boutique-rebrand"
  },
  {
    id: "2",
    title: "Tech Startup Launch",
    client: "CloudSync",
    category: ["campaigns", "digital", "video"],
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    challenge: "B2B SaaS startup needing brand awareness in a crowded market.",
    strategy: "Positioned CloudSync as the human-centric alternative to enterprise software via video storytelling.",
    execution: "Brand video series, LinkedIn campaign, content marketing, and email nurture.",
    results: [
      "5000+ qualified leads in 3 months",
      "320% ROI on ad spend",
      "Featured in TechCrunch",
      "Secured $2M in funding"
    ],
    slug: "cloudsync-launch"
  },
  {
    id: "3",
    title: "Heritage Coffee Film",
    client: "Heritage Coffee Co",
    category: ["video", "branding"],
    thumbnail: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    challenge: "Third-generation roaster ensuring differentiation from corporate chains.",
    strategy: "Cinematic documentary capturing the passion, craftsmanship, and family legacy.",
    execution: "15-minute documentary, social cutdowns, website integration, and cinema screenings.",
    results: [
      "2M+ views across platforms",
      "Won 3 film festival awards",
      "45% increase in wholesale partnerships",
      "Retail expansion to 50 new locations"
    ],
    slug: "heritage-coffee-film"
  },
  {
    id: "4",
    title: "AI Product Launch",
    client: "FutureTech AI",
    category: ["ai", "digital", "campaigns"],
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    challenge: "Explaining complex AI technology to non-technical audiences.",
    strategy: "AI-generated personalized explainer videos at scale.",
    execution: "AI video content, interactive web experience, webinar series.",
    results: [
      "10,000+ product sign-ups",
      "500% increase in demo requests",
      "Featured in Forbes and Wired",
      "Industry innovation award"
    ],
    slug: "futuretech-ai-launch"
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Brand Storytelling in 2025",
    excerpt: "Explore how AI, immersive experiences, and authentic narratives are reshaping connection.",
    thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80",
    publishedDate: "2024-12-01",
    slug: "future-brand-storytelling-2025",
    category: "Branding"
  },
  {
    id: "2",
    title: "Why Every Brand Needs a Narrative Strategy",
    excerpt: "Discover how narrative-driven marketing creates deeper connections and loyalty.",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80",
    publishedDate: "2024-11-15",
    slug: "brand-narrative-strategy",
    category: "Strategy"
  },
  {
    id: "3",
    title: "The Rise of AI in Video Production",
    excerpt: "How AI tools democratize video creation while interpreting authentic storytelling.",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
    publishedDate: "2024-11-01",
    slug: "ai-video-production-rise",
    category: "Technology"
  }
];

// Service page data
export const getServicePageData = (slug: string): ServicePageData | null => {
  const service = services.find(s => s.slug === slug);
  if (!service) return null;

  // Default expansion for services not fully detailed below
  const defaultServiceData: Omit<ServicePageData, 'service'> = {
    seo: {
      title: `${service.title} | Narratv Space Agency`,
      description: service.description,
      keywords: ["creative agency", service.title.toLowerCase()]
    },
    hero: {
      headline: service.title,
      subheadline: service.description
    },
    intro: {
      heading: "Overview",
      content: `At Narratv Space, our ${service.title} service is designed to elevate your brand through strategic execution and creative excellence. We combine industry insights with innovative techniques to deliver results.`
    },
    approach: {
      heading: "Our Approach",
      items: [
        { title: "Strategic Planning", description: "We start with a deep dive into your goals." },
        { title: "Creative Execution", description: "Bringing ideas to life with precision." },
        { title: "Performance Analysis", description: "Measuring success and optimizing." }
      ]
    },
    process: [
      { step: 1, title: "Discovery", description: "Understanding your unique needs." },
      { step: 2, title: "Strategy", description: "Developing a tailored roadmap." },
      { step: 3, title: "Execution", description: "Implementing the solution." },
      { step: 4, title: "Review", description: "Analyzing performance." }
    ],
    benefits: [
      "Increased brand visibility",
      "Higher engagement rates",
      "improved ROI",
      "Strategic alignment"
    ],
    tools: ["Analysis Tools", "Creative Suite", "Reporting Dashboards"],
    faqs: [
      { question: "What is your typical timeline?", answer: "Timelines vary by project scope, usually ranging from 2-8 weeks." },
      { question: "Do you offer custom packages?", answer: "Yes, we tailor all our services to your specific needs." }
    ],
    relatedCaseStudies: caseStudies.slice(0, 2)
  };

  const serviceData: Record<string, Omit<ServicePageData, 'service'>> = {
    "branding-identity": {
      seo: {
        title: "Branding & Identity Design Experts | Narratv Space",
        description: "Transform your business with our comprehensive branding services. We craft unique brand identities, logos, and strategies that resonate.",
        keywords: ["branding agency", "brand identity", "logo design", "brand strategy", "corporate identity"]
      },
      hero: {
        headline: "Your Brand Story, Beautifully Told",
        subheadline: "We craft brand identities that resonate, endure, and inspire action through strategic storytelling."
      },
      intro: {
        heading: "More Than Just a Logo",
        content: "Branding is the soul of your business. It's how the world perceives you, and more importantly, how they feel about you. At Narratv Space, we move beyond aesthetics to build brands with depth, purpose, and clarity. Our narrative-led approach ensures your visual identity is not just seen, but understood and felt by your target audience. We build comprehensive design systems that scale with your growth."
      },
      approach: {
        heading: "Our Branding Methodology",
        items: [
          {
            title: "Narrative-First Design",
            description: "We don't start with colors; we start with your story. Every visual element is chosen to reinforce your core narrative."
          },
          {
            title: "Strategic Positioning",
            description: "We analyze your competitive landscape to find your unique space in the market, ensuring you stand out, not just fit in."
          },
          {
            title: "Scalable Systems",
            description: "We create flexible design systems that maintain consistency across digital, print, and physical environments."
          }
        ]
      },
      process: [
        { step: 1, title: "Discovery & Immersion", description: "We deep dive into your business, interviewing key stakeholders and auditing your current brand." },
        { step: 2, title: "Brand Strategy Platform", description: "Defining your mission, vision, values, and brand archetype to guide creative decisions." },
        { step: 3, title: "Visual Identity Design", description: "Exploration of logo concepts, typography, color palettes, and visual language." },
        { step: 4, title: "Touchpoint Application", description: "Applying the new brand to key assets like websites, business cards, and social templates." },
        { step: 5, title: "Guidelines & Handoff", description: "Delivering a comprehensive brand book to ensure long-term consistency." }
      ],
      benefits: [
        "Increased brand recognition and recall",
        "Higher customer trust and loyalty",
        "Ability to command premium pricing",
        "Consistent communication across all channels",
        "Improved internal team alignment"
      ],
      tools: ["Adobe Illustrator", "Figma", "Brand Archetype Frameworks", "Semrush (Market Research)"],
      faqs: [
        { question: "How long does a rebranding project take?", answer: "A typical comprehensive branding project takes 6-10 weeks, depending on the number of stakeholders and deliverables." },
        { question: "What do I get at the end of the project?", answer: "You receive a complete brand kit including logo files (all formats), a brand guideline book (PDF), color codes, typography files, and social media templates." },
        { question: "Do you help with naming?", answer: "Yes, we offer naming services including trademark preliminary checks and domain availability research." }
      ],
      relatedCaseStudies: caseStudies.filter(cs => cs.category.includes("branding"))
    },
    "creative-strategy": {
      seo: {
        title: "Creative Strategy Agency | Data-Driven Storytelling",
        description: "Align your business goals with powerful creative execution. Our creative strategists build roadmaps for brand growth.",
        keywords: ["creative strategy", "marketing strategy", "brand positioning", "content strategy"]
      },
      hero: {
        headline: "Strategy Meets Storytelling",
        subheadline: "We align your brand vision with market opportunities through strategic narratives."
      },
      intro: {
        heading: "The Bridge Between Data and Design",
        content: "Great creativity without strategy is just art. Great strategy without creativity is boring. Creative Strategy is the discipline of connecting the two. We dig deep into audience insights, cultural trends, and business data to find the 'one true thing' about your brand. Then, we build explosive creative platforms around it. This ensures every piece of content you produce is working hard to achieve business objectives."
      },
      approach: {
        heading: "How We Think",
        items: [
          { title: "Audience-Centric", description: "We obsess over who your customer is, what they care about, and where they spend their time." },
          { title: "Data-Informed", description: "We use analytics to validate our hunches, reducing risk and increasing ROI." },
          { title: "Platform-Native", description: "We devise strategies that respect the nuances of each channel, from TikTok to LinkedIn." }
        ]
      },
      process: [
        { step: 1, title: "Audit & Analysis", description: "Reviewing your current marketing performance and competitive set." },
        { step: 2, title: "Insight Generation", description: "Finding the key friction points and opportunities in your customer journey." },
        { step: 3, title: "Strategic Framework", description: "Developing the 'Big Idea' and the pillars that support it." },
        { step: 4, title: "Execution Roadmap", description: "A detailed plan of action for creative teams to follow." }
      ],
      benefits: [
        "Clearer direction for creative teams",
        "Better ROI on marketing spend",
        "More relevant messaging for your audience",
        "Long-term brand value growth"
      ],
      tools: ["GWI (Global Web Index)", "Google Analytics 4", "Mintel", "Creative Briefs"],
      faqs: [
        { question: "What is the deliverable for creative strategy?", answer: "We deliver a Strategy Deck covering audience personas, messaging framework, channel strategy, and sample creative concepts." },
        { question: "Do you execute the strategy too?", answer: "Yes, we have full in-house production capabilities to bring the strategy to life seamlessly." }
      ],
      relatedCaseStudies: caseStudies.filter(cs => cs.category.includes("campaigns"))
    }
    // ... Additional specific data can be added here or fall back to defaultServiceData
  };

  const specificData = serviceData[slug];

  return {
    service,
    ...(specificData || defaultServiceData)
  };
};

export const getCaseStudies = (category?: CaseStudyCategory): CaseStudy[] => {
  if (!category || category === "all") {
    return caseStudies;
  }
  return caseStudies.filter(cs => cs.category.includes(category));
};

export const getCaseStudyBySlug = (slug: string): CaseStudy | null => {
  return caseStudies.find(cs => cs.slug === slug) || null;
};