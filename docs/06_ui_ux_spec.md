# UI/UX Specification

## 1. Design System

### 1.1 Color Palette (Mandatory)
- **Primary (Dark Vibrant Blue)**: `#1886FF` (RGB: 24, 134, 255)
- **Secondary (Medium-light Sky Blue)**: `#62D0FF` (RGB: 98, 208, 255)
- **Background/Surface (Lightest Blue)**: `#E4F9FF` (RGB: 228, 249, 255)
- **Text (Primary)**: `#121212` (From SVG, used for readability on light backgrounds)
- **Text (Secondary)**: `#555555`
- **Success**: `#4CAF50`
- **Warning/Late**: `#FF8383` (From SVG)

### 1.2 Typography
- **Font Family**: 'Outfit' or 'Inter' (Fallback: sans-serif)
- **Headings**: Semi-bold to Bold.
- **Body**: Regular (16px base).

### 1.3 UI Components
- **Buttons**: Rounded (8px), gradient or solid `#1886FF`, hover lift effect.
- **Inputs**: Clean, border `#62D0FF`, focus ring.
- **Cards**: Subtle shadow, border-radius 12px, white background.
- **Tabs**: Active state indicated by underline or background fill in `#1886FF`.

## 2. Visual Hierarchy
- **Sidebar**: Fixed width (260px) on desktop, dark vibrant blue background or light blue with dark icons.
- **Header**: High visibility, containing the search bar and profile section.
- **Content**: White or lightest blue background to contrast with primary accents.

## 3. Responsive Breakpoints
- **Desktop**: 1024px and above (Sidebar expanded).
- **Tablet**: 768px to 1023px (Sidebar collapsed/Hamburger).
- **Mobile**: Under 768px (Bottom nav or full-screen menu, card-based list).

## 4. Animation Principles
- **Motion**: Use `spring` transitions for physical feel.
- **Feedback**: Immediate visual response on hover and click.
- **Loading**: Pulse skeletons for data loading states.
