import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const dishes = [
  {
    id: 1,
    name: 'Greek salad',
    description: 'Food provides essential nutrients for overall health and well-being',
    price: 120,
    image: 'https://source.unsplash.com/400x300/?greek-salad',
  },
  {
    id: 2,
    name: 'Clover Salad',
    description: 'Food provides essential nutrients for overall health and well-being',
    price: 160,
    image: 'https://source.unsplash.com/400x300/?clover-salad',
  },
  {
    id: 3,
    name: 'Chicken Salad',
    description: 'Food provides essential nutrients for overall health and well-being',
    price: 240,
    image: 'https://source.unsplash.com/400x300/?chicken-salad',
  },
  {
    id: 4,
    name: 'Biryani',
    description: 'Biryani is a mixed rice dish originating among the Muslims.',
    price: 300,
    image: 'https://source.unsplash.com/400x300/?biryani',
  },
  {
    id: 5,
    name: 'Paneer Tikka',
    description: 'Paneer Tikka is a vegetarian dish made with marinated paneer cubes grilled or baked.',
    price: 180,
    image: 'https://source.unsplash.com/400x300/?paneer-tikka',
  },
  {
    id: 6,
    name: 'Pasta',
    description: 'It is a staple food of Italian origin made from wheat flour and water.',
    price: 220,
    image: 'https://source.unsplash.com/400x300/?pasta',
  },
];

const TopDishes = () => {
  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold" mb={3} color="white">
        Top dishes near you
      </Typography>

      <Grid container spacing={3}>
        {dishes.map((dish) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={dish.id}>
            <Link to={`/dish/${dish.id}`} style={{ textDecoration: 'none' }}>
              <Card sx={{ borderRadius: 3, backgroundColor: '#111', color: 'white', '&:hover': { transform: 'scale(1.03)', transition: '0.3s' } }}>
                <CardMedia component="img" height="180" image={dish.image} alt={dish.name} />
                <CardContent>
                  <Typography variant="h6">{dish.name}</Typography>
                  <Typography variant="body2" gutterBottom>
                    {dish.description}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="bold">
                    ₹{dish.price}
                  </Typography>
                  <IconButton color="info">
                    <AddCircleOutline />
                  </IconButton>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TopDishes;