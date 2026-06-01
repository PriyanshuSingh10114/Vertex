'use client';

import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export interface HeroAction {
  label: string;
  href?: string;
  onClick?: () => void;
  primary?: boolean;
}

export interface HeroCardProps {
  greeting: string;
  description: string;
  badgeText?: string;
  actions?: HeroAction[];
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
};

export function HeroCard({ greeting, description, badgeText, actions, className }: HeroCardProps) {
  return (
    <Card className={cn("p-6 sm:p-8 flex flex-col justify-between h-full relative overflow-hidden group/hero", className)}>
      {/* Subtle radial mesh gradient */}
      <div 
        className="absolute top-[-50%] right-[-10%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full bg-white/[0.02] blur-3xl pointer-events-none transition-opacity duration-500 group-hover/hero:bg-white/[0.04]" 
        aria-hidden="true" 
      />
      
      <motion.div 
        className="relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {badgeText && (
          <motion.div variants={childVariants} className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[11px] font-medium text-card-muted uppercase tracking-wider mb-6">
            <span>{badgeText}</span>
          </motion.div>
        )}
        
        <motion.h1 variants={childVariants} className="text-2xl sm:text-3xl font-medium tracking-tight text-foreground mb-2">
          {greeting}
        </motion.h1>
        
        <motion.p variants={childVariants} className="text-sm text-card-muted max-w-md leading-relaxed">
          {description}
        </motion.p>
      </motion.div>

      {actions && actions.length > 0 && (
        <motion.div 
          className="mt-8 flex flex-wrap items-center gap-3 relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {actions.map((action, index) => {
            const ButtonWrapper = action.href ? Link : 'button';
            return (
              <motion.div key={index} variants={childVariants}>
                <ButtonWrapper
                  href={action.href || '#'}
                  onClick={action.onClick}
                  className={cn(
                    "px-5 py-2.5 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent",
                    action.primary 
                      ? "bg-foreground hover:bg-foreground/90 text-background" 
                      : "bg-transparent hover:bg-white/5 text-foreground border border-border"
                  )}
                >
                  {action.label}
                </ButtonWrapper>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </Card>
  );
}
