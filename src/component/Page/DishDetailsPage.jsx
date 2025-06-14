import React, { useState, useEffect } from 'react';
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
  Grid,
  Paper,
} from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

// LocalStorage cart logic
const useCart = () => {
  const [cartItems, setCartItems] = useState(() => {
    return JSON.parse(localStorage.getItem("cartItems")) || [];
  });

  const saveCart = (items) => {
    setCartItems(items);
    localStorage.setItem("cartItems", JSON.stringify(items));
  };

  const addToCart = (item) => {
    const existing = cartItems.find((i) => i.id === item.id);
    if (!existing) {
      const updated = [...cartItems, item];
      saveCart(updated);
    }
  };

  const updateCartItemQuantity = (id, quantity) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    saveCart(updated);
  };

  return { cartItems, addToCart, updateCartItemQuantity };
};

// Demo dishes
const demoDishes = [
  {
    id: 1,
    name: "Caesar Salad",
    description: "Crisp lettuce, creamy dressing, croutons & parmesan.",
    image: "https://source.unsplash.com/400x300/?salad",
    price: 120,
  },
  {
    id: 2,
    name: "Paneer Tikka",
    description: "Grilled paneer with spicy masala.",
    image: "https://source.unsplash.com/400x300/?paneer",
    price: 180,
  },
  {
    id: 3,
    name: "Margherita Pizza",
    description: "Classic cheese pizza with rich tomato base.",
    image: "https://source.unsplash.com/400x300/?pizza",
    price: 250,
  },
  {
    id: 4,
    name: "Veg Biryani",
    description: "Fragrant rice and vegetables, spiced to perfection.",
    image: "https://source.unsplash.com/400x300/?biryani",
    price: 220,
  },
];

const DishDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { cartItems, addToCart, updateCartItemQuantity } = useCart();

  const dish = demoDishes.find((item) => item.id.toString() === id);
  const existingItem = cartItems.find((item) => item.id === dish?.id);
  const [quantity, setQuantity] = useState(existingItem ? existingItem.quantity : 1);

  useEffect(() => {
    if (existingItem) setQuantity(existingItem.quantity);
  }, [existingItem]);

  if (!dish) return <Typography variant="h5">Dish not found.</Typography>;

  const handleAddToCart = () => {
    if (existingItem) {
      updateCartItemQuantity(dish.id, quantity);
    } else {
      addToCart({ ...dish, quantity });
    }
    alert("Item added/updated in cart!");
  };

  const handleProceed = () => {
    handleAddToCart();
    navigate("/cart");
  };

  return (
    <Box p={3}>
      <Button onClick={() => navigate(-1)} variant="outlined" sx={{ mb: 2 }}>
        ← Back to Menu
      </Button>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia component="img" height="300" image={dish.image} alt={dish.name} />
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold">{dish.name}</Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>{dish.description}</Typography>
          <Typography variant="h6" sx={{ mt: 2 }} color="primary">Price: ₹{dish.price}</Typography>

          {/* Quantity Controls */}
          <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 3 }}>
            <Typography>Quantity:</Typography>
            <IconButton onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
              <Remove />
            </IconButton>
            <Typography>{quantity}</Typography>
            <IconButton onClick={() => setQuantity((q) => q + 1)}>
              <Add />
            </IconButton>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
            <Button variant="contained" onClick={handleAddToCart}>
              {existingItem ? "Update Cart" : "Add to Cart"}
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleProceed}>
              Proceed to Cart
            </Button>
          </Stack>

          <Divider sx={{ my: 3 }} />

          <Typography variant="h6" gutterBottom>Customer Rating</Typography>
          <Rating value={4.5} precision={0.5} readOnly />
          <Typography variant="body2" sx={{ mt: 1 }}>
            ⭐️ “Amazing taste and fresh ingredients!” — Demo User
          </Typography>
          <Typography variant="body2">
            ⭐️ “Would definitely order again.” — Test Customer
          </Typography>
        </Grid>
      </Grid>

      {/* Related Dishes */}
      <Box mt={5}>
        <Typography variant="h5" gutterBottom>Related Dishes</Typography>
        <Grid container spacing={2}>
          {demoDishes.filter(d => d.id !== dish.id).slice(0, 3).map((related) => (
            <Grid item xs={12} sm={6} md={4} key={related.id}>
              <Paper elevation={3} sx={{ p: 2 }}>
                <img
                  src={related.image}
                  alt={related.name}
                  style={{ width: "100%", height: 150, objectFit: "cover", borderRadius: 8 }}
                />
                <Typography variant="subtitle1" fontWeight="bold" mt={1}>
                  {related.name}
                </Typography>
                <Typography variant="body2">₹{related.price}</Typography>
                <Button
                  variant="text"
                  onClick={() => navigate(`/dish/${related.id}`)}
                  sx={{ mt: 1 }}
                >
                  View Details →
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default DishDetailsPage;