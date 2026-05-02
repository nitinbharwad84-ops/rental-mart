import { create } from 'zustand';

const MOCK_RENTALS = [
  { id: '1', orderNumber: 'R0001', customerName: 'Customer1', amount: 2000, status: 'Quotation', pickupTime: '2025-03-08T00:30:36Z' },
  { id: '2', orderNumber: 'R0002', customerName: 'Customer2', amount: 1000, status: 'Pickedup', pickupTime: '2025-03-08T00:30:36Z' },
  { id: '3', orderNumber: 'R0003', customerName: 'Customer3', amount: 3000, status: 'Late Pickup', pickupTime: '2025-03-08T00:30:36Z' },
  { id: '4', orderNumber: 'R0004', customerName: 'Customer3', amount: 1400, status: 'Reserved', pickupTime: '2025-03-08T00:30:36Z' },
  { id: '5', orderNumber: 'R0005', customerName: 'Customer4', amount: 2000, status: 'Quotation', pickupTime: '2025-03-08T00:30:36Z' },
  { id: '6', orderNumber: 'R0006', customerName: 'Customer5', amount: 1000, status: 'Pickedup', pickupTime: '2025-03-08T00:30:36Z' },
  { id: '7', orderNumber: 'R0007', customerName: 'Customer6', amount: 3000, status: 'Late Pickup', pickupTime: '2025-03-08T00:30:36Z' },
  { id: '8', orderNumber: 'R0008', customerName: 'Customer7', amount: 1400, status: 'Reserved', pickupTime: '2025-03-08T00:30:36Z' },
];

export const useRentalStore = create((set, get) => ({
  rentals: MOCK_RENTALS,
  filteredRentals: MOCK_RENTALS,
  activeFilter: 'All',
  searchQuery: '',

  setFilter: (filter) => {
    set({ activeFilter: filter });
    get().applyFilters();
  },

  setSearchQuery: (query) => {
    set({ searchQuery: query });
    get().applyFilters();
  },

  applyFilters: () => {
    const { rentals, activeFilter, searchQuery } = get();
    let result = [...rentals];

    if (activeFilter !== 'All') {
      result = result.filter(r => r.status === activeFilter);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(r => 
        r.customerName.toLowerCase().includes(q) || 
        r.orderNumber.toLowerCase().includes(q)
      );
    }

    set({ filteredRentals: result });
  }
}));
