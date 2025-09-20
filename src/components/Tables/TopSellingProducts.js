import React from 'react';
import { motion } from 'framer-motion';
import './TopSellingProducts.css';

const TopSellingProducts = () => {
  const products = [
    {
      id: 1,
      name: 'ASOS Ridley High Waist',
      price: '$79.49',
      quantity: 82,
      amount: '$6,518.18'
    },
    {
      id: 2,
      name: 'Marco Lightweight Shirt',
      price: '$128.50',
      quantity: 37,
      amount: '$4,754.50'
    },
    {
      id: 3,
      name: 'Half Sleeve Shirt',
      price: '$39.99',
      quantity: 64,
      amount: '$2,559.36'
    },
    {
      id: 4,
      name: 'Lightweight Jacket',
      price: '$20.00',
      quantity: 184,
      amount: '$3,680.00'
    },
    {
      id: 5,
      name: 'Marco Shoes',
      price: '$79.49',
      quantity: 64,
      amount: '$1,965.81'
    }
  ];

  return (
    <motion.div 
      className="top-selling-products"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
    >
      <div className="table-header">
        <h3 className="table-title">Top Selling Products</h3>
      </div>
      
      <div className="table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <motion.tr 
                key={product.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                whileHover={{ backgroundColor: 'var(--bg-hover)' }}
              >
                <td className="product-name">{product.name}</td>
                <td className="product-price">{product.price}</td>
                <td className="product-quantity">{product.quantity}</td>
                <td className="product-amount">{product.amount}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
};

export default TopSellingProducts;