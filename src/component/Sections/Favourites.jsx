import React from "react";
import { useSelector } from "react-redux";
import { Card, CardContent } from "@mui/material";
import RestaurantCard from "../Restaurant/RestaurantCard";

const Favourites = () => {
  const auth = useSelector((store) => store.auth); // Safer destructuring

  const favorites = auth?.favorites || [];

  return (
    <Card className="max-w-5xl mx-auto mt-10 p-6 shadow-xl rounded-2xl">
      <CardContent>
        <h2 className="text-2xl font-semibold text-center mb-6">My Favourites</h2>

        {favorites.length > 0 ? (
          <div className="flex flex-wrap gap-4 justify-center">
            {favorites.map((item, index) => (
              <RestaurantCard key={index} item={item} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">You haven’t added any favourites yet.</p>
        )}
      </CardContent>
    </Card>
  );
};

export default Favourites;
