import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box, Typography, Card, CardMedia, CardContent,
  Button, Stack, Divider, Grid, Snackbar, Alert
} from '@mui/material';



import demoRestaurants, { demoDishes } from '../Data/mockData';
import { useCart } from '../Context/CartContext';

const DishDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const dish = demoDishes.find((d) => d.id.toString() === id);
  const restaurant = demoRestaurants.find(r => r.id === dish?.restaurantId);
  const recommended = demoDishes.filter(
    d => d.restaurantId === dish?.restaurantId && d.id !== dish.id
  );

  const [quantity, setQuantity] = useState(1);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  if (!dish) return <Typography>Dish not found</Typography>;

  const handleAddToCart = () => {
    addToCart({ ...dish, quantity });
    setOpenSnackbar(true);
  };

  return (
    <Box p={4}>
      <Button onClick={() => navigate(-1)} variant="outlined">← Back</Button>

      <Card sx={{ mt: 3, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center' }}>
        <CardContent sx={{ flex: 1 }}>
          <Typography variant="h4" gutterBottom>{dish.name}</Typography>
          <Typography variant="subtitle1" gutterBottom>{dish.description}</Typography>
          <Typography variant="body2" gutterBottom color="text.secondary">
            From: <strong>{restaurant?.name}</strong>
          </Typography>
          <Typography variant="h6" color="primary">₹{dish.price}</Typography>

          <Stack direction="row" spacing={2} mt={2} alignItems="center">
            <Button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</Button>
            <Typography>{quantity}</Typography>
            <Button onClick={() => setQuantity(q => q + 1)}>+</Button>

            <Button
              variant="contained"
              onClick={() => {
                handleAddToCart();
                navigate('/cart');
              }}
            >
              Add to Cart 
            </Button>
          </Stack>
        </CardContent>
        <CardMedia
          component="img"
          image={dish.image}
          alt={dish.name}
          sx={{
            height: 180,
            width: 180,
            objectFit: 'cover',
            mx: { xs: 'auto', md: 3 },
            my: { xs: 2, md: 0 },
            borderRadius: 2,
            order: { xs: 0, md: 2 }
          }}
        />
      </Card>

      <Divider sx={{ my: 4 }} />

      <Typography variant="h6">More from {restaurant?.name}</Typography>
      <Grid container spacing={2} mt={1}>
        {recommended.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Card onClick={() => navigate(`/dish/${item.id}`)} sx={{ cursor: 'pointer' }}>
              <CardMedia
                component="img"
                image={item.image}
                alt={item.name}
                sx={{
                  height: 120,
                  width: '100%',
                  objectFit: 'cover'
                }}
              />
              <CardContent>
                <Typography variant="subtitle1">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">₹{item.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Snackbar Confirmation */}
      <Snackbar
        open={openSnackbar}
        autoHideDuration={2000}
        onClose={() => setOpenSnackbar(false)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={() => setOpenSnackbar(false)} severity="success" sx={{ width: '100%' }}>
          Added to cart!
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default DishDetailsPage;