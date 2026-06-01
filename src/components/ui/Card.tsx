import { cn } from '@/lib/utils';
import { HTMLAttributes, ReactNode } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Card({ className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        'rounded-xl border border-border bg-card transition-colors duration-150 ease-out hover:border-border-hover hover:bg-[#18181b] overflow-hidden',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
