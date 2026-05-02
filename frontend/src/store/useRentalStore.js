import { create } from 'zustand';

const MOCK_RENTALS = [
  { id: '1', orderNumber: 'R0001', customerName: 'Customer1', amount: 2000, status: 'Quotation', pickupTime: '2025-03-08T10:00:36Z' },
  { id: '2', orderNumber: 'R0002', customerName: 'Customer2', amount: 1000, status: 'Pickedup', pickupTime: '2025-03-08T11:30:36Z' },
  { id: '3', orderNumber: 'R0003', customerName: 'Customer3', amount: 3000, status: 'Late Pickup', pickupTime: '2025-03-08T09:15:36Z' },
  { id: '4', orderNumber: 'R0004', customerName: 'Customer4', amount: 1400, status: 'Reserved', pickupTime: '2025-03-09T14:00:36Z' },
  { id: '5', orderNumber: 'R0005', customerName: 'Customer5', amount: 2000, status: 'Quotation', pickupTime: '2025-03-09T16:45:36Z' },
  { id: '6', orderNumber: 'R0006', customerName: 'Customer6', amount: 1000, status: 'Pickedup', pickupTime: '2025-03-10T08:00:36Z' },
  { id: '7', orderNumber: 'R0007', customerName: 'Customer7', amount: 3000, status: 'Late Pickup', pickupTime: '2025-03-10T10:20:36Z' },
  { id: '8', orderNumber: 'R0008', customerName: 'Customer8', amount: 1400, status: 'Reserved', pickupTime: '2025-03-11T12:00:36Z' },
  { id: '9', orderNumber: 'R0009', customerName: 'Customer9', amount: 5500, status: 'Pickedup', pickupTime: '2025-03-11T14:30:36Z' },
  { id: '10', orderNumber: 'R0010', customerName: 'Customer10', amount: 1200, status: 'Quotation', pickupTime: '2025-03-12T09:00:36Z' },
  { id: '11', orderNumber: 'R0011', customerName: 'Customer11', amount: 4200, status: 'Reserved', pickupTime: '2025-03-12T11:00:36Z' },
  { id: '12', orderNumber: 'R0012', customerName: 'Customer12', amount: 1500, status: 'Pickedup', pickupTime: '2025-03-13T15:00:36Z' },
  { id: '13', orderNumber: 'R0013', customerName: 'Customer13', amount: 2800, status: 'Quotation', pickupTime: '2025-03-13T17:30:36Z' },
  { id: '14', orderNumber: 'R0014', customerName: 'Customer14', amount: 900, status: 'Reserved', pickupTime: '2025-03-14T10:00:36Z' },
  { id: '15', orderNumber: 'R0015', customerName: 'Customer15', amount: 3100, status: 'Pickedup', pickupTime: '2025-03-14T13:00:36Z' },
  { id: '16', orderNumber: 'R0016', customerName: 'Customer16', amount: 2500, status: 'Late Pickup', pickupTime: '2025-03-15T08:30:36Z' },
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
  },

  addOrder: (order) => {
    const newOrder = {
      ...order,
      id: Math.random().toString(36).substr(2, 9),
      orderNumber: `R${(get().rentals.length + 1).toString().padStart(4, '0')}`,
    };
    set((state) => ({ 
      rentals: [newOrder, ...state.rentals] 
    }));
    get().applyFilters();
  },

  updateOrder: (id, updatedOrder) => {
    set((state) => ({
      rentals: state.rentals.map((o) => (o.id === id ? { ...o, ...updatedOrder } : o))
    }));
    get().applyFilters();
  },

  deleteOrder: (id) => {
    set((state) => ({
      rentals: state.rentals.filter((o) => o.id !== id)
    }));
    get().applyFilters();
  }
}));
