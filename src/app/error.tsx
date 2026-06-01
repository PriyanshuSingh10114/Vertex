'use client';

import { useEffect } from 'react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Dashboard Error:', error);
  }, [error]);

  return (
    <div className="flex h-[50vh] flex-col items-center justify-center space-y-4 rounded-xl border border-red-500/20 bg-red-500/10 p-8 text-center">
      <h2 className="text-xl font-bold text-red-400">Something went wrong!</h2>
      <p className="text-sm text-slate-300">
        Failed to load dashboard data. Please check your connection and try again.
      </p>
      <button
        onClick={() => reset()}
        className="rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
      >
        Try again
      </button>
    </div>
  );
}
