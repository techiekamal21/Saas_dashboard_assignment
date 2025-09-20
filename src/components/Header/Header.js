import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Bell, 
  Settings, 
  Moon, 
  Sun, 
  Maximize2,
  Menu
} from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import './Header.css';

const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const [showNotifications, setShowNotifications] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const notifications = [
    {
      id: 1,
      title: 'You have a bug that needs...',
      time: '9 hours ago',
      type: 'bug'
    },
    {
      id: 2,
      title: 'New user registered',
      time: '2 hours ago',
      type: 'user'
    },
    {
      id: 3,
      title: 'Andi Lane subscribed to you',
      time: '7 hours ago',
      type: 'subscription'
    }
  ];

  return (
    <header className="header">
      <div className="header-left">
        <button className="mobile-menu-btn">
          <Menu size={20} />
        </button>
        
        <nav className="breadcrumb">
          <span className="breadcrumb-item">Dashboards</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-item active">Default</span>
        </nav>
      </div>

      <div className="header-center">
        <div className="search-container">
          <Search size={18} className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <div className="header-right">
        <motion.button
          className="header-btn"
          onClick={toggleTheme}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </motion.button>

        <motion.button
          className="header-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Settings size={18} />
        </motion.button>

        <div className="notification-container">
          <motion.button
            className="header-btn notification-btn"
            onClick={() => setShowNotifications(!showNotifications)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Bell size={18} />
            <span className="notification-badge">3</span>
          </motion.button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                className="notification-dropdown"
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <div className="notification-header">
                  <h3>Notifications</h3>
                </div>
                <div className="notification-list">
                  {notifications.map((notification) => (
                    <motion.div
                      key={notification.id}
                      className="notification-item"
                      whileHover={{ backgroundColor: 'var(--bg-hover)' }}
                    >
                      <div className="notification-content">
                        <p className="notification-title">{notification.title}</p>
                        <span className="notification-time">{notification.time}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.button
          className="header-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Maximize2 size={18} />
        </motion.button>
      </div>
    </header>
  );
};

export default Header;