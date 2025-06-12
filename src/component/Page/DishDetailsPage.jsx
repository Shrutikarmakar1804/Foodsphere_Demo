import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Rating,
  Divider,
  IconButton,
  Stack,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';


const DishDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, cartItems, updateCartItemQuantity } = useCart();

  const dish = demoDishes.find((item) => item.id.toString() === id);
  const existingItem = cartItems.find((item) => item.id === dish?.id);

  const [quantity, setQuantity] = useState(existingItem ? existingItem.quantity : 1);

  if (!dish) {
    return <Typography variant="h6">Dish not found.</Typography>;
  }

  const handleAddToCart = () => {
    if (existingItem) {
      updateCartItemQuantity(dish.id, quantity);
    } else {
      addToCart({ ...dish, quantity });
    }
  };

  const handleIncrease = () => setQuantity((prev) => prev + 1);
  const handleDecrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <Box p={3}>
      <Button variant="outlined" onClick={() => navigate(-1)} sx={{ mb: 2 }}>
        ← Back
      </Button>

      <Card>
        <CardMedia
          component="img"
          height="300"
          image={dish.image}
          alt={dish.name}
        />
        <CardContent>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {dish.name}
          </Typography>

          <Typography variant="body1" gutterBottom>
            {dish.description}
          </Typography>

          <Typography variant="h6" color="primary" gutterBottom>
            Price: ${dish.price}
          </Typography>

          {/* Quantity Controls */}
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 2 }}>
            <Typography>Quantity:</Typography>
            <IconButton onClick={handleDecrease} size="small">
              <Remove />
            </IconButton>
            <Typography>{quantity}</Typography>
            <IconButton onClick={handleIncrease} size="small">
              <Add />
            </IconButton>
          </Stack>

          {/* Add or Update Cart */}
          <Button
            variant="contained"
            color="primary"
            onClick={handleAddToCart}
            sx={{ mt: 2 }}
          >
            {existingItem ? 'Update Cart' : 'Add to Cart'}
          </Button>

          <Divider sx={{ my: 3 }} />

          {/* Static Rating & Reviews */}
          <Typography variant="h6" gutterBottom>
            Customer Rating
          </Typography>
          <Rating value={4.5} precision={0.5} readOnly />

          <Typography variant="body2" sx={{ mt: 1 }}>
            ⭐️ "Amazing taste and fresh ingredients!" — Demo User
          </Typography>
          <Typography variant="body2">
            ⭐️ "Would definitely order again." — Test Customer
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DishDetailsPage;