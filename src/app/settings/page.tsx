export default function SettingsPage() {
  return (
    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-8">
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-card-muted text-sm mt-1">Configure your dashboard and account security.</p>
      </header>
      
      <div className="p-12 flex flex-col items-center justify-center text-center bg-card rounded-xl border border-border">
        <h3 className="text-lg font-medium text-foreground mb-2">Application Settings</h3>
        <p className="text-card-muted max-w-sm">
          This section is currently under development. Soon you'll be able to configure notifications, billing, and system preferences.
        </p>
      </div>
    </div>
  );
}
