'use client';

import { useState } from 'react';
import { Course } from '@/types';
import { CourseCard } from './CourseCard';
import { BentoGrid, BentoGridItem } from './BentoGrid';
import { Search, Filter } from 'lucide-react';
import { motion } from 'framer-motion';

export function CourseCatalog({ courses }: { courses: Course[] }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');

  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === 'All' || course.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-card-muted" />
          </div>
          <input
            type="text"
            placeholder="Search courses or instructors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors"
          />
        </div>

        {/* Status Filter */}
        <div className="relative w-full sm:w-48">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Filter className="h-4 w-4 text-card-muted" />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-card border border-border rounded-lg text-sm text-foreground appearance-none focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-colors"
          >
            <option value="All">All Statuses</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="Not Started">Not Started</option>
          </select>
        </div>
      </div>

      {/* Results Grid */}
      {filteredCourses.length > 0 ? (
        <BentoGrid>
          {filteredCourses.map((course) => (
            <BentoGridItem key={course.id} className="col-span-1 md:col-span-1">
              <CourseCard course={course} />
            </BentoGridItem>
          ))}
        </BentoGrid>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          className="p-12 text-center bg-card rounded-xl border border-border"
        >
          <p className="text-card-muted text-sm">No courses match your search criteria.</p>
        </motion.div>
      )}
    </div>
  );
}
