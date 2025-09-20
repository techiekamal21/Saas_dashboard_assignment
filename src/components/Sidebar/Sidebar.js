import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  LayoutDashboard, 
  ShoppingCart, 
  FolderOpen, 
  GraduationCap,
  User,
  Building2,
  FileText,
  MessageSquare,
  CreditCard,
  Users
} from 'lucide-react';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      section: 'Favorites',
      items: [
        { icon: LayoutDashboard, label: 'Overview', path: '/' },
        { icon: FolderOpen, label: 'Projects', path: '/projects' }
      ]
    },
    {
      section: 'Dashboards',
      items: [
        { icon: LayoutDashboard, label: 'Default', path: '/' },
        { icon: ShoppingCart, label: 'eCommerce', path: '/' },
        { icon: ShoppingCart, label: 'Orders', path: '/orders' },
        { icon: FolderOpen, label: 'Projects', path: '/projects' },
        { icon: GraduationCap, label: 'Online Courses', path: '/courses' }
      ]
    },
    {
      section: 'Pages',
      items: [
        { icon: User, label: 'User Profile', path: '/profile' },
        { icon: Building2, label: 'Account', path: '/account' },
        { icon: Building2, label: 'Corporate', path: '/corporate' },
        { icon: FileText, label: 'Blog', path: '/blog' },
        { icon: MessageSquare, label: 'Social', path: '/social' }
      ]
    }
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <motion.aside 
      className="sidebar"
      initial={{ x: -280 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <div className="logo-icon">
            <span>🌪️</span>
          </div>
          <span className="logo-text">ByeWind</span>
        </div>
      </div>

      <nav className="sidebar-nav">
        {menuItems.map((section, sectionIndex) => (
          <div key={sectionIndex} className="nav-section">
            <h3 className="nav-section-title">{section.section}</h3>
            <ul className="nav-list">
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <motion.li 
                    key={itemIndex}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <button
                      className={`nav-item ${isActive ? 'active' : ''}`}
                      onClick={() => handleNavigation(item.path)}
                    >
                      <Icon size={18} className="nav-icon" />
                      <span className="nav-label">{item.label}</span>
                    </button>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </motion.aside>
  );
};

export default Sidebar;