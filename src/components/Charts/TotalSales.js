import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import './TotalSales.css';

const TotalSales = () => {
  const data = [
    { name: 'Direct', value: 300.56, color: '#06b6d4' },
    { name: 'Affiliate', value: 135.18, color: '#8b5cf6' },
    { name: 'Sponsored', value: 154.02, color: '#10b981' },
    { name: 'E-mail', value: 48.96, color: '#f59e0b' }
  ];

  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <motion.div 
      className="total-sales"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
    >
      <div className="sales-header">
        <h3 className="sales-title">Total Sales</h3>
      </div>
      
      <div className="sales-chart-container">
        <div className="chart-wrapper">
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={40}
                outerRadius={70}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="chart-center">
            <div className="total-value">${total.toFixed(0)}</div>
          </div>
        </div>
      </div>
      
      <div className="sales-legend">
        {data.map((item, index) => (
          <motion.div 
            key={item.name}
            className="legend-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
          >
            <div className="legend-info">
              <div className="legend-dot" style={{ backgroundColor: item.color }}></div>
              <span className="legend-name">{item.name}</span>
            </div>
            <span className="legend-value">${item.value}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TotalSales;