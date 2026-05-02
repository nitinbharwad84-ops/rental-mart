import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRentalStore } from '../store/useRentalStore';
import { MoreVertical, Calendar, User, IndianRupee } from 'lucide-react';
import './RentalList.css';

const RentalList = () => {
  const { filteredRentals, activeFilter, setFilter } = useRentalStore();

  const filters = ['All', 'Quotation', 'Reserved', 'Pickedup'];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Quotation': return 'status-quotation';
      case 'Reserved': return 'status-reserved';
      case 'Pickedup': return 'status-pickedup';
      case 'Late Pickup': return 'status-late';
      default: return '';
    }
  };

  return (
    <div className="rental-list-container glass-card">
      <div className="list-header">
        <div className="list-title">
          <h2>Rental Orders</h2>
          <span className="badge">{filteredRentals.length} Total</span>
        </div>
        <div className="list-filters">
          {filters.map(f => (
            <button 
              key={f}
              className={`filter-tab ${activeFilter === f ? 'active' : ''}`}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="list-content">
        <div className="table-header">
          <span>Customer</span>
          <span>Order ID</span>
          <span>Amount</span>
          <span>Status</span>
          <span>Pickup Time</span>
          <span></span>
        </div>

        <div className="list-items">
          <AnimatePresence mode="popLayout">
            {filteredRentals.map((rental, index) => (
              <motion.div 
                key={rental.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="rental-row"
              >
                <div className="cell-customer">
                  <div className="avatar-small">{rental.customerName[0]}</div>
                  <span>{rental.customerName}</span>
                </div>
                <div className="cell-id">{rental.orderNumber}</div>
                <div className="cell-amount">
                  <IndianRupee size={14} />
                  {rental.amount}
                </div>
                <div className="cell-status">
                  <span className={`status-badge ${getStatusColor(rental.status)}`}>
                    {rental.status}
                  </span>
                </div>
                <div className="cell-time">
                  <Calendar size={14} />
                  {new Date(rental.pickupTime).toLocaleDateString()}
                </div>
                <div className="cell-actions">
                  <button className="action-btn">
                    <MoreVertical size={18} />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default RentalList;
