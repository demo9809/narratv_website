import { ServiceType } from './types';

// Date formatting
export const formatDate = (date: Date | string): string => {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
};

// Phone number formatting
export const formatPhone = (phone: string): string => {
  return phone.replace(/(\+\d{2})(\d{5})(\d{5})/, '$1 $2 $3');
};

// Service name formatting
export const formatServiceName = (service: ServiceType): string => {
  const names: Record<ServiceType, string> = {
    "branding": "Branding & Identity",
    "creative-strategy": "Creative Strategy",
    "ad-campaigns": "Ad Campaigns",
    "digital-marketing": "Digital Performance Marketing",
    "video-production": "Video Production",
    "content-creation": "Content Creation",
    "ai-video": "AI Video Production"
  };
  return names[service];
};

// Utility for conditional class names
export const cn = (...classes: (string | boolean | undefined)[]) => {
  return classes.filter(Boolean).join(' ');
};