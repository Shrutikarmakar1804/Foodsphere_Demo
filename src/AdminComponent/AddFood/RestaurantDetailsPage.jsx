import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Button,
  Grid,
  Divider,
} from '@mui/material';
import DemoRestaurants, { demoDish } from './MockData';
import DishCard from './DishCard';

const RestaurantDetailsPage = () => {
  const { id } = useParams();
  const restaurant = DemoRestaurants.find((r) => String(r.id) === id);
  const [dishes, setDishes] = useState(
    demoDish.filter((d) => d?.restaurantId && String(d.restaurantId) === id)
  );

  const [newDish, setNewDish] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewDish((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddDish = () => {
    if (!newDish.name || !newDish.price) return;

    const newDishEntry = {
      id: Date.now().toString(),
      ...newDish,
      price: parseFloat(newDish.price),
      restaurantId: id,
    };

    setDishes((prev) => [...prev, newDishEntry]);
    setNewDish({ name: '', description: '', price: '', image: '' });
  };

  if (!restaurant) {
    return (
      <Box p={4}>
        <Typography variant="h6">Restaurant not found</Typography>
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        {restaurant.name}
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="h6" gutterBottom>Add a New Dish</Typography>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Dish Name"
            name="name"
            value={newDish.name}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            fullWidth
            label="Price"
            name="price"
            value={newDish.price}
            onChange={handleChange}
            type="number"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Description"
            name="description"
            value={newDish.description}
            onChange={handleChange}
            multiline
            rows={2}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Image URL"
            name="image"
            value={newDish.image}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleAddDish}>
            Add Dish
          </Button>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />
      <Typography variant="h5" gutterBottom>Existing Dishes</Typography>
      <Grid container spacing={2}>
        {dishes.map((dish) => (
          <Grid item key={dish.id} xs={12} sm={6} md={4}>
            <DishCard dish={dish} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RestaurantDetailsPage;
