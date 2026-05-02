import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useProductStore } from '../store/useProductStore';
import { 
  Search, 
  Filter, 
  Grid, 
  List as ListIcon, 
  Plus, 
  Download,
  IndianRupee,
  Camera,
  Layers,
  Zap,
  Mic2,
  Box
} from 'lucide-react';
import './Products.css';

const Products = () => {
  const { 
    filteredProducts, 
    activeCategory, 
    setCategory, 
    searchQuery, 
    setSearchQuery 
  } = useProductStore();

  const categories = ['All', 'Cameras', 'Lenses', 'Lighting', 'Audio', 'Drones', 'Stabilizers'];

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Cameras': return <Camera size={18} />;
      case 'Lenses': return <Layers size={18} />;
      case 'Lighting': return <Zap size={18} />;
      case 'Audio': return <Mic2 size={18} />;
      default: return <Box size={18} />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Available': return 'status-available';
      case 'Rented': return 'status-rented';
      case 'Maintenance': return 'status-maintenance';
      default: return '';
    }
  };

  return (
    <div className="products-page">
      <div className="products-header">
        <div className="header-title">
          <h1>Product Catalog</h1>
          <p>Manage your inventory and availability.</p>
        </div>
        <div className="header-actions">
          <button className="secondary-btn">
            <Download size={18} />
            <span>Export CSV</span>
          </button>
          <button className="primary-btn">
            <Plus size={18} />
            <span>Add Product</span>
          </button>
        </div>
      </div>

      <div className="products-controls glass-card">
        <div className="search-box">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search products..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="view-toggle">
          <button className="icon-btn-outline active"><Grid size={18} /></button>
          <button className="icon-btn-outline"><ListIcon size={18} /></button>
        </div>
      </div>

      <div className="category-scroll">
        {categories.map(cat => (
          <button 
            key={cat}
            className={`category-chip ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => setCategory(cat)}
          >
            {cat === 'All' ? null : getCategoryIcon(cat)}
            <span>{cat}</span>
          </button>
        ))}
      </div>

      <div className="products-grid">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product, index) => (
            <motion.div 
              key={product.id}
              className="product-card glass-card"
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2, delay: index * 0.05 }}
            >
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <span className={`status-tag ${getStatusColor(product.status)}`}>
                  {product.status}
                </span>
              </div>
              <div className="product-info">
                <div className="product-category">
                  {getCategoryIcon(product.category)}
                  <span>{product.category}</span>
                </div>
                <h3>{product.name}</h3>
                <div className="product-footer">
                  <div className="product-price">
                    <IndianRupee size={16} />
                    <span>{product.pricePerDay.toLocaleString('en-IN')} / Day</span>
                  </div>
                  <button className="card-action-btn">
                    <Plus size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredProducts.length === 0 && (
        <div className="empty-state">
          <Box size={48} />
          <p>No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Products;
