export default function CoursesPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Courses</h1>
        <p className="text-card-muted text-sm mt-1">Manage your active and completed courses.</p>
      </header>
      
      <div className="p-12 flex flex-col items-center justify-center text-center bg-card rounded-xl border border-border">
        <h3 className="text-lg font-medium text-foreground mb-2">Course Catalog</h3>
        <p className="text-card-muted max-w-sm">
          This section is currently under development. Soon you'll be able to browse and enroll in new courses here.
        </p>
      </div>
    </div>
  );
}
