import { BentoGrid, BentoGridItem } from '@/components/dashboard/BentoGrid';
import { Card } from '@/components/ui/Card';
import { AchievementCard } from '@/components/dashboard/AchievementCard';
import { User, Mail, Award, Compass, Code, Terminal } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h1 className="text-2xl font-bold text-foreground">Student Profile</h1>
        <p className="text-card-muted text-sm mt-1">Manage your identity and view achievements.</p>
      </header>

      {/* Hero Profile Card */}
      <Card className="p-8 flex flex-col md:flex-row items-center md:items-start gap-8 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/[0.04] via-transparent to-transparent">
        <div className="w-24 h-24 rounded-full bg-border flex items-center justify-center flex-shrink-0 border-2 border-background ring-2 ring-border">
          <User className="w-10 h-10 text-card-muted" />
        </div>
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold text-foreground">Alex Johnson</h2>
          <div className="flex items-center justify-center md:justify-start gap-2 mt-2 text-card-muted text-sm">
            <Mail className="w-4 h-4" />
            <span>alex.johnson@example.com</span>
          </div>
          
          <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
            <div className="px-4 py-2 bg-white/[0.03] rounded-lg border border-border">
              <span className="block text-[11px] text-card-muted uppercase tracking-wider font-medium">Total Hours</span>
              <span className="text-lg font-bold text-foreground">142</span>
            </div>
            <div className="px-4 py-2 bg-white/[0.03] rounded-lg border border-border">
              <span className="block text-[11px] text-card-muted uppercase tracking-wider font-medium">Courses</span>
              <span className="text-lg font-bold text-foreground">6</span>
            </div>
            <div className="px-4 py-2 bg-accent/10 rounded-lg border border-accent/20">
              <span className="block text-[11px] text-accent uppercase tracking-wider font-medium">Current Streak</span>
              <span className="text-lg font-bold text-accent">14 Days</span>
            </div>
          </div>
        </div>
      </Card>

      {/* Achievements Section */}
      <div>
        <h3 className="text-lg font-medium text-foreground mb-4">Earned Achievements</h3>
        <BentoGrid>
          <BentoGridItem className="col-span-1">
            <AchievementCard 
              title="Top 5% Learner" 
              description="Ranked in the top 5% of active students this month."
              icon={<Award className="w-6 h-6 text-yellow-500" />}
            />
          </BentoGridItem>
          <BentoGridItem className="col-span-1">
            <AchievementCard 
              title="React Explorer" 
              description="Completed all foundational React courses."
              icon={<Code className="w-6 h-6 text-[#61DAFB]" />}
            />
          </BentoGridItem>
          <BentoGridItem className="col-span-1">
            <AchievementCard 
              title="TypeScript Master" 
              description="Passed the advanced generics assessment."
              icon={<Terminal className="w-6 h-6 text-[#3178C6]" />}
            />
          </BentoGridItem>
          <BentoGridItem className="col-span-1">
            <AchievementCard 
              title="Pathfinder" 
              description="Created a custom learning curriculum."
              icon={<Compass className="w-6 h-6 text-purple-400" />}
            />
          </BentoGridItem>
        </BentoGrid>
      </div>
    </div>
  );
}
