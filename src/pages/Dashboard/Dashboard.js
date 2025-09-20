import React from 'react';
import { motion } from 'framer-motion';
import StatsCard from '../../components/StatsCard/StatsCard';
import RevenueChart from '../../components/Charts/RevenueChart';
import ProjectionsChart from '../../components/Charts/ProjectionsChart';
import TopSellingProducts from '../../components/Tables/TopSellingProducts';
import RevenueByLocation from '../../components/Maps/RevenueByLocation';
import TotalSales from '../../components/Charts/TotalSales';
import NotificationPanel from '../../components/Panels/NotificationPanel';
import ActivityPanel from '../../components/Panels/ActivityPanel';
import ContactsPanel from '../../components/Panels/ContactsPanel';
import './Dashboard.css';

const Dashboard = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div 
      className="dashboard"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="dashboard-header">
        <h1 className="dashboard-title">eCommerce</h1>
      </div>

      <div className="dashboard-grid">
        {/* Stats Cards Row */}
        <motion.div className="stats-row" variants={itemVariants}>
          <StatsCard
            title="Customers"
            value="3,781"
            change="+11.01%"
            isPositive={true}
          />
          <StatsCard
            title="Orders"
            value="1,219"
            change="-0.03%"
            isPositive={false}
          />
          <StatsCard
            title="Revenue"
            value="$695"
            change="+15.03%"
            isPositive={true}
          />
          <StatsCard
            title="Growth"
            value="30.1%"
            change="+6.08%"
            isPositive={true}
          />
        </motion.div>

        {/* Charts Row */}
        <div className="charts-row">
          <motion.div className="chart-container large" variants={itemVariants}>
            <RevenueChart />
          </motion.div>
          <motion.div className="chart-container medium" variants={itemVariants}>
            <ProjectionsChart />
          </motion.div>
        </div>

        {/* Content Row */}
        <div className="content-row">
          <motion.div className="content-left" variants={itemVariants}>
            <TopSellingProducts />
          </motion.div>
          
          <motion.div className="content-right" variants={itemVariants}>
            <div className="right-panels">
              <RevenueByLocation />
              <TotalSales />
            </div>
          </motion.div>
        </div>

        {/* Side Panels */}
        <motion.div className="side-panels" variants={itemVariants}>
          <NotificationPanel />
          <ActivityPanel />
          <ContactsPanel />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;