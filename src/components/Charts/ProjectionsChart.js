import React from 'react';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import './ProjectionsChart.css';

const ProjectionsChart = () => {
  const data = [
    { name: 'Jan', projections: 15, actuals: 12 },
    { name: 'Feb', projections: 18, actuals: 16 },
    { name: 'Mar', projections: 22, actuals: 20 },
    { name: 'Apr', projections: 25, actuals: 24 },
    { name: 'May', projections: 28, actuals: 26 },
    { name: 'Jun', projections: 30, actuals: 28 }
  ];

  return (
    <motion.div 
      className="projections-chart"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <div className="chart-header">
        <h3 className="chart-title">Projections vs Actuals</h3>
        <div className="chart-value">10M</div>
      </div>
      
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#808080', fontSize: 10 }}
            />
            <YAxis hide />
            <Bar 
              dataKey="projections" 
              fill="#4a5568" 
              radius={[2, 2, 0, 0]}
              maxBarSize={20}
            />
            <Bar 
              dataKey="actuals" 
              fill="#06b6d4" 
              radius={[2, 2, 0, 0]}
              maxBarSize={20}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
};

export default ProjectionsChart;