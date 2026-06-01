import { Database } from './database.types';

export type Course = Database['public']['Tables']['courses']['Row'];
export type Activity = Database['public']['Tables']['activity']['Row'];
export type User = Database['public']['Tables']['users']['Row'];
