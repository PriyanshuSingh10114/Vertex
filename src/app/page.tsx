import { BentoGrid, BentoGridItem } from '@/components/dashboard/BentoGrid';
import { HeroCard } from '@/components/dashboard/HeroCard';
import { ActivityChart } from '@/components/dashboard/ActivityChart';
import { CourseList } from '@/components/dashboard/CourseList';
import { createServerComponentClient } from '@/lib/supabase/server';
import { Course, Activity, User } from '@/types';

// Mock Data Fallbacks (for when Supabase isn't configured yet)
const MOCK_USER: User = { id: '1', name: 'Alex Johnson', role: 'student', avatar_url: null };
const MOCK_COURSES: Course[] = [
  { id: '1', created_at: '', title: 'Advanced React Patterns', instructor: 'Dan Abramov', progress: 75, thumbnail_url: null, status: 'In Progress' },
  { id: '2', created_at: '', title: 'UI/UX Masterclass', instructor: 'Gary Simon', progress: 100, thumbnail_url: null, status: 'Completed' },
  { id: '3', created_at: '', title: 'TypeScript Fundamentals', instructor: 'Matt Pocock', progress: 30, thumbnail_url: null, status: 'In Progress' },
  { id: '4', created_at: '', title: 'Next.js App Router', instructor: 'Lee Robinson', progress: 0, thumbnail_url: null, status: 'Not Started' },
];
const MOCK_ACTIVITY: Activity[] = [
  { id: '1', date: '2024-05-20', hours: 2 },
  { id: '2', date: '2024-05-21', hours: 4 },
  { id: '3', date: '2024-05-22', hours: 1.5 },
  { id: '4', date: '2024-05-23', hours: 3 },
  { id: '5', date: '2024-05-24', hours: 5 },
  { id: '6', date: '2024-05-25', hours: 2 },
  { id: '7', date: '2024-05-26', hours: 4.5 },
];

export default async function DashboardPage() {
  const supabase = await createServerComponentClient();
  
  let user = MOCK_USER;
  let courses = MOCK_COURSES;
  let activity = MOCK_ACTIVITY;

  try {
    // Attempt to fetch from Supabase if env vars are present
    if (process.env.NEXT_PUBLIC_SUPABASE_URL) {
      const [coursesRes, activityRes] = await Promise.all([
        supabase.from('courses').select('*').order('created_at', { ascending: false }),
        supabase.from('activity').select('*').order('date', { ascending: true })
      ]);

      if (coursesRes.data && coursesRes.data.length > 0) courses = coursesRes.data;
      if (activityRes.data && activityRes.data.length > 0) activity = activityRes.data;
    }
  } catch (error) {
    console.error('Failed to fetch from Supabase, using mock data.', error);
  }

  return (
    <div className="space-y-6">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Dashboard</h1>
        <p className="text-card-muted text-sm mt-1">Track your progress and activity.</p>
      </header>

      <BentoGrid>
        <BentoGridItem className="col-span-1 md:col-span-2 lg:col-span-3">
          <HeroCard 
            greeting={`Welcome back, ${user.name}.`}
            description="You've logged 12 hours this week. Keep up the momentum to reach your monthly milestone by Friday."
            badgeText="Top 5% Learner"
            actions={[
              { label: 'Resume Learning', primary: true, href: '/courses' },
              { label: 'View Path', primary: false, href: '/path' }
            ]}
          />
        </BentoGridItem>

        <BentoGridItem className="col-span-1 lg:col-span-1">
          <ActivityChart data={activity} />
        </BentoGridItem>

        <CourseList courses={courses} />
      </BentoGrid>
    </div>
  );
}
