import React from 'react';
import { motion } from 'framer-motion';
import './ContactsPanel.css';

const ContactsPanel = () => {
  const contacts = [
    {
      id: 1,
      name: 'Natali Craig',
      avatar: '👤',
      status: 'online'
    },
    {
      id: 2,
      name: 'Drew Cano',
      avatar: '👤',
      status: 'offline'
    },
    {
      id: 3,
      name: 'Orlando Diggs',
      avatar: '👤',
      status: 'online'
    },
    {
      id: 4,
      name: 'Andi Lane',
      avatar: '👤',
      status: 'online'
    },
    {
      id: 5,
      name: 'Kate Morrison',
      avatar: '👤',
      status: 'offline'
    },
    {
      id: 6,
      name: 'Koray Okumus',
      avatar: '👤',
      status: 'online'
    }
  ];

  return (
    <motion.div 
      className="contacts-panel"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.9 }}
    >
      <div className="panel-header">
        <h3 className="panel-title">Contacts</h3>
      </div>
      
      <div className="contacts-list">
        {contacts.map((contact, index) => (
          <motion.div 
            key={contact.id}
            className="contact-item"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.0 + index * 0.1 }}
            whileHover={{ backgroundColor: 'var(--bg-hover)' }}
          >
            <div className="contact-avatar">
              <span className="avatar-icon">{contact.avatar}</span>
              <div className={`status-indicator ${contact.status}`}></div>
            </div>
            <div className="contact-info">
              <span className="contact-name">{contact.name}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default ContactsPanel;