import { BentoGrid, BentoGridItem } from '@/components/dashboard/BentoGrid';
import { Card } from '@/components/ui/Card';
import { Clock, Flame, Trophy } from 'lucide-react';
import { ContributionHeatmap } from '@/components/dashboard/ContributionHeatmap';

export default function ActivityPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header>
        <h1 className="text-2xl font-bold text-foreground">Activity Analytics</h1>
        <p className="text-card-muted text-sm mt-1">Detailed breakdown of your learning habits.</p>
      </header>

      {/* Top Stats */}
      <BentoGrid>
        <BentoGridItem className="col-span-1">
          <Card className="p-6 flex items-center space-x-4">
            <div className="p-3 bg-white/[0.03] rounded-lg border border-border">
              <Clock className="w-5 h-5 text-foreground" />
            </div>
            <div>
              <p className="text-sm text-card-muted font-medium">Weekly Hours</p>
              <p className="text-2xl font-bold text-foreground mt-1">12.5h</p>
            </div>
          </Card>
        </BentoGridItem>
        <BentoGridItem className="col-span-1">
          <Card className="p-6 flex items-center space-x-4">
            <div className="p-3 bg-accent/10 rounded-lg border border-accent/20">
              <Flame className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="text-sm text-card-muted font-medium">Learning Streak</p>
              <p className="text-2xl font-bold text-foreground mt-1">14 Days</p>
            </div>
          </Card>
        </BentoGridItem>
        <BentoGridItem className="col-span-1 md:col-span-2 lg:col-span-1">
          <Card className="p-6 flex items-center space-x-4">
            <div className="p-3 bg-white/[0.03] rounded-lg border border-border">
              <Trophy className="w-5 h-5 text-card-muted" />
            </div>
            <div>
              <p className="text-sm text-card-muted font-medium">Courses Completed</p>
              <p className="text-2xl font-bold text-foreground mt-1">2</p>
            </div>
          </Card>
        </BentoGridItem>
      </BentoGrid>

      {/* Heatmap Section */}
      <div className="w-full">
        <ContributionHeatmap />
      </div>

      {/* Summary Cards */}
      <BentoGrid>
        <BentoGridItem className="col-span-1 md:col-span-2">
          <Card className="p-6 h-full">
            <h3 className="text-[16px] font-medium text-foreground mb-4">Weekly Summary</h3>
            <p className="text-sm text-card-muted mb-4">
              You've studied 3 hours more than last week. Your primary focus was the Next.js App Router course.
            </p>
            <div className="flex items-center space-x-2 text-sm text-accent">
              <div className="w-2 h-2 rounded-full bg-accent" />
              <span>+32% from previous period</span>
            </div>
          </Card>
        </BentoGridItem>
        <BentoGridItem className="col-span-1 lg:col-span-1">
          <Card className="p-6 h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/[0.04] via-transparent to-transparent">
            <h3 className="text-[16px] font-medium text-foreground mb-4">Monthly Goal</h3>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-card-muted">45 hours</span>
              <span className="text-foreground font-medium">60 hours</span>
            </div>
            <div className="h-1.5 w-full bg-border rounded-full overflow-hidden">
              <div className="h-full bg-accent w-[75%] rounded-full" />
            </div>
            <p className="text-xs text-card-muted mt-3">You are on track to hit your monthly study goal.</p>
          </Card>
        </BentoGridItem>
      </BentoGrid>
    </div>
  );
}
