

import React from 'react'
    const OrderCard = ({ order, item }) => {
      return (
        <div className="border p-4 rounded-lg shadow-md bg-white dark:bg-gray-900">
          <h2 className="font-semibold text-lg mb-2">{item.name}</h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">Quantity: {item.quantity}</p>
          <p className="text-sm text-gray-600 dark:text-gray-300">Price: ₹{item.price}</p>
          <p className="text-sm text-blue-600 font-semibold mt-2">
            Status: <span className={
              order.status === "Pending" ? "text-yellow-500" :
              order.status === "Cancelled" ? "text-red-500" :
              "text-green-600"
            }>{order.status}</span>
          </p>
        </div>
      );
    };
    

export default OrderCard;
