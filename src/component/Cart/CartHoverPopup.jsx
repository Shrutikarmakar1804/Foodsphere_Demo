import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function CartHoverPopup() {
  const [isHovered, setIsHovered] = useState(false);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const cartItems = useSelector((state) => state.cart.items); // Assume array of cart item objects

  const showEmptyPopup = (!isLoggedIn || (isLoggedIn && cartItems.length === 0)) && isHovered;
  const showCartItemsPopup = isLoggedIn && cartItems.length > 0 && isHovered;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Cart Icon */}
      <div className="text-white cursor-pointer relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-8 w-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 2.25l1.5 1.5m0 0l3 9.75h11.25m-11.25 0a2.25 2.25 0 104.5 0m4.5 0a2.25 2.25 0 104.5 0m-13.5-9.75h14.25l-1.5 9.75H6.75"
          />
        </svg>
      </div>

      {/* Empty Cart Popup */}
      {showEmptyPopup && (
        <div className="absolute top-10 right-0 bg-white shadow-lg rounded-md p-6 w-72 z-50">
          <div className="absolute -top-1 right-10 w-3 h-3 bg-orange-500 rotate-45"></div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Cart Empty</h2>
          <p className="text-gray-500 text-base">
            Good food is always cooking!<br />
            Go ahead, order some<br />
            yummy items from the menu.
          </p>
        </div>
      )}

      {/* Filled Cart Popup */}
      {showCartItemsPopup && (
        <div className="absolute top-10 right-0 bg-white shadow-lg rounded-md p-4 w-80 z-50">
          <div className="absolute -top-1 right-10 w-3 h-3 bg-green-500 rotate-45"></div>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Your Cart</h2>
          <div className="max-h-60 overflow-y-auto divide-y divide-gray-200">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2">
                <div>
                  <p className="text-sm font-medium text-gray-700">{item.name}</p>
                  <p className="text-xs text-gray-500">{item.quantity} × ₹{item.price}</p>
                </div>
                <p className="text-sm font-semibold text-gray-800">₹{item.quantity * item.price}</p>
              </div>
            ))}
          </div>
          <div className="pt-3 border-t mt-3 text-right">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
