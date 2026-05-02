import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  ShoppingCart, 
  Clock, 
  CheckCircle, 
  AlertCircle,
  TrendingUp
} from 'lucide-react';
import RentalList from '../components/RentalList';
import './Dashboard.css';

const StatCard = ({ icon, label, value, color }) => (
  <motion.div 
    className="stat-card glass-card"
    whileHover={{ y: -5 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <div className={`stat-icon ${color}`}>
      {icon}
    </div>
    <div className="stat-content">
      <span className="stat-label">{label}</span>
      <h3 className="stat-value">{value}</h3>
    </div>
  </motion.div>
);

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>Dashboard</h1>
        <p>Welcome back, manage your rental operations efficiently.</p>
      </div>

      <div className="stats-grid">
        <StatCard 
          icon={<ShoppingCart size={24} />} 
          label="Total Orders" 
          value="156" 
          color="blue" 
        />
        <StatCard 
          icon={<Clock size={24} />} 
          label="Active Rentals" 
          value="42" 
          color="orange" 
        />
        <StatCard 
          icon={<CheckCircle size={24} />} 
          label="Completed" 
          value="98" 
          color="green" 
        />
        <StatCard 
          icon={<TrendingUp size={24} />} 
          label="Revenue" 
          value="₹ 45,000" 
          color="purple" 
        />
      </div>

      <div className="dashboard-sections">
        <div className="section-left">
          <RentalList />
        </div>
        
        <div className="section-right">
          <div className="status-summary glass-card">
            <h3>Rental Status</h3>
            <div className="status-items">
              <div className="status-item">
                <span>All</span>
                <span className="count">16</span>
              </div>
              <div className="status-item">
                <span>Quotation</span>
                <span className="count">3</span>
              </div>
              <div className="status-item">
                <span>Reserved</span>
                <span className="count">8</span>
              </div>
              <div className="status-item">
                <span>Pickedup</span>
                <span className="count">4</span>
              </div>
            </div>
          </div>

          <div className="status-summary glass-card mt-20">
            <h3>Invoice Status</h3>
            <div className="status-items">
              <div className="status-item">
                <span>Fully Invoiced</span>
                <span className="count">5</span>
              </div>
              <div className="status-item">
                <span>Nothing to invoice</span>
                <span className="count">5</span>
              </div>
              <div className="status-item">
                <span>To invoice</span>
                <span className="count">5</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
