import { SettingsForm } from '@/components/dashboard/SettingsForm';

export default function SettingsPage() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500 max-w-3xl">
      <header>
        <h1 className="text-2xl font-bold text-foreground">Settings</h1>
        <p className="text-card-muted text-sm mt-1">Manage your account preferences and application settings.</p>
      </header>

      <SettingsForm />
    </div>
  );
}
