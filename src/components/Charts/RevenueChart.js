import React from 'react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import './RevenueChart.css';

const RevenueChart = () => {
  const data = [
    { month: 'Jan', current: 20000, previous: 15000 },
    { month: 'Feb', current: 25000, previous: 18000 },
    { month: 'Mar', current: 30000, previous: 22000 },
    { month: 'Apr', current: 35000, previous: 28000 },
    { month: 'May', current: 45000, previous: 32000 },
    { month: 'Jun', current: 50000, previous: 38000 }
  ];

  return (
    <motion.div 
      className="revenue-chart"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="chart-header">
        <div className="chart-title-section">
          <h3 className="chart-title">Revenue</h3>
          <div className="chart-legend">
            <div className="legend-item">
              <div className="legend-dot current"></div>
              <span>Current Week: $58,211</span>
            </div>
            <div className="legend-item">
              <div className="legend-dot previous"></div>
              <span>Previous Week: $68,768</span>
            </div>
            <div className="beta-badge">Beta</div>
          </div>
        </div>
      </div>
      
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 20 }}>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#808080', fontSize: 12 }}
            />
            <YAxis hide />
            <Line
              type="monotone"
              dataKey="current"
              stroke="#06b6d4"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, fill: '#06b6d4' }}
            />
            <Line
              type="monotone"
              dataKey="previous"
              stroke="#ffffff"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
              activeDot={{ r: 4, fill: '#ffffff' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default RevenueChart;