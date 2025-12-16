'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Button from '@/components/ui/Button';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Work' },
  { href: '/about', label: 'Agency' },
  { href: '/blog', label: 'Insights' },
  { href: '/start-project', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'
          }`}
      >
        <div className="container-custom">
          <div
            className={`rounded-2xl px-6 transition-all duration-300 ${scrolled
              ? 'bg-white/90 backdrop-blur-md shadow-sm border border-gray-200 py-3'
              : 'bg-transparent py-2'
              }`}
          >
            <div className="flex items-center justify-between">
              {/* Logo */}
              <Link href="/" className="flex items-center group">
                <span className={`text-2xl font-bold tracking-tight transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-white'}`}>
                  Narratv<span className="text-primary">.</span>
                </span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-sm font-medium transition-all duration-300 relative group ${pathname === link.href
                        ? 'text-primary'
                        : scrolled ? 'text-gray-600 hover:text-slate-900' : 'text-gray-300 hover:text-white'
                      }`}
                  >
                    {link.label}
                    {pathname === link.href && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      />
                    )}
                  </Link>
                ))}

                {!scrolled && (
                  <Link href="/start-project">
                    <Button size="sm" variant="glass" className="rounded-full">Start a Project</Button>
                  </Link>
                )}
                {scrolled && (
                  <Link href="/start-project">
                    <Button size="sm" variant="primary" className="rounded-full shadow-none">Start a Project</Button>
                  </Link>
                )}
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden p-2 rounded-full transition-colors ${scrolled ? 'text-slate-900 hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}
                aria-label="Toggle menu"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white pt-28 px-6 md:hidden overflow-y-auto"
          >
            <div className="flex flex-col space-y-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-3xl font-bold transition-colors duration-300 ${pathname === link.href
                    ? 'text-primary'
                    : 'text-slate-900'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-8 border-t border-gray-100">
                <Link href="/start-project" className="block">
                  <Button fullWidth size="lg" variant="primary">Start a Project</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}