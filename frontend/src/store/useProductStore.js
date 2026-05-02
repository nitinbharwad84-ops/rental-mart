import { create } from 'zustand';

const MOCK_PRODUCTS = [
  { id: 'p1', name: 'Sony Alpha a7 III', category: 'Cameras', pricePerDay: 1500, status: 'Available', image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=400&q=80' },
  { id: 'p2', name: 'Canon EOS R5', category: 'Cameras', pricePerDay: 2500, status: 'Rented', image: 'https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?w=400&q=80' },
  { id: 'p3', name: 'DJI Mavic 3 Pro', category: 'Drones', pricePerDay: 3000, status: 'Available', image: 'https://images.unsplash.com/photo-1473960156212-47e174092b77?w=400&q=80' },
  { id: 'p4', name: 'Aputure 600d Pro', category: 'Lighting', pricePerDay: 1200, status: 'Maintenance', image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=400&q=80' },
  { id: 'p5', name: 'Sennheiser G4 Kit', category: 'Audio', pricePerDay: 800, status: 'Available', image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=400&q=80' },
  { id: 'p6', name: 'RED V-RAPTOR', category: 'Cameras', pricePerDay: 15000, status: 'Available', image: 'https://images.unsplash.com/photo-1515343483479-445335890b0c?w=400&q=80' },
  { id: 'p7', name: 'Sigma 24-70mm f2.8', category: 'Lenses', pricePerDay: 600, status: 'Rented', image: 'https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=400&q=80' },
  { id: 'p8', name: 'Godox SL60W', category: 'Lighting', pricePerDay: 300, status: 'Available', image: 'https://images.unsplash.com/photo-1493863641943-9b68992a8d07?w=400&q=80' },
  { id: 'p9', name: 'Zoom H6 Recorder', category: 'Audio', pricePerDay: 400, status: 'Available', image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=400&q=80' },
  { id: 'p10', name: 'DJI RS3 Pro Gimbal', category: 'Stabilizers', pricePerDay: 900, status: 'Available', image: 'https://images.unsplash.com/photo-1594818823294-95103a0d724c?w=400&q=80' },
  { id: 'p11', name: 'Blackmagic Pocket 6K', category: 'Cameras', pricePerDay: 2000, status: 'Maintenance', image: 'https://images.unsplash.com/photo-1552168324-d612d77725e3?w=400&q=80' },
  { id: 'p12', name: 'Nanlite Pavotube', category: 'Lighting', pricePerDay: 500, status: 'Available', image: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=400&q=80' },
];

export const useProductStore = create((set, get) => ({
  products: MOCK_PRODUCTS,
  filteredProducts: MOCK_PRODUCTS,
  activeCategory: 'All',
  searchQuery: '',

  setCategory: (category) => {
    set({ activeCategory: category });
    get().applyFilters();
  },

  setSearchQuery: (query) => {
    set({ searchQuery: query });
    get().applyFilters();
  },

  applyFilters: () => {
    const { products, activeCategory, searchQuery } = get();
    let result = [...products];

    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => 
        p.name.toLowerCase().includes(q) || 
        p.category.toLowerCase().includes(q)
      );
    }

    set({ filteredProducts: result });
  }
}));
