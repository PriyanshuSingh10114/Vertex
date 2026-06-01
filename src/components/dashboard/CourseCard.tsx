'use client';

import { Course } from '@/types';
import { Card } from '@/components/ui/Card';
import { motion } from 'framer-motion';
import { PlayCircle, CheckCircle2, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

export function CourseCard({ course, index }: { course: Course; index: number }) {
  const isCompleted = course.status === 'Completed';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col p-5 group cursor-pointer">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2 bg-white/[0.03] rounded-md border border-white/5 group-hover:border-border-hover transition-colors">
            {isCompleted ? (
              <CheckCircle2 className="w-4 h-4 text-card-muted" />
            ) : course.status === 'In Progress' ? (
              <PlayCircle className="w-4 h-4 text-accent" />
            ) : (
              <Clock className="w-4 h-4 text-card-muted" />
            )}
          </div>
          <span className={cn(
            "text-[11px] font-medium px-2 py-0.5 rounded-md border uppercase tracking-wider",
            isCompleted ? "bg-white/[0.02] text-card-muted border-border" :
            course.status === 'In Progress' ? "bg-accent/10 text-accent border-accent/20" :
            "bg-white/[0.02] text-card-muted border-border"
          )}>
            {course.status}
          </span>
        </div>

        <div className="mt-auto">
          <h3 className="text-sm font-medium text-foreground mb-1 line-clamp-2">{course.title}</h3>
          <p className="text-[13px] text-card-muted mb-4">{course.instructor}</p>
          
          <div className="space-y-2">
            <div className="flex justify-between text-[11px] font-medium tracking-wide">
              <span className="text-card-muted uppercase">Progress</span>
              <span className="text-foreground">{course.progress}%</span>
            </div>
            <div className="h-1 bg-border rounded-full overflow-hidden">
              <motion.div 
                className={cn(
                  "h-full rounded-full",
                  isCompleted ? "bg-card-muted" : "bg-accent"
                )}
                initial={{ width: 0 }}
                animate={{ width: `${course.progress}%` }}
                transition={{ duration: 0.8, delay: 0.2 + (index * 0.1), ease: "easeOut" }}
              />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
