import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Divider,
  IconButton
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";


const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart } = useCart();

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = subtotal > 0 ? 40 : 0;
  const total = subtotal + deliveryFee;

  const handleProceedToPay = () => {
    if (subtotal === 0) {
      alert("Your cart is empty.");
      navigate("/");
      return;
    }
    localStorage.setItem("orderTotal", total);
    navigate("/payment", { state: { total } });
  };

  // Promo code state
  const [promoCode, setPromoCode] = React.useState("");
  const [appliedCode, setAppliedCode] = React.useState("");
  const [discount, setDiscount] = React.useState(0);
  const [promoError, setPromoError] = React.useState("");

  // Example: Only allow codes with uppercase letters and numbers, min 4 chars
  const promoCodeRegex = /^[A-Z0-9]{4,}$/;

  const handlePromoInput = (e) => {
    // Only allow uppercase letters and numbers
    const value = e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, "");
    setPromoCode(value);
    setPromoError("");
  };

  const handleApplyPromo = () => {
    if (!promoCodeRegex.test(promoCode)) {
      setPromoError("Invalid code. Use block letters and numbers only.");
      return;
    }
    // Example: Apply a flat 10% discount for any valid code
    setDiscount(subtotal * 0.1);
    setAppliedCode(promoCode);
    setPromoError("");
  };

  const discountedTotal = subtotal - discount + deliveryFee;

  return (
    <Box p={4}>
      <Typography variant="h5" gutterBottom>Your Cart</Typography>

      {/* Headers */}
      <Box display="flex" justifyContent="space-between" px={2} mb={3}>
        {['Item', 'Title', 'Price', 'Qty', 'Total', 'Remove'].map(h => (
          <Typography key={h} variant="subtitle2" color="textSecondary">{h}</Typography>
        ))}
      </Box>
      <Divider />

      {/* Items */}
      {cartItems.map((item) => (
        <Box key={item.id} display="flex" alignItems="center" justifyContent="space-between" px={2} py={2}>
          <Box width={80} height={80}>
            <img
              src={item.image}
              alt={item.name}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </Box>
          <Typography>{item.name}</Typography>
          <Typography>₹{item.price}</Typography>
          <Typography>{item.quantity}</Typography>
          <Typography>₹{item.price * item.quantity}</Typography>
          <IconButton onClick={() => removeFromCart(item.id)}>
            <DeleteIcon />
          </IconButton>
        </Box>
      ))}

      <Divider sx={{ mt: 4, mb: 6 }} />

      {/* Summary */}
      <Box display="flex" justifyContent="space-between" mt={2} flexWrap="wrap">
        <Box flex="1" maxWidth="400px">
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Cart Totals
          </Typography>
          <Box display="flex" justifyContent="space-between" my={1}>
            <Typography>Subtotal</Typography>
            <Typography>₹{subtotal}</Typography>
          </Box>
          {discount > 0 && (
            <Box display="flex" justifyContent="space-between" my={1}>
              <Typography color="success.main">Promo ({appliedCode})</Typography>
              <Typography color="success.main">-₹{discount.toFixed(2)}</Typography>
            </Box>
          )}
          <Divider />
          <Box display="flex" justifyContent="space-between" my={1}>
            <Typography>Delivery Fee</Typography>
            <Typography>₹{deliveryFee}</Typography>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="space-between" my={1}>
            <Typography fontWeight="bold">Total</Typography>
            <Typography fontWeight="bold">₹{discountedTotal.toFixed(2)}</Typography>
          </Box>
          <Button
            variant="contained"
            onClick={() => {
              if (subtotal === 0) {
                alert("Your cart is empty.");
                navigate("/");
                return;
              }
              // Store all relevant payment info for PaymentPage
              localStorage.setItem("orderTotal", discountedTotal);
              localStorage.setItem("orderSubtotal", subtotal);
              localStorage.setItem("orderDeliveryFee", deliveryFee);
              localStorage.setItem("orderDiscount", discount);
              localStorage.setItem("orderPromoCode", appliedCode);
              navigate("/payment", {
                state: {
                  total: discountedTotal,
                  subtotal,
                  deliveryFee,
                  discount,
                  promoCode: appliedCode
                }
              });
            }}
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
              placeholder="PROMO CODE"
              fullWidth
              variant="outlined"
              size="small"
              sx={{ mr: 1, flexGrow: 1 }}
              value={promoCode}
              onChange={handlePromoInput}
              InputProps={{ style: { textTransform: "uppercase", letterSpacing: 2 } }}
              error={!!promoError}
              helperText={promoError}
              disabled={!!appliedCode}
            />
            <Button
              variant="contained"
              sx={{ bgcolor: "primary.main", px: 3 }}
              onClick={handleApplyPromo}
              disabled={!!appliedCode}
            >
              {appliedCode ? "APPLIED" : "SUBMIT"}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;