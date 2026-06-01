import { Course } from '@/types';
import { CourseCard } from './CourseCard';
import { BentoGridItem } from './BentoGrid';

export function CourseList({ courses }: { courses: Course[] }) {
  if (!courses || courses.length === 0) {
    return (
      <BentoGridItem className="col-span-1 md:col-span-2 lg:col-span-3">
        <div className="p-8 text-center text-card-muted bg-card rounded-xl border border-border">
          No courses available right now.
        </div>
      </BentoGridItem>
    );
  }

  return (
    <>
      {courses.map((course) => (
        <BentoGridItem key={course.id} className="col-span-1">
          <CourseCard course={course} />
        </BentoGridItem>
      ))}
    </>
  );
}
