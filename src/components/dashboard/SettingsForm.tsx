'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/Card';

export function SettingsForm() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [marketingEmails, setMarketingEmails] = useState(false);
  const [theme, setTheme] = useState('dark');
  const [saved, setSaved] = useState(false);

  // Load from local storage on mount
  useEffect(() => {
    const savedEmail = localStorage.getItem('settings_email');
    const savedMarketing = localStorage.getItem('settings_marketing');
    
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (savedEmail !== null) setEmailNotifications(savedEmail === 'true');
    if (savedMarketing !== null) setMarketingEmails(savedMarketing === 'true');
  }, []);

  const handleSave = () => {
    localStorage.setItem('settings_email', String(emailNotifications));
    localStorage.setItem('settings_marketing', String(marketingEmails));
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="space-y-6">
      <Card className="p-6">
        <h3 className="text-lg font-medium text-foreground mb-4 border-b border-border pb-4">Appearance</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-card-muted mb-2">Interface Theme</label>
            <select 
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full sm:w-64 px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground focus:outline-none focus:border-accent/50"
            >
              <option value="dark">Dark Mode (Default)</option>
              <option value="light" disabled>Light Mode (Coming Soon)</option>
              <option value="system" disabled>System Preference</option>
            </select>
          </div>
        </div>
      </Card>

      <Card className="p-6">
        <h3 className="text-lg font-medium text-foreground mb-4 border-b border-border pb-4">Notifications</h3>
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Course Updates</p>
              <p className="text-[13px] text-card-muted mt-1">Receive emails when your enrolled courses are updated.</p>
            </div>
            <button 
              onClick={() => setEmailNotifications(!emailNotifications)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${emailNotifications ? 'bg-accent' : 'bg-border'}`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${emailNotifications ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">Marketing & Promos</p>
              <p className="text-[13px] text-card-muted mt-1">Receive offers and platform news.</p>
            </div>
            <button 
              onClick={() => setMarketingEmails(!marketingEmails)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${marketingEmails ? 'bg-accent' : 'bg-border'}`}
            >
              <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${marketingEmails ? 'translate-x-6' : 'translate-x-1'}`} />
            </button>
          </div>
        </div>
      </Card>

      <div className="flex justify-end items-center gap-4">
        {saved && <span className="text-sm text-green-500 font-medium">Settings saved locally!</span>}
        <button 
          onClick={handleSave}
          className="px-6 py-2 bg-foreground text-background font-medium rounded-lg hover:bg-foreground/90 transition-colors"
        >
          Save Preferences
        </button>
      </div>
    </div>
  );
}
