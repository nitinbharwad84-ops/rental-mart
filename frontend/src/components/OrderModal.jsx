import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Save, User, Calendar, IndianRupee, Tag } from 'lucide-react';
import './OrderModal.css';

const OrderModal = ({ isOpen, onClose, onSave, orderToEdit }) => {
  const [formData, setFormData] = useState({
    customerName: '',
    amount: '',
    status: 'Quotation',
    pickupTime: new Date().toISOString().slice(0, 16)
  });

  useEffect(() => {
    if (orderToEdit) {
      setFormData({
        customerName: orderToEdit.customerName,
        amount: orderToEdit.amount,
        status: orderToEdit.status,
        pickupTime: new Date(orderToEdit.pickupTime).toISOString().slice(0, 16)
      });
    } else {
      setFormData({
        customerName: '',
        amount: '',
        status: 'Quotation',
        pickupTime: new Date().toISOString().slice(0, 16)
      });
    }
  }, [orderToEdit, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      ...formData,
      amount: parseFloat(formData.amount),
      pickupTime: new Date(formData.pickupTime).toISOString()
    });
    onClose();
  };

  return (
    <AnimatePresence>
      <div className="modal-overlay" onClick={onClose}>
        <motion.div 
          className="modal-content glass-card"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="modal-header">
            <h2>{orderToEdit ? 'Edit Order' : 'Create New Order'}</h2>
            <button className="close-btn" onClick={onClose}>
              <X size={20} />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="modal-form">
            <div className="form-group">
              <label><User size={16} /> Customer Name</label>
              <input 
                type="text" 
                required 
                value={formData.customerName}
                onChange={(e) => setFormData({...formData, customerName: e.target.value})}
                placeholder="Enter customer name"
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label><IndianRupee size={16} /> Amount</label>
                <input 
                  type="number" 
                  required 
                  value={formData.amount}
                  onChange={(e) => setFormData({...formData, amount: e.target.value})}
                  placeholder="0.00"
                />
              </div>

              <div className="form-group">
                <label><Tag size={16} /> Status</label>
                <select 
                  value={formData.status}
                  onChange={(e) => setFormData({...formData, status: e.target.value})}
                >
                  <option value="Quotation">Quotation</option>
                  <option value="Reserved">Reserved</option>
                  <option value="Pickedup">Pickedup</option>
                  <option value="Late Pickup">Late Pickup</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label><Calendar size={16} /> Pickup Time</label>
              <input 
                type="datetime-local" 
                required 
                value={formData.pickupTime}
                onChange={(e) => setFormData({...formData, pickupTime: e.target.value})}
              />
            </div>

            <div className="modal-footer">
              <button type="button" className="secondary-btn" onClick={onClose}>Cancel</button>
              <button type="submit" className="primary-btn">
                <Save size={18} />
                <span>{orderToEdit ? 'Update Order' : 'Create Order'}</span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default OrderModal;
