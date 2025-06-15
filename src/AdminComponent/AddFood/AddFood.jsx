import { useState, useEffect } from 'react';
import {
  Box, Typography, TextField, Button, Grid, Card,
  CardMedia, CardContent, Grow, Fade, Paper,
  Select, MenuItem, InputLabel, FormControl, Chip, OutlinedInput
} from '@mui/material';
import { styled } from '@mui/system';
import DemoRestaurants from './MockData'; // ✅ Make sure this path is valid

const StyledCard = styled(Card)(({ theme }) => ({
  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[6],
  },
}));

// Static ingredient and category options (can come from backend)
const ingredientOptions = ['Cheese', 'Chicken', 'Mushroom', 'Tomato', 'Onion', 'Paneer'];
const categoryOptions = ['Starter', 'Main Course', 'Dessert', 'Beverage'];

const AddFood = () => {
  const restaurant = DemoRestaurants[0];

  const [dishes, setDishes] = useState([]);
  const [newDish, setNewDish] = useState({
    name: '',
    description: '',
    price: '',
    image: '',
    ingredients: [],
    category: ''
  });

  useEffect(() => {
    if (restaurant?.dishes) {
      setDishes(restaurant.dishes);
    }
  }, [restaurant]);

  const handleAddDish = () => {
    if (!newDish.name || !newDish.price || !newDish.category) return;

    const updatedDish = {
      ...newDish,
      id: Date.now(),
      restaurantId: restaurant.id
    };

    setDishes(prev => [...prev, updatedDish]);
    setNewDish({ name: '', description: '', price: '', image: '', ingredients: [], category: '' });
  };

  return (
    <Box p={{ xs: 2, sm: 4 }}>
      <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
        <Fade in timeout={700}>
          <Box>
            <Typography variant="h4" fontWeight="bold">{restaurant.name}</Typography>
            <Typography variant="body1" color="text.secondary" mb={3}>
              {restaurant.description}
            </Typography>

            <Typography variant="h6" gutterBottom>Add a New Dish</Typography>
            <Grid container spacing={2}>
              {['name', 'price', 'description', 'image'].map(field => (
                <Grid size={{xs:12}} sm={6} key={field}>
                  <TextField
                    fullWidth
                    label={field.charAt(0).toUpperCase() + field.slice(1)}
                    variant="outlined"
                    value={newDish[field]}
                    onChange={(e) => setNewDish({ ...newDish, [field]: e.target.value })}
                  />
                </Grid>
              ))}

              {/* Ingredient Multi-Select */}
              <Grid size={{xs:6}} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Ingredients</InputLabel>
                  <Select
                    multiple
                    value={newDish.ingredients}
                    onChange={(e) => setNewDish({ ...newDish, ingredients: e.target.value })}
                    input={<OutlinedInput label="Ingredients" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                  >
                    {ingredientOptions.map((ingredient) => (
                      <MenuItem key={ingredient} value={ingredient}>
                        {ingredient}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              {/* Category Dropdown */}
              <Grid size={{xs:6}} sm={6}>
                <FormControl fullWidth>
                  <InputLabel>Category</InputLabel>
                  <Select
                    value={newDish.category}
                    onChange={(e) => setNewDish({ ...newDish, category: e.target.value })}
                    label="Category"
                  >
                    {categoryOptions.map((cat) => (
                      <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>

              <Grid size={{xs:12}} sm={12} display="flex" justifyContent="flex-end">
                <Button variant="contained" onClick={handleAddDish}>
                  Add Dish
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Paper>

      {dishes.length > 0 && (
        <>
          <Typography variant="h5" gutterBottom>Existing Dishes</Typography>
          <Grid container spacing={3}>
            {dishes.map((dish, index) => (
              <Grow in key={dish.id} timeout={500 + index * 100}>
                <Grid size={{xs:12}} sm={6} md={4}>
                  <StyledCard elevation={4}>
                    <CardMedia
                      component="img"
                      height="180"
                      image={dish.image || 'https://via.placeholder.com/300x180'}
                      alt={dish.name}
                    />
                    <CardContent>
                      <Typography variant="h6" fontWeight={600}>{dish.name}</Typography>
                      <Typography variant="body2" color="text.secondary">{dish.description}</Typography>
                      <Typography variant="body2" color="primary">₹{dish.price}</Typography>
                      <Typography variant="body2" mt={1}>
                        <strong>Category:</strong> {dish.category}
                      </Typography>
                      <Typography variant="body2">
                        <strong>Ingredients:</strong> {dish.ingredients?.join(', ')}
                      </Typography>
                    </CardContent>
                  </StyledCard>
                </Grid>
              </Grow>
            ))}
          </Grid>
        </>
      )}
    </Box>
  );
};

export default AddFood;
