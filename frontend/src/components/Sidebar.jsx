import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  Package, 
  FileText, 
  Settings, 
  LogOut,
  History
} from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import './Sidebar.css';

const Sidebar = () => {
  const { logout, tenant } = useAuthStore();

  const navItems = [
    { name: 'Dashboard', icon: <LayoutDashboard size={20} />, path: '/' },
    { name: 'Rental', icon: <History size={20} />, path: '/rentals' },
    { name: 'Order', icon: <ShoppingCart size={20} />, path: '/orders' },
    { name: 'Products', icon: <Package size={20} />, path: '/products' },
    { name: 'Reporting', icon: <FileText size={20} />, path: '/reporting' },
    { name: 'Setting', icon: <Settings size={20} />, path: '/settings' },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Rental Management</h2>
      </div>
      
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink 
            key={item.name} 
            to={item.path} 
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>

      <div className="sidebar-footer">
        <button onClick={logout} className="logout-btn">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
