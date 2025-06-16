import { Card, Chip, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RestaurantCard = ({ item }) => {
  const navigate = useNavigate();
  const [isFavorite, setIsFavorite] = useState(false); // Local demo state

  const handleToggleFavorite = (e) => {
    e.stopPropagation(); // Prevent card click
    setIsFavorite((prev) => !prev);
  };

  const handleNavigateToRestaurant = () => {
    // For demo: use simple `/restaurant/:id` route
    navigate(`/restaurant/${item.id}`);
  };

  return (
    <Card
      onClick={handleNavigateToRestaurant}
      className="w-[18rem] shadow-md rounded-md overflow-hidden cursor-pointer"
    >
      <div className="relative">
        <img
          className="w-full h-[10rem] object-cover"
          src={item.images?.[0] || "/images/placeholder.jpg"}
          alt={item.name}
        />
        <Chip
          size="small"
          className="absolute top-2 left-2"
          color={item.open ? "success" : "error"}
          label={item.open ? "Open" : "Closed"}
        />
      </div>

      <div className="p-4 flex justify-between items-start">
        <div className="space-y-1">
          <p className="font-semibold text-lg">{item.name}</p>
          <p className="text-gray-500 text-sm">{item.description}</p>
        </div>
        <IconButton onClick={handleToggleFavorite}>
          {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
        </IconButton>
      </div>
    </Card>
  );
};

export default RestaurantCard;
