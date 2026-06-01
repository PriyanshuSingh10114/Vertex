'use client';

import { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import { motion, Variants } from 'framer-motion';

const gridVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 260, damping: 20 },
  },
};

export function BentoGrid({ className, children }: { className?: string; children: ReactNode }) {
  return (
    <motion.div
      variants={gridVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto',
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export function BentoGridItem({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) {
  return (
    <motion.div
      variants={itemVariants}
      className={cn('row-span-1 rounded-xl group/bento transition duration-200', className)}
    >
      {children}
    </motion.div>
  );
}
