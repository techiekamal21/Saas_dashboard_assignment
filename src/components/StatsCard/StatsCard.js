import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown } from 'lucide-react';
import './StatsCard.css';

const StatsCard = ({ title, value, change, isPositive }) => {
  return (
    <motion.div 
      className="stats-card"
      whileHover={{ 
        y: -4,
        boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)"
      }}
      transition={{ duration: 0.2 }}
    >
      <div className="stats-card-header">
        <h3 className="stats-title">{title}</h3>
      </div>
      
      <div className="stats-content">
        <div className="stats-value">{value}</div>
        <div className={`stats-change ${isPositive ? 'positive' : 'negative'}`}>
          {isPositive ? (
            <TrendingUp size={14} />
          ) : (
            <TrendingDown size={14} />
          )}
          <span>{change}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default StatsCard;