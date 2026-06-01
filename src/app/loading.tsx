import { BentoGrid, BentoGridItem } from '@/components/dashboard/BentoGrid';
import { Card } from '@/components/ui/Card';

export default function Loading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-8 w-48 bg-slate-800 rounded-lg"></div>
      
      <BentoGrid>
        {/* Hero Card Skeleton */}
        <BentoGridItem className="col-span-1 md:col-span-2 lg:col-span-3">
          <Card className="p-8 h-64 bg-slate-800/50" />
        </BentoGridItem>

        {/* Activity Chart Skeleton */}
        <BentoGridItem className="col-span-1 lg:col-span-1">
          <Card className="p-6 h-64 bg-slate-800/50" />
        </BentoGridItem>

        {/* Course List Skeletons */}
        {[1, 2, 3, 4].map((i) => (
          <BentoGridItem key={i} className="col-span-1">
            <Card className="p-5 h-48 bg-slate-800/50" />
          </BentoGridItem>
        ))}
      </BentoGrid>
    </div>
  );
}
