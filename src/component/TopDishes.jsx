import React from 'react';
import { Box, Typography, Grid, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import { AddCircleOutline } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const dishes = [
  {
    id: 1,
    name: 'Greek salad',
    description: [
      'Food provides essential nutrients',
      'for overall health and well-being'
    ],
    price: 120,
    image: 'https://images.themodernproper.com/production/posts/GreekSalad_9.jpg?w=1200&h=1200&q=60&fm=jpg&fit=crop&dm=1718650734&s=70119bf37604d243d0729db7f4cda445',
  },
  {
    id: 2,
    name: 'Clover Salad',
    description: [
      'Food provides essential nutrients',
      'for overall health and well-being'
    ],
    price: 160,
    image:'https://media01.stockfood.com/largepreviews/MzcxNDk0NTc2/11983696-Watercress-salad-with-salmon-clover-flowers-and-peanuts.jpg',
  },
  {
    id: 3,
    name: 'Chicken Salad',
    description: [
      'Food provides essential nutrients',
      'for overall health and well-being'
    ],
    price: 240,
    image: 'https://www.spendwithpennies.com/wp-content/uploads/2019/08/1200-Chicken-Salad-Sandwich-SpendWithPennies-3.jpeg',
  },
  {
    id: 4,
    name: 'Biryani',
    description: [
      'Biryani is a mixed rice dish',
      'originating among the Muslims.'
    ],
    price: 300,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStvdZv9-9AK9epWA8duL-7yJYrvMJHvveDjQ&s',
  },
  {
    id: 5,
    name: 'Paneer Tikka',
    description: [
      'Paneer Tikka is a vegetarian dish',
      'made with marinated paneer cubes grilled or baked.'
    ],
    price: 180,
    image: 'https://spicecravings.com/wp-content/uploads/2020/10/Paneer-Tikka-Featured-1.jpg',
  },
  {
    id: 6,
    name: 'Pasta',
    description: [
      'It is a staple food of Italian origin',
      'made from wheat flour and water.'
    ],
    price: 220,
    image: 'https://s.lightorangebean.com/media/20240914160809/Spicy-Penne-Pasta_-done.png',
  },
  {
    id: 7,
    name: 'Greek Gyros',
    description: [
      'A traditional Greek dish',
      'made with meat cooked on a vertical rotisserie.'
    ],
    price: 150,
    image: 'https://images.pexels.com/photos/29906167/pexels-photo-29906167/free-photo-of-delicious-greek-gyros-on-sunny-day.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  },
  {
    id: 8,
    name: 'Biryani Bowl',
    description: [
      'A flavorful rice dish',
      'with spices, meat, and vegetables.'
    ],
    price: 280,
    image: 'https://media-assets.swiggy.com/swiggy/image/upload/f_auto,q_auto,fl_lossy/bwpfkhsxuzrnxhndqbtj',
  },
  {
    id: 9,
    name: 'Paneer Butter Masala',
    description: [
      'A rich and creamy Indian curry',
      'made with paneer.'
    ],
    price: 200,
    image: 'https://myfoodstory.com/wp-content/uploads/2021/07/restaurant-style-paneer-butter-masala-2-500x500.jpg',
  },
  {
    id: 10,
    name: 'Pasta Primavera',
    description: [
      'A pasta dish',
      'loaded with fresh vegetables.'
    ],
    price: 240,
    image: 'https://www.connoisseurusveg.com/wp-content/uploads/2023/02/vegan-pasta-primavera-23-sq.jpg',
  },
  {
    id: 11,
    name: 'Chicken Shawarma',
    description: [
      'A Middle Eastern dish of spiced meat',
      'cooked on a vertical rotisserie.'
    ],
    price: 170,
    image: 'https://images.themodernproper.com/production/posts/GrilledChickenShawarmaKebab_11.jpg?w=1200&q=82&auto=format&fit=crop&dm=1688868283&s=7ced319ce0cd07e1fa5caecf19ec7db9',
  },
  {
    id: 12,
    name: 'Vegetable Biryani',
    description: [
      'A fragrant rice dish',
      'with mixed vegetables and spices.'
    ],
    price: 220,
    image: 'https://i.ytimg.com/vi/Do7ZdUodDdw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAEQctXy1aD1723HT7omylxjn4tMQ',
  },
  {
    id: 13,
    name: 'Paneer Tikka Masala',
    description: [
      'A spicy and flavorful Indian curry',
      'made with paneer.'
    ],
    price: 190,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk1jzRWLqF8JmuieJilEOin4FLLm1Vzkgncg&s',
  },
  {
    id: 14,
    name: 'Pasta Carbonara',
    description: [
      'A classic Italian pasta dish',
      'made with eggs, cheese, pancetta, and pepper.'
    ],
    price: 260,
    image: 'https://static01.nyt.com/images/2021/02/14/dining/carbonara-horizontal/carbonara-horizontal-videoSixteenByNineJumbo1600-v2.jpg',
  },
  {
    id: 15,
    name: 'Greek Moussaka',
    description: [
      'A traditional Greek dish',
      'made with layers of eggplant, minced meat, and béchamel sauce.'
    ],
    price: 300,
    image: 'https://www.recipetineats.com/tachyon/2019/03/Greek-Moussaka_3-re-edited-SQ.jpg',
  },
  {
    id: 16,
    name: 'Chicken Tikka',
    description: [
      'A popular Indian dish',
      'made with marinated chicken pieces grilled to perfection.'
    ],
    price: 210,
    image: 'https://laurenscravings.com/wp-content/uploads/2025/04/chicken-tikka-marinade-scaled.jpg',
  },
  {
    id: 17,
    name: 'Vegetable Pasta',
    description: [
      'A pasta dish',
      'loaded with fresh vegetables and herbs.'
    ],
    price: 230,
    image: 'https://www.inspiredtaste.net/wp-content/uploads/2019/02/Vegetable-Spaghetti-Recipe-2-1200.jpg',
  },
  {
    id: 18,
    name: 'Greek Spanakopita',
    description: [
      'A savory Greek pastry',
      'filled with spinach and feta cheese.'
    ],
    price: 180,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6WN2A8hy8dH9xw07lwK-bg22lLKl_CVNSZg&s',
  },
  {
    id: 19,
    name: 'Chicken Curry',
    description: [
      'A flavorful Indian curry',
      'made with tender chicken pieces and spices.'
    ],
    price: 250,
    image: 'https://www.foodandwine.com/thmb/8YAIANQTZnGpVWj2XgY0dYH1V4I=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spicy-chicken-curry-FT-RECIPE0321-58f84fdf7b484e7f86894203eb7834e7.jpg',
  },
  {
    id: 20,
    name: 'Vegetable Stir Fry',
    description: [
      'A quick and healthy stir-fry',
      'made with mixed vegetables.'
    ],
    price: 200,
    image: 'https://s.lightorangebean.com/media/20240914144639/Thai-Vegetable-Stir-Fry-with-Lime-and-Ginger_done.png',
  },
];

const TopDishes = () => {
  return (
    <Box p={3}>
      <Typography variant="h5" fontWeight="bold" mb={3} color="white">
        Top dishes near you
      </Typography>

      <Grid container spacing={4}>
        {dishes.map((dish) => (
          <Grid size={{xs:2}} sm={6} md={4} lg={3} key={dish.id}>
            <Link to={`/dish/${dish.id}`} style={{ textDecoration: 'none' }}>
              <Card sx={{ borderRadius: 3, backgroundColor: '#111', color: 'white', '&:hover': { transform: 'scale(1.03)', transition: '0.3s' } }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={dish.image}
                  alt={dish.name}
                  sx={{ objectFit: 'cover', width: '100%', maxHeight: 180 }}
                />
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