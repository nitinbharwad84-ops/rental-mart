import React from 'react';
import { Search, Bell, User, Menu } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { useRentalStore } from '../store/useRentalStore';
import './Header.css';

const Header = ({ onMenuClick }) => {
  const { user } = useAuthStore();
  const { searchQuery, setSearchQuery } = useRentalStore();

  return (
    <header className="header">
      <div className="header-left">
        <button className="menu-toggle" onClick={onMenuClick}>
          <Menu size={24} />
        </button>
        <div className="search-bar">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Search rentals, customers..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="header-right">
        <button className="icon-btn">
          <Bell size={20} />
          <span className="badge"></span>
        </button>
        
        <div className="user-profile">
          <div className="user-info">
            <span className="user-name">{user?.fullName || 'Adam'}</span>
            <span className="user-role">{user?.role || 'Admin'}</span>
          </div>
          <img 
            src={user?.avatarUrl || 'https://api.dicebear.com/7.x/avataaars/svg?seed=Adam'} 
            alt="Profile" 
            className="avatar" 
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
