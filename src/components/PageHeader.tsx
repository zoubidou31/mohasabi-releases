import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  titleId: string;
  tone?: 'light' | 'mint';
  children?: ReactNode;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ badge, title, subtitle, titleId, tone = 'mint', children }) => {
  return (
    <header
      className={
        tone === 'mint'
          ? 'bg-primary-light border-b border-primary/10 py-14 md:py-20'
          : 'bg-white border-b border-neutral-200 py-14 md:py-20'
      }
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="max-w-3xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <p className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-sm font-medium mb-5">
            {badge}
          </p>
          <h1
            id={titleId}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-neutral-900 leading-tight mb-4 text-balance"
          >
            {title}
          </h1>
          <p className="text-lg text-neutral-600 leading-relaxed">{subtitle}</p>
          {children}
        </motion.div>
      </div>
    </header>
  );
};
