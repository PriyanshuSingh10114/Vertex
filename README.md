<div align="center">
  <br />
  <h1>✨ Vertex Student Dashboard ✨</h1>
  <p>
    <strong>A production-grade, highly performant learning management dashboard built as a Frontend Engineering Internship Assignment.</strong>
  </p>

  <p>
    <img src="https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js" alt="Next.js" />
    <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
    <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/Framer_Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
    <img src="https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white" alt="Supabase" />
    <img src="https://img.shields.io/badge/Recharts-22B573?style=for-the-badge&logo=react&logoColor=white" alt="Recharts" />
  </p>
</div>

<hr />

## 📖 Overview

Vertex is a beautifully designed, data-driven student dashboard application. Developed as a **Frontend Engineering Internship Assignment**, the primary goal of this project was to demonstrate proficiency in modern React architecture, strict TypeScript typing, layout stability, and fluid GPU-accelerated animations—all while avoiding over-engineered abstractions.

## 🚀 Key Features

- **Dark Mode Bento Grid Design:** A stunning, premium dark-themed UI relying on strict CSS variables and a responsive CSS Grid layout.
- **Server-Side Data Fetching:** Utilizes Next.js 15 App Router Server Components to securely fetch course and activity data from Supabase without exposing API keys.
- **Real-time Course Filtering:** Lightning-fast client-side search and status filtering (In Progress, Completed, Not Started).
- **GPU-Accelerated Micro-Interactions:** Smooth hover states and layout transitions powered by Framer Motion's spring physics.
- **Flawless Layout Stability (Zero CLS):** Employs a custom `ResizeObserver` chart wrapper to perfectly render Recharts inside animated grids without throwing `-1 dimension` hydration errors.
- **Graceful Fallbacks:** The application seamlessly falls back to high-quality mock data if Supabase credentials are missing, ensuring a flawless developer experience out-of-the-box.

---

## 📐 Architecture & Engineering Decisions

### 1. Server vs. Client Components
The application strictly adheres to the Next.js App Router paradigm. Data fetching occurs on the server (`app/page.tsx`, `app/courses/page.tsx`), stripping massive payload sizes from the client bundle. Interactivity is pushed entirely to the leaf nodes (`'use client'`) where strictly necessary (e.g., search inputs, local storage persistence).

### 2. Custom Chart Engine Wrapper
A major technical achievement in this dashboard is the custom `<ChartWrapper>` component. Recharts natively struggles with Next.js SSR and CSS Grid container measurements. Instead of relying on buggy responsive containers, I engineered a native `ResizeObserver` that measures exact physical pixels and guarantees mathematical rendering only when `width > 0`.

### 3. Centralized Design System
Instead of hardcoding Tailwind classes like `bg-slate-900`, the entire application leverages semantic CSS variables (`--background`, `--foreground`, `--accent`). This enforces strict visual consistency and allows for instantaneous theme swapping.

---

## 🛠️ Getting Started

Follow these steps to run the dashboard locally on your machine.

### Prerequisites
- Node.js (v18 or higher)
- npm or pnpm

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/PriyanshuSingh10114/Vertex.git
   cd vertex
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Copy the example environment file and add your Supabase credentials:
   ```bash
   cp .env.local.example .env.local
   ```
   *Note: If you skip this step, the app will safely fall back to Mock Data and run perfectly!*

4. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📱 Responsive Layout Strategy

- **Desktop (1024px+):** Persistent left sidebar with a full 4-column Bento Grid layout.
- **Tablet (768px - 1024px):** Adjusted typography with a 2-column grid.
- **Mobile (<768px):** Sidebar collapses into a mobile-optimized Bottom Navigation bar, utilizing standard iOS/Android safe-area inset padding (`pb-[env(safe-area-inset-bottom)]`) to prevent OS gesture overlap.

---

## 👨‍💻 Author

**Priyanshu Singh**  
*Frontend Engineering Intern Candidate*  

- GitHub: [@PriyanshuSingh10114](https://github.com/PriyanshuSingh10114)
- Assignment: Vertex Dashboard Architecture & Implementation

<br />

<div align="center">
  <sub>Built with ❤️ for a seamless learning experience.</sub>
</div>
