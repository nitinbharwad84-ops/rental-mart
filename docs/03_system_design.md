# System Design

## 1. Architecture Overview
The application follows a modern **Single Page Application (SPA)** architecture using **React** and **Vite**. It is designed to be highly modular, with a clear separation of concerns between state management, UI components, and business logic.

## 2. Component Hierarchy (High-Level)
- `App` (Router Provider)
    - `AuthProvider` (Zustand Auth Store)
    - `Layout` (Sidebar + Header + Content Area)
        - `Sidebar` (Navigation)
        - `Header` (Search + User Profile)
        - `MainContent`
            - `Dashboard` (Stats Cards + Status Summary)
            - `RentalList` (Filter Tabs + Search + Table/Cards)
            - `OrderList` (TBD)
            - `Login`
            - `Register`

## 3. State Management (Zustand)
Two primary stores will be used:
1. **`useAuthStore`**: Handles user authentication status and profile data.
2. **`useRentalStore`**: Handles rental order data, filtering logic, and search queries.

## 4. Routing (React Router)
- `/`: Dashboard (Protected)
- `/login`: Authentication
- `/register`: User Onboarding
- `/rentals`: Detailed Rental Management
- `/orders`: Order Management & History
- `/products`: Product Catalog & Inventory
- `/reporting`: Analytics & Reports
- `/settings`: User/Tenant Preferences

## 5. Styling Strategy
- **Global CSS Variables**: Define the palette (`--lightest-blue`, `--medium-blue`, `--dark-blue`) and typography.
- **Component-Specific CSS**: Vanilla CSS files imported into components to maintain encapsulation and performance.
- **Flexbox/Grid**: Primary layout engines for responsiveness.

## 6. Animations (Framer Motion)
- **Page Transitions**: Fade/Slide effects between routes.
- **List Item Entry**: Staggered animations for rental list items.
- **Micro-interactions**: Hover effects on buttons, tabs, and navigation items.
