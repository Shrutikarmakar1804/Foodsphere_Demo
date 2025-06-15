import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography, TextField, Button, Grid, Card, CardMedia, CardContent } from '@mui/material';
import { demoRestaurants, demoDishes } from '../data/mockData';

const RestaurantPage = () => {
  const { id } = useParams();
  const restaurant = demoRestaurants.find(r => r.id.toString() === id);
  const [dishes, setDishes] = useState(demoDishes.filter(d => d.restaurantId === restaurant.id));
  const [newDish, setNewDish] = useState({ name: '', description: '', price: '', image: '' });

  const handleAddDish = () => {
    const id = Date.now(); // simple unique ID
    setDishes([...dishes, { ...newDish, id, restaurantId: restaurant.id }]);
    setNewDish({ name: '', description: '', price: '', image: '' });
  };

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
              <CardMedia component="img" height="140" image={dish.image} />
              <CardContent>
                <Typography variant="subtitle1">{dish.name}</Typography>
                <Typography variant="body2">{dish.description}</Typography>
                <Typography variant="body2">₹{dish.price}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RestaurantPage;
