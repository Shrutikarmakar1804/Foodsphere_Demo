import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const demoOrders = [
  {
    id: 1,
    date: '2025-06-10',
    items: [
      { id: 101, name: 'Pizza Margherita', price: 9.99, quantity: 1 },
      { id: 102, name: 'Garlic Bread', price: 3.49, quantity: 2 },
    ],
    total: 16.97,
    status: 'Delivered',
  },
  {
    id: 2,
    date: '2025-06-08',
    items: [
      { id: 103, name: 'Veggie Burger', price: 7.99, quantity: 1 },
    ],
    total: 7.99,
    status: 'In Progress',
  },
  {
    id: 3,
    date: '2025-06-05',
    items: [
      { id: 104, name: 'Pasta Alfredo', price: 11.99, quantity: 1 },
      { id: 105, name: 'Garlic Knots', price: 2.49, quantity: 3 },
    ],
    total: 19.46,
    status: 'Delivered',
  },
  {
    id: 4,
    date: '2025-06-03',
    items: [
      { id: 106, name: 'Sushi Roll', price: 13.99, quantity: 1 },
    ],
    total: 13.99,
    status: 'Cancelled',
  },
  {
    id: 5,
    date: '2025-06-01',
    items: [
      { id: 107, name: 'Beef Tacos', price: 9.49, quantity: 2 },
    ],
    total: 18.98,
    status: 'Delivered',
  },
  {
    id: 6,
    date: '2025-05-30',
    items: [
      { id: 108, name: 'Miso Soup', price: 3.99, quantity: 2 },
      { id: 109, name: 'Tempura', price: 6.99, quantity: 1 },
    ],
    total: 14.97,
    status: 'In Progress',
  },
  {
    id: 7,
    date: '2025-05-28',
    items: [
      { id: 110, name: 'Paneer Tikka', price: 10.99, quantity: 1 },
      { id: 111, name: 'Butter Naan', price: 1.99, quantity: 2 },
    ],
    total: 14.97,
    status: 'Delivered',
  },
  {
    id: 8,
    date: '2025-05-26',
    items: [
      { id: 112, name: 'Grilled Chicken', price: 12.49, quantity: 1 },
    ],
    total: 12.49,
    status: 'Cancelled',
  },
  {
    id: 9,
    date: '2025-05-25',
    items: [
      { id: 113, name: 'Falafel Wrap', price: 6.99, quantity: 2 },
    ],
    total: 13.98,
    status: 'Delivered',
  },
  {
    id: 10,
    date: '2025-05-23',
    items: [
      { id: 114, name: 'Greek Salad', price: 7.49, quantity: 1 },
    ],
    total: 7.49,
    status: 'In Progress',
  },
  {
    id: 11,
    date: '2025-05-20',
    items: [
      { id: 115, name: 'Chicken Biryani', price: 11.99, quantity: 1 },
      { id: 116, name: 'Raita', price: 1.99, quantity: 1 },
    ],
    total: 13.98,
    status: 'Delivered',
  },
  {
    id: 12,
    date: '2025-05-18',
    items: [
      { id: 117, name: 'Cheeseburger', price: 8.49, quantity: 1 },
    ],
    total: 8.49,
    status: 'Delivered',
  },
  {
    id: 13,
    date: '2025-05-15',
    items: [
      { id: 118, name: 'Ice Cream Sundae', price: 4.49, quantity: 2 },
    ],
    total: 8.98,
    status: 'Cancelled',
  },
  {
    id: 14,
    date: '2025-05-13',
    items: [
      { id: 119, name: 'Waffles', price: 6.49, quantity: 1 },
      { id: 120, name: 'Maple Syrup', price: 2.99, quantity: 1 },
    ],
    total: 9.48,
    status: 'Delivered',
  },
  {
    id: 15,
    date: '2025-05-10',
    items: [
      { id: 121, name: 'Tom Yum Soup', price: 5.49, quantity: 1 },
      { id: 122, name: 'Sticky Rice', price: 3.49, quantity: 2 },
    ],
    total: 12.47,
    status: 'In Progress',
  },
  {
    id: 16,
    date: '2025-05-07',
    items: [
      { id: 123, name: 'Pav Bhaji', price: 6.99, quantity: 1 },
      { id: 124, name: 'Masala Chai', price: 1.99, quantity: 2 },
    ],
    total: 10.97,
    status: 'Delivered',
  },
  {
    id: 17,
    date: '2025-05-05',
    items: [
      { id: 125, name: 'Fish Curry', price: 13.49, quantity: 1 },
    ],
    total: 13.49,
    status: 'Delivered',
  },
  {
    id: 18,
    date: '2025-05-02',
    items: [
      { id: 126, name: 'Chicken Shawarma', price: 9.49, quantity: 1 },
    ],
    total: 9.49,
    status: 'In Progress',
  },
  {
    id: 19,
    date: '2025-04-30',
    items: [
      { id: 127, name: 'Ramen Bowl', price: 12.99, quantity: 1 },
    ],
    total: 12.99,
    status: 'Delivered',
  },
  {
    id: 20,
    date: '2025-04-28',
    items: [
      { id: 128, name: 'Cappuccino', price: 3.49, quantity: 2 },
      { id: 129, name: 'Croissant', price: 2.99, quantity: 1 },
    ],
    total: 9.97,
    status: 'Cancelled',
  },
];

const Order = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOrders(demoOrders);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white text-xl">
        Loading...
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900 text-white text-xl">
        No orders found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-black px-4 py-6 overflow-y-auto">
      <motion.h1
        className="text-3xl font-bold text-white text-center mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Orders
      </motion.h1>

      <div className="max-w-3xl mx-auto space-y-6">
        {orders.map((order, i) => (
          <motion.div
            key={order.id}
            className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-5 border border-white/20"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <div className="flex justify-between items-center mb-3 text-white">
              <span>Order #{order.id}</span>
              <span className="text-sm">{order.date}</span>
              <span
                className={`text-sm font-medium ${
                  order.status === 'Delivered'
                    ? 'text-green-400'
                    : order.status === 'Cancelled'
                    ? 'text-red-400'
                    : 'text-yellow-400'
                }`}
              >
                {order.status}
              </span>
            </div>
            <div className="space-y-2">
              {order.items.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between text-white text-sm border-b border-white/10 py-1"
                >
                  <span>{item.name}</span>
                  <span>
                    ${item.price.toFixed(2)} × {item.quantity}
                  </span>
                </div>
              ))}
            </div>
            <div className="text-right mt-4 text-white font-semibold">
              Total: ${order.total.toFixed(2)}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Order;
