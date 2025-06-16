import React from "react";
import RestaurantCard from "../components/RestaurantCard";
import demoRestaurants from "../data/demoRestaurants";

const RestaurantList = () => {
  const handleAddToCart = (restaurantId) => {
    console.log("Added to cart from:", restaurantId);
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {demoRestaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          restaurant={restaurant}
          onAddToCart={handleAddToCart}
        />
      ))}
    </div>
  );
};

export default RestaurantList;
