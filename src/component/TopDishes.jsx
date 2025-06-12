import React, { useState, useEffect } from 'react';
import {
  Card, CardMedia, CardContent, Typography,
  IconButton, Grid, Box
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const initialItems = [
  {
    id: 1,
    name: 'Greek salad',
    desc: 'Food provides essential nutrients for overall health and well-being',
    price: 120,
    images: ["https://images.pexels.com/photos/1152237/pexels-photo-1152237.jpeg"]
  },
  {
    id: 2,
    name: 'Clover Salad',
    desc: 'Food provides essential nutrients for overall health and well-being',
    price: 160,
    images: ["https://images.pexels.com/photos/32474564/pexels-photo-32474564/free-photo-of-delicious-seafood-squid-salad-with-vegetables.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]
  },
  {
    id: 3,
    name: 'Chicken Salad',
    desc: 'Food provides essential nutrients for overall health and well-being',
    price: 240,
    images: ["https://images.pexels.com/photos/718742/pexels-photo-718742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]
  },
  {
    id: 4,
    name: "Biryani",
    desc: "Biryani is a mixed rice dish originating among the Muslims.",
    price: 300,
    images: ["https://images.pexels.com/photos/16020573/pexels-photo-16020573/free-photo-of-rice-and-chicken-meal-on-the-plate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"]
  },
  {
    id: 5,
    name: "Paneer Tikka",
    desc: "Paneer Tikka is a vegetarian dish made with marinated paneer cubes grilled or baked.",
    image: "https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 180
  },
  {
    id: 6,
    name: "Pasta",
    desc: "It is a staple food of Italian origin made from wheat flour and water.",
    image: "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 220
  },
  {
    id: 7,
    name: "Pizza",
    desc: "Pizza is a savory dish with dough, tomatoes, cheese, and various toppings.",
    image: "https://images.pexels.com/photos/905847/pexels-photo-905847.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 250
  },
  {
    id: 8,
    name: "Sushi",
    desc: "Sushi is a Japanese dish with vinegared rice and seafood or vegetables.",
    image: "https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 350
  },
  {
    id: 9,
    name: "Tacos",
    desc: "Tacos are a traditional Mexican dish in a folded tortilla.",
    image: "https://images.pexels.com/photos/7613563/pexels-photo-7613563.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 200
  },
  {
    id: 10,
    name: "Chocolate Cake",
    desc: "Chocolate cake is a rich dessert often layered with chocolate icing.",
    image: "https://images.pexels.com/photos/697571/pexels-photo-697571.jpeg?auto=compress&cs=tinysrgb&w=600",
    price: 150
  },
  {
    id: 11,
    name: "Caesar Salad",
    desc: "A classic salad with romaine lettuce, croutons, and Caesar dressing.",
    image: "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 130
  },
  {
    id: 12,
    name: "Grilled Salmon",
    desc: "A healthy dish featuring grilled salmon with herbs and spices.",
    image: "https://images.pexels.com/photos/842142/pexels-photo-842142.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    price: 400
  }
];

const TopDishes = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('cartItems')) || [];
    setCart(saved);
  }, []);

  const saveCart = (updated) => {
    setCart(updated);
    localStorage.setItem('cartItems', JSON.stringify(updated));
  };

  const handleAdd = (item) => {
    const existing = cart.find((i) => i.id === item.id);
    const updatedCart = existing
      ? cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      : [...cart, { ...item, quantity: 1 }];
    saveCart(updatedCart);
  };

  const handleRemove = (item) => {
    const existing = cart.find((i) => i.id === item.id);
    if (!existing) return;

    const updatedCart =
      existing.quantity === 1
        ? cart.filter((i) => i.id !== item.id)
        : cart.map((i) =>
            i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i
          );
    saveCart(updatedCart);
  };

  const getQuantity = (itemId) => {
    const found = cart.find((i) => i.id === itemId);
    return found ? found.quantity : 0;
  };

  const normalizedItems = initialItems.map((item) => ({
    ...item,
    image:
      item.image ||
      (item.images && item.images.length > 0
        ? item.images[0]
        : 'https://via.placeholder.com/300x200?text=No+Image')
  }));

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h5" fontWeight="bold" mb={3}>
        Top dishes near you
      </Typography>
      <Grid container spacing={3}>
        {normalizedItems.map((item) => {
          const qty = getQuantity(item.id);
          return (
            <Grid size={{xs:2}} sm={3} md={2} key={item.id}>
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="80"
                  image={item.image}
                  alt={item.name}
                  sx={{ width: '100%', objectFit: 'cover' }}
                />
                <CardContent>
                  <Typography variant="h6">{item.name}</Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                  <Typography fontWeight="bold" mt={1}>
                    ₹{item.price}
                  </Typography>
                  <Box mt={2} display="flex" alignItems="center">
                    {qty > 0 ? (
                      <>
                        <IconButton onClick={() => handleRemove(item)}>
                          <RemoveCircleOutlineIcon />
                        </IconButton>
                        <Typography>{qty}</Typography>
                        <IconButton onClick={() => handleAdd(item)}>
                          <AddCircleOutlineIcon />
                        </IconButton>
                      </>
                    ) : (
                      <IconButton onClick={() => handleAdd(item)} color="primary">
                        <AddCircleOutlineIcon />
                      </IconButton>
                    )}
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default TopDishes;
