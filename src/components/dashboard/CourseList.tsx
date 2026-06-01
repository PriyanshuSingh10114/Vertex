import { Course } from '@/types';
import { CourseCard } from './CourseCard';
import { BentoGridItem } from './BentoGrid';

export function CourseList({ courses }: { courses: Course[] }) {
  if (!courses || courses.length === 0) {
    return (
      <BentoGridItem className="col-span-1 md:col-span-2 lg:col-span-3">
        <div className="p-8 text-center text-slate-400 bg-slate-900/50 rounded-2xl border border-white/10">
          No courses available right now.
        </div>
      </BentoGridItem>
    );
  }

  return (
    <>
      {courses.map((course, index) => (
        <BentoGridItem key={course.id} className="col-span-1">
          <CourseCard course={course} index={index} />
        </BentoGridItem>
      ))}
    </>
  );
}
