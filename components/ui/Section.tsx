import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'primary' | 'secondary' | 'dark' | 'transparent';
  id?: string;
  noPadding?: boolean;
}

export default function Section({
  children,
  className,
  background = 'transparent',
  id,
  noPadding = false
}: SectionProps) {
  const backgrounds = {
    transparent: '',
    primary: 'bg-white',
    secondary: 'bg-gray-50',
    dark: 'bg-slate-900 text-white'
  };

  return (
    <section
      id={id}
      className={cn(
        'relative w-full',
        !noPadding && 'py-20 md:py-32',
        backgrounds[background],
        className
      )}
    >
      <div className="container-custom relative z-10 h-full">
        {children}
      </div>
    </section>
  );
}