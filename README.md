# Case Challenge - Frontend Developer
Table of Contents
- Task
- Setup and running instructions
- Architecture and design decisions
- Issues, limitations, or assumptions made.
- Features/Component Breakdown
- Bonus features
- Project Link


# Task
Recreate a dashboard design using React framework. We would love to see how you approach component structuring, layout, responsiveness, and styling

## 🚀 Setup & Running Instructions

### 1. Clone the repository
```bash
git clone https://github.com/cddunni/CC-Dashboard-design
cd CC-Dashboard-design
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

### 4. Run tests
```bash
npm run test
✅ The app uses Vite for faster build and hot module replacement.
```

## 🏗 Architecture & Design Decisions
⚙️ Tooling & Build System
  - Vite: Chosen for its lightning-fast development server and optimized builds. It's modern, supports ES modules out of the box, and integrates smoothly with React.
  - TypeScript: Enables type-safety and a better developer experience during the build process. It's strictly typed with full support for React types.
  - ESLint: Used for maintaining code quality and enforcing consistent standards. Includes plugins for React and React Hooks.
  - Framer Motion: For animations, including transitions (e.g., menu toggles and layout animations), ensuring fluid UI interactions.

🎨 Styling
  - Tailwind CSS v4: Utility-first CSS framework chosen for rapid UI development, responsiveness, and ease of maintenance. Includes the official @tailwindcss/postcss plugin for better PostCSS integration.

📈 Charts & Data Visualization
  - Chart.js + react-chartjs-2: For rendering responsive and customizable data visualizations. This was used to build both line and stacked bar charts.
    - Supports dual Y-axes and label intervals.

🧭 Routing
- React Router v7: Used for page navigation and nested route structures. Chosen for its simplicity and React-centric API.

🧱 Project Structure
```bash
src/
│
├── components/ folder containing all shared UI components.
│   └── /charts //folder containing all chart components for data visualization like LineChart, Barchart and ProgressBar
│   ├── Navbar.tsx        // Top bar with notifications and search input
│   ├── Sidebar.tsx  // contains menu for navigation of the main view
│   ├── DateFilter.tsx  // 
│   ├── Logo.tsx  // 
│   ├── Notifications.tsx  // 
│   ├── SearchInput.tsx  // 
├── /layout  // folder containing MainLayout, which manages the sidebar and responsive navbar setup.
│
├── pages/
│   └── /marketing      // folder for marketing page
│   └── index.tsx         // Entry point: becomes <MarketingPage />
│   └── SummaryCard.tsx  // helper component
│
├── utils/  // contains helpers, constants, dummy data, and utility functions
```

📱 Responsive Design Decisions
  - Responsive Sidebar: On small screens, the sidebar collapses and can be toggled with a hamburger menu.
  - Smooth Scrolling: Enabled for polished scroll behavior throughout the app.
  - Animated Hamburger Icon: Transitions to a close icon on menu toggle using Framer Motion.

## 🛠 Tech Stack
- React + TypeScript
- Tailwind CSS (styling)


