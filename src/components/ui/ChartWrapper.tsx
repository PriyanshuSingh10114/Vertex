'use client';

import { ReactNode, useEffect, useRef, useState } from 'react';

interface ChartWrapperProps {
  children: (dimensions: { width: number; height: number }) => ReactNode;
}

export function ChartWrapper({ children }: ChartWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const element = containerRef.current;
    if (!element) return;

    // We measure the element immediately on mount
    const rect = element.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      setDimensions({ width: rect.width, height: rect.height });
    }

    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        // Use contentRect which represents the actual paintable area inside padding
        const { width, height } = entry.contentRect;
        
        // Strict guard to prevent Recharts -1 / 0 layout calculation warnings
        if (width > 0 && height > 0) {
          setDimensions({ width, height });
        }
      }
    });

    observer.observe(element);
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className="w-full h-full min-h-[200px]">
      {dimensions.width > 0 && dimensions.height > 0 ? (
        children(dimensions)
      ) : null}
    </div>
  );
}
