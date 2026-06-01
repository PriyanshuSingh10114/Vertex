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
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col p-5 hover:border-blue-500/30 transition-colors group">
        <div className="flex justify-between items-start mb-4">
          <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 group-hover:bg-blue-500/10 group-hover:border-blue-500/20 transition-colors">
            {isCompleted ? (
              <CheckCircle2 className="w-5 h-5 text-green-400" />
            ) : course.status === 'In Progress' ? (
              <PlayCircle className="w-5 h-5 text-blue-400" />
            ) : (
              <Clock className="w-5 h-5 text-slate-400" />
            )}
          </div>
          <span className={cn(
            "text-xs font-medium px-2.5 py-1 rounded-full border",
            isCompleted ? "bg-green-500/10 text-green-400 border-green-500/20" :
            course.status === 'In Progress' ? "bg-blue-500/10 text-blue-400 border-blue-500/20" :
            "bg-slate-500/10 text-slate-400 border-slate-500/20"
          )}>
            {course.status}
          </span>
        </div>

        <div className="mt-auto">
          <h3 className="text-lg font-semibold text-white mb-1 line-clamp-2">{course.title}</h3>
          <p className="text-sm text-slate-400 mb-4">{course.instructor}</p>
          
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-medium">
              <span className="text-slate-300">Progress</span>
              <span className="text-white">{course.progress}%</span>
            </div>
            <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
              <motion.div 
                className={cn(
                  "h-full rounded-full",
                  isCompleted ? "bg-green-500" : "bg-blue-500"
                )}
                initial={{ width: 0 }}
                animate={{ width: `${course.progress}%` }}
                transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
              />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
