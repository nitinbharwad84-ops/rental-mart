# Requirements Specification

## 1. Functional Requirements

### 1.1 Authentication & Authorization
- **User Registration**: Support for new business owners to create an account.
- **User Login**: Secure authentication for existing users.
- **Password Management**: "Forgot Password" flow for credential recovery.
- **Multi-Tenancy**: Users should only see data associated with their own organization (mocked in Phase 1).

### 1.2 Dashboard & Rental Management
- **Dashboard Overview**: Visual summary of total rental orders and statuses.
- **Rental List**: A detailed list of rental orders including:
    - Customer Name
    - Order ID (e.g., R0001)
    - Amount (₹)
    - Status Tag (Quotation, Reserved, Pickedup, Late Pickup)
    - Timestamp (Pickup time)
- **Status Filtering**: Ability to filter the rental list by 'All', 'Quotation', 'Reserved', and 'Pickedup'.
- **Search**: Ability to search for specific rental orders (Search bar in header/content).

### 1.3 Tenant Management
- **Sidebar Navigation**: Quick access to Dashboard, Rental, Order, Products, Reporting, and Settings.
- **Profile Management**: Display current user profile (e.g., "Adam").

## 2. Non-Functional Requirements

### 2.1 Performance
- **Fast Load Times**: Optimized assets and efficient React component rendering.
- **Responsive Interactions**: Minimal latency on clicks and transitions.

### 2.2 UI/UX
- **Premium Design**: Implementation of a high-end, blue-themed aesthetic.
- **Responsiveness**: Support for Desktop (1440px+), Tablet (768px+), and Mobile (375px+).
- **Animations**: Use of Framer Motion for smooth transitions between pages and list interactions.

### 2.3 Maintainability
- **Clean Code**: Use of standard React patterns and modular component architecture.
- **State Management**: Centralized state using Zustand for predictable data flow.

## 3. Technical Constraints
- **Framework**: Vite + React 19.
- **Styling**: Vanilla CSS (as per Antigravity instructions).
- **State Management**: Zustand.
- **Routing**: React Router.
- **Icons**: Lucide React.
- **Animations**: Framer Motion.
- **Data**: Purely mock data for the initial implementation.
