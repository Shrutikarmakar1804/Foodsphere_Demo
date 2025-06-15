import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Typography, Button, Card, CardMedia, CardContent } from '@mui/material';
import topMeals from './Data/topMeals';


const FoodDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Convert id from string to number and find the meal
  const food = topMeals.find(meal => meal.id === parseInt(id));

  if (!food) return <Typography>Food not found</Typography>;

  return (
    <Box p={4}>
      <Button variant="outlined" onClick={() => navigate(-1)}>← Back</Button>

      <Card sx={{ mt: 4, display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        <CardMedia
          component="img"
          image={food.image}
          alt={food.title}
          sx={{ width: 300, height: 300, objectFit: 'cover', borderRadius: 2 }}
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>{food.title}</Typography>
          <Typography variant="subtitle1" gutterBottom>{food.city}</Typography>
          <Typography variant="body1" gutterBottom>{food.description}</Typography>
          <Typography variant="h6" color="primary">Price: ₹{food.price}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default FoodDetailsPage;
