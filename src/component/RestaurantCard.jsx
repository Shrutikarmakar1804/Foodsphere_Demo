import React from "react";

const RestaurantCard = ({ restaurant, onAddToCart }) => {
  // Calculate total price of all dishes
  const totalPrice = restaurant.dishes.reduce((sum, dish) => sum + dish.price, 0);

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-xs">
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className="w-full h-36 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold">{restaurant.name}</h2>
        <p className="text-sm text-gray-500 flex items-center gap-1">
          <span className="text-green-600 text-base">★</span>
          {restaurant.rating}
          <span className="mx-1">•</span>
          {restaurant.location}
        </p>

        {/* Show total price of all dishes */}
        <p className="text-sm text-gray-700 mt-1">
          Total Price: <span className="font-semibold">₹{totalPrice}</span>
        </p>

        <div className="mt-3 space-y-1">
          {restaurant.dishes.map((dish, i) => (
            <div
              key={i}
              className="flex justify-between text-sm font-medium text-gray-800"
            >
              <span>{dish.name}</span>
              <span>₹{dish.price}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => onAddToCart(restaurant.id)}
          className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg font-semibold transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default RestaurantCard;
