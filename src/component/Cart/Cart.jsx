import React, { useEffect, useState } from "react";
import { Box, Typography, Button, TextField, Divider, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const savedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedItems);

    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const saveCart = (updatedCart) => {
    setCartItems(updatedCart);
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
  };

  const handleRemoveItem = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    saveCart(updated);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? 40 : 0;
  const total = subtotal + deliveryFee;
const handleProceedToPay = () => {
  if (subtotal === 0) {
    alert("Your cart is empty. Please add items before proceeding to checkout.");
    return;
  }

  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
    alert("Please log in or register to proceed to checkout.");
    navigate("/login");
    return;
  }

  localStorage.setItem("orderTotal", total);
  navigate("/payment", { state: { total } });
};

  return (
    <Box p={4}>
      <Typography variant="h5" gutterBottom>Your Cart</Typography>

      {/* Table Headers */}
      <Box display="flex" justifyContent="space-between" px={2} mb={3}>
        {['Item', 'Title', 'Price', 'Quantity', 'Total', 'Remove'].map(header => (
          <Typography key={header} variant="subtitle2" color="textSecondary">
            {header}
          </Typography>
        ))}
      </Box>
      <Divider />

      {/* Cart Items */}
      {cartItems.map((item) => (
        <Box key={item.id} display="flex" alignItems="center" justifyContent="space-between" px={2} py={2}>
          <Box width={80} height={80}>
            <img src={item.image} alt={item.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </Box>
          <Typography>{item.name}</Typography>
          <Typography>₹{item.price}</Typography>
          <Typography>{item.quantity}</Typography>
          <Typography>₹{item.price * item.quantity}</Typography>
          <IconButton onClick={() => handleRemoveItem(item.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}

      <Divider sx={{ mt: 4, mb: 6 }} />

      {/* Cart Summary */}
      <Box display="flex" justifyContent="space-between" mt={2} flexWrap="wrap">
        <Box flex="1" maxWidth="400px">
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Cart Totals
          </Typography>
          <Box display="flex" justifyContent="space-between" my={1}>
            <Typography>Subtotal</Typography>
            <Typography>₹{subtotal}</Typography>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="space-between" my={1}>
            <Typography>Delivery Fee</Typography>
            <Typography>₹{deliveryFee}</Typography>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="space-between" my={1}>
            <Typography fontWeight="bold">Total</Typography>
            <Typography fontWeight="bold">₹{total}</Typography>
          </Box>
          <Button
            variant="contained"
            onClick={handleProceedToPay}
            sx={{ mt: 2, bgcolor: "#ff5722", px: 4, py: 1.5 }}
            fullWidth
          >
            PROCEED TO CHECKOUT
          </Button>
        </Box>

        {/* Promo Code */}
        <Box flex="1" maxWidth="400px" mt={{ xs: 4, md: 0 }}>
          <Typography variant="subtitle1" mb={2}>
            If you have a promo code, enter it here
          </Typography>
          <Box display="flex">
            <TextField
              placeholder="promo code"
              fullWidth
              variant="outlined"
              size="small"
              sx={{ mr: 1, flexGrow: 1 }}
              InputProps={{ style: { borderRadius: 4, padding: "8px 12px" } }}
            />
            <Button variant="contained" sx={{ bgcolor: "primary.main", color: "#fff", px: 3 }}>
              SUBMIT
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
