import React from 'react';
import { motion } from 'framer-motion';
import './RevenueByLocation.css';

const RevenueByLocation = () => {
  const locations = [
    { city: 'New York', revenue: '72K', percentage: 35 },
    { city: 'San Francisco', revenue: '39K', percentage: 25 },
    { city: 'Sydney', revenue: '25K', percentage: 20 },
    { city: 'Singapore', revenue: '61K', percentage: 40 }
  ];

  return (
    <motion.div 
      className="revenue-by-location"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
    >
      <div className="location-header">
        <h3 className="location-title">Revenue by Location</h3>
      </div>
      
      <div className="world-map">
        <div className="map-placeholder">
          <div className="map-dot dot-1"></div>
          <div className="map-dot dot-2"></div>
          <div className="map-dot dot-3"></div>
          <div className="map-dot dot-4"></div>
        </div>
      </div>
      
      <div className="location-list">
        {locations.map((location, index) => (
          <motion.div 
            key={location.city}
            className="location-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
          >
            <div className="location-info">
              <span className="location-city">{location.city}</span>
              <span className="location-revenue">{location.revenue}</span>
            </div>
            <div className="location-bar">
              <motion.div 
                className="location-progress"
                initial={{ width: 0 }}
                animate={{ width: `${location.percentage}%` }}
                transition={{ duration: 0.8, delay: 0.8 + index * 0.1 }}
              ></motion.div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default RevenueByLocation;