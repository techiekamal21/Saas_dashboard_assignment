import React from 'react';
import { motion } from 'framer-motion';
import { Bug, UserPlus, Heart } from 'lucide-react';
import './NotificationPanel.css';

const NotificationPanel = () => {
  const notifications = [
    {
      id: 1,
      icon: Bug,
      title: 'You have a bug that needs...',
      time: '9 hours ago',
      type: 'bug'
    },
    {
      id: 2,
      icon: UserPlus,
      title: 'New user registered',
      time: '2 hours ago',
      type: 'user'
    },
    {
      id: 3,
      icon: Heart,
      title: 'You have a bug that needs...',
      time: '7 hours ago',
      type: 'like'
    },
    {
      id: 4,
      icon: Heart,
      title: 'Andi Lane subscribed to you',
      time: '7 hours ago',
      type: 'subscription'
    }
  ];

  return (
    <motion.div 
      className="notification-panel"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
    >
      <div className="panel-header">
        <h3 className="panel-title">Notifications</h3>
      </div>
      
      <div className="notification-list">
        {notifications.map((notification, index) => {
          const Icon = notification.icon;
          return (
            <motion.div 
              key={notification.id}
              className="notification-item"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
              whileHover={{ backgroundColor: 'var(--bg-hover)' }}
            >
              <div className={`notification-icon ${notification.type}`}>
                <Icon size={16} />
              </div>
              <div className="notification-content">
                <p className="notification-title">{notification.title}</p>
                <span className="notification-time">{notification.time}</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default NotificationPanel;