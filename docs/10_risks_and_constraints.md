# Risks and Constraints

## 1. Technical Risks
- **Data Persistence**: Currently using mock data in memory; refresh will reset state. (Mitigation: Use LocalStorage for Phase 2).
- **CSS Complexity**: Managing large Vanilla CSS files might lead to specificity issues. (Mitigation: Strict BEM or CSS Modules in the future).
- **Dependency Versioning**: React 19 and Vite 6/8 are very new; some libraries might have minor compatibility warnings.

## 2. Business Risks
- **Multi-Tenancy Complexity**: Ensuring absolute data isolation between tenants is critical for SaaS. (Mitigation: Database-level RLS in future Supabase integration).

## 3. Constraints
- **Color Palette**: Strictly limited to the provided blue palette.
- **Timeline**: Rapid implementation required for initial MVP.
- **Backend**: Currently strictly limited to mock data as per user request.
