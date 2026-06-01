export default function Loading() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="h-8 w-48 bg-card border border-border rounded-lg"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {/* Hero Card Skeleton */}
        <div className="col-span-1 md:col-span-2 lg:col-span-3">
          <div className="rounded-xl border border-border bg-card p-8 h-64" />
        </div>

        {/* Activity Chart Skeleton */}
        <div className="col-span-1 lg:col-span-1">
          <div className="rounded-xl border border-border bg-card p-6 h-64" />
        </div>

        {/* Course List Skeletons */}
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="col-span-1">
            <div className="rounded-xl border border-border bg-card p-5 h-48" />
          </div>
        ))}
      </div>
    </div>
  );
}
