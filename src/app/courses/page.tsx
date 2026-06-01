import { createServerComponentClient } from '@/lib/supabase/server';
import { Course } from '@/types';
import { CourseCatalog } from '@/components/dashboard/CourseCatalog';
import { BentoGrid, BentoGridItem } from '@/components/dashboard/BentoGrid';
import { Card } from '@/components/ui/Card';
import { BookOpen, CheckCircle2, PlayCircle } from 'lucide-react';

const MOCK_COURSES: Course[] = [
  { id: '1', created_at: '', title: 'Advanced React Patterns', instructor: 'Dan Abramov', progress: 75, thumbnail_url: null, status: 'In Progress' },
  { id: '2', created_at: '', title: 'UI/UX Masterclass', instructor: 'Gary Simon', progress: 100, thumbnail_url: null, status: 'Completed' },
  { id: '3', created_at: '', title: 'TypeScript Fundamentals', instructor: 'Matt Pocock', progress: 30, thumbnail_url: null, status: 'In Progress' },
  { id: '4', created_at: '', title: 'Next.js App Router', instructor: 'Lee Robinson', progress: 0, thumbnail_url: null, status: 'Not Started' },
  { id: '5', created_at: '', title: 'Framer Motion Magic', instructor: 'Matt Perry', progress: 10, thumbnail_url: null, status: 'In Progress' },
  { id: '6', created_at: '', title: 'Tailwind CSS Pro', instructor: 'Adam Wathan', progress: 100, thumbnail_url: null, status: 'Completed' },
];

export default async function CoursesPage() {
  let courses = MOCK_COURSES;

  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      const supabase = await createServerComponentClient();
      const res = await supabase.from('courses').select('*').order('created_at', { ascending: false });
      if (res.data && res.data.length > 0) courses = res.data;
    }
  } catch (error) {
    console.error('Failed to fetch from Supabase, using mock data.', error);
  }

  const total = courses.length;
  const completed = courses.filter(c => c.status === 'Completed').length;
  const inProgress = courses.filter(c => c.status === 'In Progress').length;

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h1 className="text-2xl font-bold text-foreground">Course Catalog</h1>
        <p className="text-card-muted text-sm mt-1">Manage your active and completed courses.</p>
      </header>

      {/* Stats Row */}
      <BentoGrid>
        <BentoGridItem className="col-span-1">
          <Card className="p-6 flex items-center space-x-4">
            <div className="p-3 bg-white/[0.03] rounded-lg border border-border">
              <BookOpen className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <p className="text-sm text-card-muted font-medium">Total Courses</p>
              <p className="text-2xl font-bold text-foreground mt-1">{total}</p>
            </div>
          </Card>
        </BentoGridItem>
        <BentoGridItem className="col-span-1">
          <Card className="p-6 flex items-center space-x-4">
            <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
              <PlayCircle className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-sm text-card-muted font-medium">In Progress</p>
              <p className="text-2xl font-bold text-foreground mt-1">{inProgress}</p>
            </div>
          </Card>
        </BentoGridItem>
        <BentoGridItem className="col-span-1 md:col-span-2 lg:col-span-1">
          <Card className="p-6 flex items-center space-x-4">
            <div className="p-3 bg-white/[0.03] rounded-lg border border-border">
              <CheckCircle2 className="w-5 h-5 text-card-muted" />
            </div>
            <div>
              <p className="text-sm text-card-muted font-medium">Completed</p>
              <p className="text-2xl font-bold text-foreground mt-1">{completed}</p>
            </div>
          </Card>
        </BentoGridItem>
      </BentoGrid>

      {/* Interactive Catalog */}
      <CourseCatalog courses={courses} />
    </div>
  );
}
