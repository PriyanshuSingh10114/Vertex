import { Card } from '@/components/ui/Card';
import { User } from '@/types';
import { Sparkles, Trophy } from 'lucide-react';

export function HeroCard({ user }: { user?: User }) {
  const userName = user?.name || 'Student';

  return (
    <Card className="p-8 flex flex-col justify-between h-full relative overflow-hidden group/hero">
      {/* Subtle radial mesh gradient */}
      <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] rounded-full bg-white/[0.02] blur-3xl pointer-events-none transition-opacity duration-500 group-hover/hero:bg-white/[0.04]" />
      
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/5 text-[11px] font-medium text-card-muted uppercase tracking-wider mb-6">
          <span>Top 5% Learner</span>
        </div>
        
        <h1 className="text-2xl font-medium tracking-tight text-foreground mb-2">
          Welcome back, {userName}.
        </h1>
        <p className="text-sm text-card-muted max-w-md leading-relaxed">
          You've logged 12 hours this week. Keep up the momentum to reach your monthly milestone by Friday.
        </p>
      </div>

      <div className="mt-8 flex items-center gap-3 relative z-10">
        <button className="px-5 py-2 rounded-md bg-foreground hover:bg-foreground/90 text-background text-sm font-medium transition-colors">
          Resume Learning
        </button>
        <button className="px-5 py-2 rounded-md bg-transparent hover:bg-white/5 text-foreground text-sm font-medium transition-colors border border-border">
          View Path
        </button>
      </div>
    </Card>
  );
}
