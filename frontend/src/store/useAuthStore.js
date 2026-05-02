import { create } from 'zustand';

export const useAuthStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  tenant: null,

  login: (email, password) => {
    // Simulated login
    const mockUser = {
      id: 'u1',
      fullName: 'Adam Smith',
      email: email,
      avatarUrl: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Adam',
      role: 'Admin'
    };
    const mockTenant = {
      id: 't1',
      name: 'Adam Rentals',
      slug: 'adam-rentals'
    };
    set({ user: mockUser, isAuthenticated: true, tenant: mockTenant });
  },

  logout: () => set({ user: null, isAuthenticated: false, tenant: null }),

  register: (userData) => {
    // Simulated registration
    const mockUser = {
      id: 'u2',
      ...userData,
      avatarUrl: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.fullName}`,
      role: 'Admin'
    };
    const mockTenant = {
      id: 't2',
      name: `${userData.fullName} Rentals`,
      slug: userData.fullName.toLowerCase().replace(/\s+/g, '-')
    };
    set({ user: mockUser, isAuthenticated: true, tenant: mockTenant });
  }
}));
