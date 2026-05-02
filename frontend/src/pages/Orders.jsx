import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRentalStore } from '../store/useRentalStore';
import OrderModal from '../components/OrderModal';
import { 
  MoreVertical, 
  Calendar, 
  IndianRupee, 
  Filter, 
  ArrowUpDown,
  Download,
  Plus,
  Edit,
  Trash2
} from 'lucide-react';
import './Orders.css';

const Orders = () => {
  const { filteredRentals, activeFilter, setFilter, addOrder, updateOrder, deleteOrder } = useRentalStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingOrder, setEditingOrder] = useState(null);
  const [activeMenu, setActiveMenu] = useState(null);

  const filters = ['All', 'Quotation', 'Reserved', 'Pickedup'];

  const handleAddClick = () => {
    setEditingOrder(null);
    setIsModalOpen(true);
  };

  const handleEditClick = (order) => {
    setEditingOrder(order);
    setIsModalOpen(true);
    setActiveMenu(null);
  };

  const handleDeleteClick = (id) => {
    if (window.confirm('Are you sure you want to delete this order?')) {
      deleteOrder(id);
    }
    setActiveMenu(null);
  };

  const handleSaveOrder = (orderData) => {
    if (editingOrder) {
      updateOrder(editingOrder.id, orderData);
    } else {
      addOrder(orderData);
    }
  };

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
    <div className="orders-page" onClick={() => setActiveMenu(null)}>
      <div className="orders-header">
        <div className="header-title">
          <h1>Order Management</h1>
          <p>Track and manage your rental orders in real-time.</p>
        </div>
        <div className="header-actions">
          <button className="secondary-btn">
            <Download size={18} />
            <span>Export</span>
          </button>
          <button className="primary-btn" onClick={handleAddClick}>
            <Plus size={18} />
            <span>New Order</span>
          </button>
        </div>
      </div>

      <div className="orders-controls glass-card">
        <div className="filter-tabs">
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
        <div className="control-btns">
          <button className="icon-btn-outline">
            <Filter size={18} />
          </button>
          <button className="icon-btn-outline">
            <ArrowUpDown size={18} />
          </button>
        </div>
      </div>

      <div className="orders-table-container glass-card">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Customer</th>
              <th>Order ID</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Pickup Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode="popLayout">
              {filteredRentals.map((order, index) => (
                <motion.tr 
                  key={order.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2, delay: index * 0.03 }}
                >
                  <td>
                    <div className="customer-cell">
                      <div className="avatar-small">{order.customerName[0]}</div>
                      <span>{order.customerName}</span>
                    </div>
                  </td>
                  <td className="id-cell">{order.orderNumber}</td>
                  <td className="amount-cell">
                    <IndianRupee size={14} />
                    {order.amount.toLocaleString('en-IN')}
                  </td>
                  <td>
                    <span className={`status-badge ${getStatusColor(order.status)}`}>
                      {order.status}
                    </span>
                  </td>
                  <td className="time-cell">
                    <Calendar size={14} />
                    {new Date(order.pickupTime).toLocaleString('en-IN', { 
                      day: '2-digit', 
                      month: 'short', 
                      year: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </td>
                  <td className="actions-cell">
                    <button 
                      className="action-btn" 
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveMenu(activeMenu === order.id ? null : order.id);
                      }}
                    >
                      <MoreVertical size={18} />
                    </button>
                    <AnimatePresence>
                      {activeMenu === order.id && (
                        <motion.div 
                          className="action-menu glass-card"
                          initial={{ opacity: 0, scale: 0.9, y: -10 }}
                          animate={{ opacity: 1, scale: 1, y: 0 }}
                          exit={{ opacity: 0, scale: 0.9, y: -10 }}
                        >
                          <button onClick={() => handleEditClick(order)}>
                            <Edit size={16} />
                            <span>Edit Order</span>
                          </button>
                          <button onClick={() => handleDeleteClick(order.id)} className="delete-action">
                            <Trash2 size={16} />
                            <span>Delete</span>
                          </button>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
        
        {filteredRentals.length === 0 && (
          <div className="empty-state">
            <p>No orders found matching your criteria.</p>
          </div>
        )}
      </div>

      <OrderModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        onSave={handleSaveOrder}
        orderToEdit={editingOrder}
      />
    </div>
  );
};

export default Orders;
