import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const DishCard = ({ dish }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/dish/${dish.id}`);
  };

  return (
    <Card sx={{ maxWidth: 300, m: 2, borderRadius: '16px', boxShadow: 3 }}>
      <CardMedia
        component="img"
        height="180"
        image={dish.image}
        alt={dish.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {dish.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {dish.description.length > 60
            ? dish.description.slice(0, 60) + '...'
            : dish.description}
        </Typography>
        <Typography variant="subtitle1" color="primary">
          ₹{dish.price}
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          fullWidth
          sx={{ mt: 1 }}
          onClick={handleViewDetails}
        >
          View Details
        </Button>
      </CardContent>
    </Card>
  );
};

export default DishCard;
