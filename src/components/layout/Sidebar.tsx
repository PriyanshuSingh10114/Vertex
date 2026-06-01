'use client';

import { cn } from '@/lib/utils';
import { Home, BookOpen, BarChart2, Settings, User } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

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
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r border-white/10 bg-slate-950/80 backdrop-blur-xl transition-transform -translate-x-full sm:translate-x-0">
      <div className="flex h-full flex-col px-4 py-8">
        <div className="mb-10 flex items-center gap-3 px-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500 shadow-lg shadow-blue-500/20">
            <BookOpen className="text-white h-5 w-5" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">StudentPro</span>
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
                  'relative flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors',
                  isActive ? 'text-white' : 'text-slate-400 hover:text-white hover:bg-white/5'
                )}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute inset-0 rounded-xl bg-blue-500/10 border border-blue-500/20"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <Icon className="relative z-10 h-5 w-5" />
                <span className="relative z-10">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        
        <div className="mt-auto rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 p-4 shadow-lg">
          <h4 className="font-semibold text-white">Pro Plan</h4>
          <p className="mt-1 text-xs text-indigo-100">Unlock premium courses and advanced analytics.</p>
          <button className="mt-3 w-full rounded-lg bg-white/20 py-2 text-xs font-medium text-white hover:bg-white/30 transition-colors">
            Upgrade Now
          </button>
        </div>
      </div>
    </aside>
  );
}
