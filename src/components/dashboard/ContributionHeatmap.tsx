import { Card } from '@/components/ui/Card';
import { cn } from '@/lib/utils';

// Generate 52 weeks of 7 days
const MOCK_HEATMAP_DATA = Array.from({ length: 52 * 7 }).map(() => {
  // Weighted random distribution heavily skewing towards 0
  const rand = Math.random();
  if (rand < 0.6) return 0; // No activity
  if (rand < 0.8) return 1; // Low activity
  if (rand < 0.95) return 2; // Medium activity
  return 3; // High activity
});

export function ContributionHeatmap() {
  return (
    <Card className="p-6 overflow-hidden">
      <div className="mb-6">
        <h3 className="text-[16px] font-medium text-foreground">Learning Consistency</h3>
        <p className="text-[13px] text-card-muted mt-1">Daily study habit map</p>
      </div>

      {/* Scrollable container for mobile */}
      <div className="overflow-x-auto pb-4 custom-scrollbar">
        <div className="min-w-[700px]">
          <div className="flex gap-1">
            {/* Days column */}
            <div className="flex flex-col gap-1 pr-2 text-[10px] text-card-muted mt-[18px]">
              <div className="h-3 leading-3">Mon</div>
              <div className="h-3 leading-3">Wed</div>
              <div className="h-3 leading-3">Fri</div>
            </div>

            {/* Grid */}
            <div className="flex-1">
              <div className="grid grid-cols-[repeat(52,minmax(0,1fr))] grid-rows-7 grid-flow-col gap-1">
                {MOCK_HEATMAP_DATA.map((intensity, i) => (
                  <div
                    key={i}
                    className={cn(
                      "w-3 h-3 rounded-[2px] transition-colors duration-200 cursor-help hover:ring-1 hover:ring-border",
                      intensity === 0 && "bg-white/[0.03]",
                      intensity === 1 && "bg-accent/30",
                      intensity === 2 && "bg-accent/60",
                      intensity === 3 && "bg-accent"
                    )}
                    title={`${intensity} hours of study`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}
