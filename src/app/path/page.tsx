export default function PathPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Learning Path</h1>
        <p className="text-sm text-card-muted mb-4">You&apos;re currently on the React Developer path.</p>
      </header>
      
      <div className="p-12 flex flex-col items-center justify-center text-center bg-card rounded-xl border border-border">
        <h3 className="text-lg font-medium text-foreground mb-2">Curriculum Roadmap</h3>
        <p className="text-card-muted max-w-sm">
          This section is currently under development. Soon you&apos;ll be able to view your prerequisites and upcoming modules.
        </p>
      </div>
    </div>
  );
}
