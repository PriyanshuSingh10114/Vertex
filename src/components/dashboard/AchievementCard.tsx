'use client';

import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export function AchievementCard({ title, description, icon }: { title: string; description: string; icon: ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="h-full"
    >
      <Card className="p-6 h-full flex flex-col items-center text-center justify-center space-y-4 group">
        <div className="p-4 rounded-full bg-white/[0.03] border border-border group-hover:bg-accent/10 group-hover:border-accent/20 transition-colors">
          {icon}
        </div>
        <div>
          <h3 className="font-medium text-foreground mb-1">{title}</h3>
          <p className="text-[13px] text-card-muted">{description}</p>
        </div>
      </Card>
    </motion.div>
  );
}
