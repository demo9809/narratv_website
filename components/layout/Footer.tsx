import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from 'lucide-react';
import { formatPhone } from '@/lib/utils';
import Button from '@/components/ui/Button';

const footerLinks = {
  services: [
    { label: 'Branding & Identity', href: '/services/branding-identity' },
    { label: 'Creative Strategy', href: '/services/creative-strategy' },
    { label: 'Ad Campaigns', href: '/services/ad-campaigns' },
    { label: 'Digital Marketing', href: '/services/digital-performance-marketing' },
    { label: 'Video Production', href: '/services/video-production' },
  ],
  company: [
    { label: 'About Agency', href: '/about' },
    { label: 'Work', href: '/portfolio' },
    { label: 'Insights', href: '/blog' },
    { label: 'Careers', href: '/about#careers' },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 pt-24 pb-12 relative overflow-hidden">
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-20">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-block mb-8">
              <span className="text-3xl font-bold tracking-tight text-white">
                Narratv<span className="text-primary">.</span>
              </span>
            </Link>
            <p className="text-gray-400 mb-8 max-w-sm text-lg font-light leading-relaxed">
              We help ambitious brands tell stories that matter, turning passive audiences into loyal advocates.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-3 rounded-full bg-slate-800 text-gray-400 hover:text-white hover:bg-primary transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Expertise</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Agency</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">Get Started</h3>
            <p className="text-gray-400 text-sm mb-6">Ready to see what proper storytelling can do for your revenue?</p>
            <Link href="/start-project">
              <Button fullWidth size="md" variant="primary">Start a Project</Button>
            </Link>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Narratv Space. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-gray-600 text-sm hover:text-gray-400 transition-colors">Privacy Policy</Link>
            <Link href="#" className="text-gray-600 text-sm hover:text-gray-400 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}