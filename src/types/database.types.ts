export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      courses: {
        Row: {
          id: string
          created_at: string
          title: string
          instructor: string
          progress: number
          thumbnail_url: string | null
          status: 'In Progress' | 'Completed' | 'Not Started'
        }
        Insert: {
          id?: string
          created_at?: string
          title: string
          instructor: string
          progress?: number
          thumbnail_url?: string | null
          status?: 'In Progress' | 'Completed' | 'Not Started'
        }
        Update: {
          id?: string
          created_at?: string
          title?: string
          instructor?: string
          progress?: number
          thumbnail_url?: string | null
          status?: 'In Progress' | 'Completed' | 'Not Started'
        }
        Relationships: []
      }
      activity: {
        Row: {
          id: string
          date: string
          hours: number
        }
        Insert: {
          id?: string
          date: string
          hours: number
        }
        Update: {
          id?: string
          date?: string
          hours?: number
        }
        Relationships: []
      }
      users: {
        Row: {
          id: string
          name: string
          role: string
          avatar_url: string | null
        }
        Insert: {
          id?: string
          name: string
          role?: string
          avatar_url?: string | null
        }
        Update: {
          id?: string
          name?: string
          role?: string
          avatar_url?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
