import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box, Typography, TextField, Button, Grid, Card,
  CardMedia, CardContent
} from '@mui/material';
import DemoRestaurants from './MockData'; // Ensure this path is correct
import RestaurantDetailsPage from './RestaurantDetailsPage';
import HomePage from './HomePage';

const AddFood = () => {
  const { id } = useParams();
  const restaurant = DemoRestaurants.find(r => r.id.toString() === id);

  const [dishes, setDishes] = useState([]);
  const [newDish, setNewDish] = useState({ name: '', description: '', price: '', image: '' });

  const handleAddDish = () => {
    const dishId = Date.now();
    setDishes([...dishes, { ...newDish, id: dishId, restaurantId: restaurant?.id || null }]);
    setNewDish({ name: '', description: '', price: '', image: '' });
  };

  if (!restaurant) {
    return (
      <Box p={4}>
        <Typography variant="h6" color="error">
          Restaurant not found.
        </Typography>
      </Box>
    );
  }

  return (
    <Box p={4}>
      <Typography variant="h4">{restaurant.name}</Typography>
      <Typography variant="body1" mb={3}>{restaurant.description}</Typography>

      <Typography variant="h6" mb={2}>Add New Dish</Typography>
      <Grid container spacing={2}>
        {['name', 'description', 'price', 'image'].map(field => (
          <Grid item xs={12} sm={6} key={field}>
            <TextField
              fullWidth
              label={field.charAt(0).toUpperCase() + field.slice(1)}
              value={newDish[field]}
              onChange={(e) => setNewDish({ ...newDish, [field]: e.target.value })}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Button variant="contained" onClick={handleAddDish}>Add Dish</Button>
        </Grid>
      </Grid>

      <Typography variant="h6" mt={4}>Current Dishes</Typography>
      <Grid container spacing={2} mt={1}>
        {dishes.map(dish => (
          <Grid item key={dish.id} xs={12} sm={4}>
            <Card>
              <CardMedia component="img" height="140" image={dish.image} alt={dish.name} />
              <CardContent>
                <Typography variant="subtitle1">{dish.name}</Typography>
                <Typography variant="body2">{dish.description}</Typography>
                <Typography variant="body2">₹{dish.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <RestaurantDetailsPage />
      <HomePage />
    </Box>
  );
};

export default AddFood;
