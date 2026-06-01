'use client';

import { cn } from '@/lib/utils';
import { Home, BookOpen, BarChart2, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { icon: Home, label: 'Dashboard', href: '/' },
  { icon: BookOpen, label: 'Courses', href: '/courses' },
  { icon: BarChart2, label: 'Activity', href: '/activity' },
  { icon: User, label: 'Profile', href: '/profile' },
  { icon: Settings, label: 'Settings', href: '/settings' },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex fixed left-0 top-0 z-40 h-screen w-64 flex-col border-r border-border bg-background/80 backdrop-blur-xl">
      <div className="flex h-full flex-col px-4 py-8">
        <div className="mb-10 flex items-center gap-3 px-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent shadow-lg shadow-accent/20">
            <BookOpen className="text-white h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-foreground">StudentPro</span>
        </div>

        <nav className="flex-1 space-y-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                  isActive 
                    ? 'bg-white/[0.04] border border-white/[0.08] text-foreground' 
                    : 'text-card-muted hover:text-foreground hover:bg-white/5 border border-transparent'
                )}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="mt-auto rounded-xl bg-card border border-border p-4">
          <h4 className="text-[13px] font-medium text-foreground">Pro Plan</h4>
          <p className="mt-1 text-[12px] text-card-muted leading-relaxed">Unlock premium courses and advanced analytics.</p>
          <button className="mt-4 w-full rounded-md bg-foreground py-2 text-xs font-medium text-background hover:bg-foreground/90 transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
}
