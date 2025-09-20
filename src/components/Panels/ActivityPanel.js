import React from 'react';
import { motion } from 'framer-motion';
import { Bug, Upload, Edit, Trash2 } from 'lucide-react';
import './ActivityPanel.css';

const ActivityPanel = () => {
  const activities = [
    {
      id: 1,
      icon: Bug,
      title: 'You have a bug that needs...',
      user: 'Natali Craig',
      time: '1 hour ago',
      type: 'bug'
    },
    {
      id: 2,
      icon: Upload,
      title: 'Released a new version',
      user: 'Natali Craig',
      time: '59 minutes ago',
      type: 'release'
    },
    {
      id: 3,
      icon: Bug,
      title: 'Submitted a bug',
      user: 'Demi Wilkinson',
      time: '12 minutes ago',
      type: 'bug'
    },
    {
      id: 4,
      icon: Edit,
      title: 'Modified A data in Page X',
      user: 'Natali Craig',
      time: '59 minutes ago',
      type: 'edit'
    },
    {
      id: 5,
      icon: Trash2,
      title: 'Deleted a page in Project X',
      user: 'Natali Craig',
      time: '12 minutes ago',
      type: 'delete'
    }
  ];

  return (
    <motion.div 
      className="activity-panel"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.8 }}
    >
      <div className="panel-header">
        <h3 className="panel-title">Activities</h3>
      </div>
      
      <div className="activity-list">
        {activities.map((activity, index) => {
          const Icon = activity.icon;
          return (
            <motion.div 
              key={activity.id}
              className="activity-item"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
              whileHover={{ backgroundColor: 'var(--bg-hover)' }}
            >
              <div className={`activity-icon ${activity.type}`}>
                <Icon size={14} />
              </div>
              <div className="activity-content">
                <p className="activity-title">{activity.title}</p>
                <div className="activity-meta">
                  <span className="activity-user">{activity.user}</span>
                  <span className="activity-time">{activity.time}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default ActivityPanel;