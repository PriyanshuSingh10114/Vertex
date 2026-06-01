# Vertex Student Dashboard

A modern, responsive student dashboard built as a frontend engineering internship assignment. The goal of this project was to architect a clean, maintainable, and highly performant application using modern React patterns without over-engineering the solution.

## 🛠 Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Database:** Supabase (@supabase/ssr)
- **Icons:** Lucide React

## 📐 Architecture & Design Decisions

### 1. Server & Client Components
The application strictly adheres to the Next.js App Router paradigm:
- **Server Components (Default):** Pages like `app/page.tsx` and `app/courses/page.tsx` are Server Components. They securely fetch data from Supabase without exposing credentials to the browser, significantly reducing the client JavaScript bundle.
- **Client Components (`'use client'`):** Interactivity is pushed to the leaves of the tree. Components like `<CourseCatalog>` (which handles search state) and `<SettingsForm>` (which handles `localStorage`) are explicitly marked as Client Components.

### 2. Design System
I implemented a strict "Dark Mode" design system inspired by tools like Vercel and Linear:
- **CSS Variables:** All colors (`--background`, `--foreground`, `--card`, `--border`) are managed via CSS variables in `globals.css` rather than hardcoded Tailwind classes, ensuring total consistency.
- **Bento Grid:** The layout uses a responsive CSS Grid ("Bento" style) that shifts gracefully from a single column on mobile to 4 columns on desktop.
- **GPU Animations:** All animations (hover states, progress bars) exclusively target `transform` and `opacity` to ensure smooth 60fps performance without triggering costly browser layout recalculations.

### 3. Graceful Degradation
To make the dashboard resilient:
- If the Supabase environment variables are missing, the data-fetching layer safely falls back to high-quality **Mock Data**. This allows developers to clone and run the project immediately without needing to provision a database.

## 🚀 Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd vertex
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment (Optional):**
   If you want to use live data, copy the template and add your Supabase credentials:
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📱 Responsiveness
- **Desktop (>1024px):** Persistent left sidebar with full Bento Grid layout.
- **Tablet (768px-1024px):** Scaled typography and two-column grid.
- **Mobile (<768px):** Sidebar is hidden and replaced by a mobile-optimized Bottom Navigation bar. Safe-area padding is applied to prevent overlap with OS gestures.

## 🤔 Challenges Faced

One notable challenge was dealing with Next.js SSR hydration when rendering charts. Because Recharts relies on DOM measurements (`getBoundingClientRect`) to size its `<ResponsiveContainer>`, it would throw `-1` dimension errors during the server render phase. I solved this by implementing an `isMounted` hook to strictly defer the chart rendering to the client, entirely eliminating the hydration warnings while maintaining layout stability.
