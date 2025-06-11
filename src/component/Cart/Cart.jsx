import React from "react";
import { Box, Typography, Button, TextField, Divider } from "@mui/material";
import { useNavigate } from "react-router-dom"; // ✅ import useNavigate

const Cart = () => {
  const navigate = useNavigate(); // ✅ define navigate using the hook

  const handleProceedToPay = () => {
    navigate("/payment"); // ✅ this now works
  };

  return (
    <Box p={4}>
      {/* Table Headers */}
      <Box display="flex" justifyContent="space-between" px={2} mb={3}>
        {["Items", "Title", "Price", "Quantity", "Total", "Remove"].map((header) => (
          <Typography key={header} variant="subtitle2" color="textSecondary">
            {header}
          </Typography>
        ))}
      </Box>
      <Divider />

      {/* Cart Summary and Promo Code */}
      <Box display="flex" justifyContent="space-between" mt={6} flexWrap="wrap">
        {/* Cart Totals */}
        <Box flex="1" maxWidth="400px">
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            Cart Totals
          </Typography>
          <Box display="flex" justifyContent="space-between" my={1}>
            <Typography>Subtotal</Typography>
            <Typography>₹0</Typography>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="space-between" my={1}>
            <Typography>Delivery Fee</Typography>
            <Typography>₹0</Typography>
          </Box>
          <Divider />
          <Box display="flex" justifyContent="space-between" my={1} fontWeight="bold">
            <Typography fontWeight="bold">Total</Typography>
            <Typography fontWeight="bold">₹0</Typography>
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
            If you have a promo code, Enter it here
          </Typography>
          <Box display="flex">
            <TextField
              placeholder="promo code"
              fullWidth
              variant="outlined"
              size="small"
              sx={{ mr: 1, flexGrow: 1 }}
              InputProps={{
                style: { borderRadius: 4, padding: "8px 12px" },
              }}
            />
            <Button
              variant="contained"
              sx={{ bgcolor: "primary.main", color: "#fff", px: 3 }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Cart;
