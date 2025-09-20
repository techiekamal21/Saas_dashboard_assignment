import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Filter, ArrowUpDown, Search, MoreHorizontal } from 'lucide-react';
import './OrderList.css';

const OrderList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const orders = [
    {
      id: '#CM9801',
      user: { name: 'Natali Craig', avatar: '👤' },
      project: 'Landing Page',
      address: 'Meadow Lane Oakland',
      date: 'Just now',
      status: 'In Progress'
    },
    {
      id: '#CM9802',
      user: { name: 'Kate Morrison', avatar: '👤' },
      project: 'CRM Admin pages',
      address: 'Larry San Francisco',
      date: 'A minute ago',
      status: 'Complete'
    },
    {
      id: '#CM9803',
      user: { name: 'Drew Cano', avatar: '❤️' },
      project: 'Client Project',
      address: 'Bagwell Avenue Ocala',
      date: '1 hour ago',
      status: 'Pending'
    },
    {
      id: '#CM9804',
      user: { name: 'Orlando Diggs', avatar: '👤' },
      project: 'Admin Dashboard',
      address: 'Washburn Baton Rouge',
      date: 'Yesterday',
      status: 'Approved'
    },
    {
      id: '#CM9805',
      user: { name: 'Andi Lane', avatar: '👤' },
      project: 'App Landing Page',
      address: 'Nest Lane Olivette 🔒',
      date: 'Feb 2, 2023',
      status: 'Rejected'
    },
    {
      id: '#CM9801',
      user: { name: 'Natali Craig', avatar: '👤' },
      project: 'Landing Page',
      address: 'Meadow Lane Oakland',
      date: 'Just now',
      status: 'In Progress'
    },
    {
      id: '#CM9802',
      user: { name: 'Kate Morrison', avatar: '👤' },
      project: 'CRM Admin pages',
      address: 'Larry San Francisco',
      date: 'A minute ago',
      status: 'Complete'
    },
    {
      id: '#CM9803',
      user: { name: 'Drew Cano', avatar: '❤️' },
      project: 'Client Project',
      address: 'Bagwell Avenue Ocala',
      date: '1 hour ago',
      status: 'Pending'
    },
    {
      id: '#CM9804',
      user: { name: 'Orlando Diggs', avatar: '👤' },
      project: 'Admin Dashboard',
      address: 'Washburn Baton Rouge',
      date: 'Yesterday',
      status: 'Approved'
    },
    {
      id: '#CM9805',
      user: { name: 'Andi Lane', avatar: '👤' },
      project: 'App Landing Page',
      address: 'Nest Lane Olivette',
      date: 'Feb 2, 2023',
      status: 'Rejected'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Complete': return 'complete';
      case 'Pending': return 'pending';
      case 'In Progress': return 'progress';
      case 'Approved': return 'approved';
      case 'Rejected': return 'rejected';
      default: return 'pending';
    }
  };

  const filteredOrders = orders.filter(order =>
    order.user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.project.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = filteredOrders.slice(startIndex, startIndex + itemsPerPage);

  return (
    <motion.div 
      className="order-list"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="order-list-header">
        <h1 className="page-title">Order List</h1>
        
        <div className="header-actions">
          <motion.button 
            className="btn btn-primary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Plus size={16} />
            Add Order
          </motion.button>
          
          <motion.button 
            className="btn btn-secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Filter size={16} />
          </motion.button>
          
          <motion.button 
            className="btn btn-secondary"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ArrowUpDown size={16} />
          </motion.button>
        </div>
      </div>

      <div className="table-controls">
        <div className="search-container">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
      </div>

      <motion.div 
        className="table-container"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <table className="orders-table">
          <thead>
            <tr>
              <th>
                <input type="checkbox" className="checkbox" />
              </th>
              <th>Order ID</th>
              <th>User</th>
              <th>Project</th>
              <th>Address</th>
              <th>Date</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {paginatedOrders.map((order, index) => (
              <motion.tr 
                key={`${order.id}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.3 + index * 0.05 }}
                whileHover={{ backgroundColor: 'var(--bg-hover)' }}
              >
                <td>
                  <input type="checkbox" className="checkbox" />
                </td>
                <td className="order-id">{order.id}</td>
                <td>
                  <div className="user-cell">
                    <div className="user-avatar">{order.user.avatar}</div>
                    <span className="user-name">{order.user.name}</span>
                  </div>
                </td>
                <td className="project-name">{order.project}</td>
                <td className="address">{order.address}</td>
                <td className="date">{order.date}</td>
                <td>
                  <span className={`status-badge ${getStatusColor(order.status)}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  <motion.button 
                    className="action-btn"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <MoreHorizontal size={16} />
                  </motion.button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      <div className="pagination">
        <div className="pagination-info">
          Showing {startIndex + 1} to {Math.min(startIndex + itemsPerPage, filteredOrders.length)} of {filteredOrders.length} entries
        </div>
        
        <div className="pagination-controls">
          <motion.button
            className="pagination-btn"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            whileHover={{ scale: currentPage === 1 ? 1 : 1.05 }}
            whileTap={{ scale: currentPage === 1 ? 1 : 0.95 }}
          >
            ‹
          </motion.button>
          
          {[...Array(totalPages)].map((_, i) => (
            <motion.button
              key={i + 1}
              className={`pagination-btn ${currentPage === i + 1 ? 'active' : ''}`}
              onClick={() => setCurrentPage(i + 1)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {i + 1}
            </motion.button>
          ))}
          
          <motion.button
            className="pagination-btn"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            whileHover={{ scale: currentPage === totalPages ? 1 : 1.05 }}
            whileTap={{ scale: currentPage === totalPages ? 1 : 0.95 }}
          >
            ›
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default OrderList;