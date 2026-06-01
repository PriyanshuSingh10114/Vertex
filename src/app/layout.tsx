import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Sidebar } from '@/components/layout/Sidebar';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Student Dashboard',
  description: 'A premium student dashboard built with Next.js and Supabase',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={cn(inter.className, 'min-h-screen bg-slate-950 text-slate-50 selection:bg-blue-500/30')}>
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <main className="flex-1 overflow-y-auto pl-0 sm:pl-64">
            <div className="mx-auto max-w-7xl p-4 sm:p-8">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
