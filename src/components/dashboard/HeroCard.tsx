import { Card } from '@/components/ui/Card';
import { User } from '@/types';
import { Sparkles, Trophy } from 'lucide-react';

export function HeroCard({ user }: { user?: User }) {
  const userName = user?.name || 'Student';

  return (
    <Card className="p-8 flex flex-col justify-between h-full bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-blue-500/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-8 opacity-20 pointer-events-none">
        <Sparkles className="w-32 h-32 text-blue-400" />
      </div>
      
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-blue-200 mb-6">
          <Trophy className="w-3.5 h-3.5 text-yellow-500" />
          <span>Top 5% of learners this week</span>
        </div>
        
        <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
          Welcome back, {userName}!
        </h1>
        <p className="text-slate-400 max-w-md">
          You've spent 12 hours learning this week. Keep up the great work and you'll reach your monthly goal by Friday.
        </p>
      </div>

      <div className="mt-8 flex items-center gap-4 relative z-10">
        <button className="px-6 py-2.5 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium transition-colors shadow-lg shadow-blue-500/25">
          Resume Learning
        </button>
        <button className="px-6 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-white font-medium transition-colors border border-white/10">
          View Path
        </button>
      </div>
    </Card>
  );
}
