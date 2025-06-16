import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Button,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { demoDishes } from '../data/mockData';
import demoRestaurants from './Home/DemoRestaurants';

const RestaurantPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const restaurant = demoRestaurants.find((r) => String(r.id) === String(id));
  const restaurantDishes = demoDishes.filter(
    (d) => d.restaurantId === restaurant.id
  );

  const [cart, setCart] = useState({});

  const addToCart = (dishId) => {
    setCart((prev) => ({
      ...prev,
      [dishId]: (prev[dishId] || 0) + 1,
    }));
  };

  const removeFromCart = (dishId) => {
    setCart((prev) => {
      if (!prev[dishId]) return prev;
      const updated = { ...prev, [dishId]: prev[dishId] - 1 };
      if (updated[dishId] <= 0) delete updated[dishId];
      return updated;
    });
  };

  const handleGoToCart = () => {
    navigate('/cart');
  };

  const groupedDishes = restaurantDishes.reduce((acc, dish) => {
    if (!acc[dish.name]) {
      acc[dish.name] = dish;
    }
    return acc;
  }, {});

  if (!restaurant) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography variant="h5" color="error">
          Restaurant not found.
        </Typography>
        <Button onClick={() => navigate(-1)} sx={{ mt: 2 }}>
          ⬅ Back
        </Button>
      </Box>
    );
  }

  return (
    <Box sx={{ px: 3, py: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 4,
          backgroundColor: '#fff',
          borderRadius: 3,
          boxShadow: 2,
          p: 2,
        }}
      >
        <Box display="flex" alignItems="center" gap={2}>
          <CardMedia
            component="img"
            image={restaurant.image}
            alt={restaurant.name}
            sx={{ width: 100, height: 100, borderRadius: 2 }}
          />
          <Box>
            <Typography variant="h5" fontWeight="bold">{restaurant.name}</Typography>
            <Typography color="text.secondary">{restaurant.description}</Typography>
            <Typography mt={1} fontSize={14}>
              <strong>Rating:</strong> ⭐ {restaurant.rating}
            </Typography>
          </Box>
        </Box>
        <Button onClick={() => navigate(-1)} variant="outlined">
          ⬅ Back
        </Button>
      </Box>

      <Grid container spacing={3}>
        {Object.values(groupedDishes).length === 0 ? (
          <Grid size={{ xs: 12 }}>
            <Typography variant="h6" color="text.secondary" align="center">
              No dishes available for this restaurant.
            </Typography>
          </Grid>
        ) : (
          Object.values(groupedDishes).map((dish) => (
            <Grid item xs={12} sm={6} md={4} key={dish.id}>
              <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
                <CardMedia
                  component="img"
                  height="160"
                  image={dish.image}
                  alt={dish.name}
                />
                <CardContent>
                  <Typography variant="h6">{dish.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    ₹{dish.price} | ⭐ {dish.rating}
                  </Typography>
                </CardContent>
                <Box display="flex" justifyContent="center" pb={2}>
                  {cart[dish.id] ? (
                    <Box display="flex" gap={1} alignItems="center">
                      <IconButton onClick={() => removeFromCart(dish.id)}>
                        <RemoveIcon />
                      </IconButton>
                      <Typography>{cart[dish.id]}</Typography>
                      <IconButton onClick={() => addToCart(dish.id)}>
                        <AddIcon />
                      </IconButton>
                    </Box>
                  ) : (
                    <Button onClick={() => addToCart(dish.id)} variant="contained">
                      Add to Cart
                    </Button>
                  )}
                </Box>
              </Card>
            </Grid>
          ))
        )}
      </Grid>

      {Object.keys(cart).length > 0 && (
        <Box
          mt={5}
          display="flex"
          justifyContent="center"
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleGoToCart}
            size="large"
            sx={{ borderRadius: 5, px: 4 }}
          >
            Go to Cart ({Object.values(cart).reduce((a, b) => a + b, 0)} items)
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default RestaurantPage;