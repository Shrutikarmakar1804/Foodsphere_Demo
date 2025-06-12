import React, { useState } from 'react';

const MenuCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    localStorage.setItem("cart", JSON.stringify([...existingCart, item]));
    alert(`${item.name} added to cart`);
  };

  return (
    <div
      className="p-4 border rounded shadow hover:shadow-lg transition cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      <h3 className="text-xl font-semibold">{item.name}</h3>
      <p className="text-gray-500 text-sm">
        {item.vegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
      </p>
      {item.seasonal && (
        <p className="text-blue-500 text-xs mt-1">Seasonal Special</p>
      )}

      {expanded && (
        <div className="mt-3">
          <p className="text-sm text-gray-600">Category: {item.category}</p>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent collapsing the card when clicking button
              handleAddToCart();
            }}
            className="mt-2 px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Add to Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default MenuCard;
