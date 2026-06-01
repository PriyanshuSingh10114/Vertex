'use client';

import { Card } from '@/components/ui/Card';
import { Activity } from '@/types';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { motion } from 'framer-motion';

export function ActivityChart({ data }: { data: Activity[] }) {
  // Format data for chart
  const chartData = data.map(item => ({
    name: new Date(item.date).toLocaleDateString('en-US', { weekday: 'short' }),
    hours: item.hours
  }));

  return (
    <Card className="p-6 h-full flex flex-col">
      <div className="mb-6">
        <h3 className="text-[16px] font-medium text-foreground">Learning Activity</h3>
        <p className="text-[13px] text-card-muted mt-1">Hours logged this week</p>
      </div>
      
      <div className="flex-1 min-h-[200px] w-full mt-auto">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#a1a1aa', fontSize: 12, fontWeight: 500 }}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#a1a1aa', fontSize: 12 }}
            />
            <Tooltip 
              cursor={{ fill: '#27272a', opacity: 0.5 }}
              contentStyle={{ 
                backgroundColor: '#111111', 
                border: '1px solid #27272a',
                borderRadius: '6px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.5)'
              }}
              itemStyle={{ color: '#ededed', fontSize: '13px' }}
              labelStyle={{ color: '#a1a1aa', fontSize: '12px', marginBottom: '4px' }}
            />
            <Bar 
              dataKey="hours" 
              fill="#3291ff" 
              radius={[2, 2, 0, 0]} 
              animationDuration={1000}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </Card>
  );
}
