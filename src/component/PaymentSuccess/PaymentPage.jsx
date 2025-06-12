// src/pages/PaymentPage.jsx
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box, Card, Divider, FormControlLabel,
  Switch, TextField, Typography, Checkbox
} from "@mui/material";
import { FaGooglePay, FaAmazonPay } from "react-icons/fa";
import { SiPhonepe, SiPaytm } from "react-icons/si";
import { InfoOutlined } from "@mui/icons-material";

export default function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [recurring, setRecurring] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const incomingTotal = location.state?.total;
    const savedTotal = localStorage.getItem("orderTotal");
    const alreadyAlerted = sessionStorage.getItem("alreadyAlertedPayment");

    // 1. Not logged in
    if (!isLoggedIn && !alreadyAlerted) {
      if (incomingTotal) {
        localStorage.setItem("orderTotal", incomingTotal); // save order
      }
      alert("You must be logged in to access the payment page.");
      sessionStorage.setItem("alreadyAlertedPayment", "true");
      navigate("/"); // go to home
      return;
    }

    // 2. Logged in but no cart data
    if (isLoggedIn && !incomingTotal && !savedTotal) {
      alert("No order details found. Please add items to your cart.");
      navigate("/");
      return;
    }

    // 3. Logged in + valid order
    if (incomingTotal) {
      localStorage.setItem("orderTotal", incomingTotal); // fresh save
    }

    setIsAuthorized(true);
  }, [location.state, navigate]);

  const totalAmount = parseFloat(location.state?.total || localStorage.getItem("orderTotal") || 0);

  const handleConfirmOrder = () => {
    localStorage.removeItem("orderTotal");
    setTimeout(() => {
      navigate("/payment-success");
    }, 1000);
  };

  if (!isAuthorized) return null;

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", justifyContent: "center", p: 4 }}>
      <Card sx={{ width: "100%", maxWidth: 1100, display: "flex", p: 4 }}>
        {/* Payment Method Section */}
        <Box flex={2} pr={4}>
          <Typography variant="h3" mb={2}>Payment Method</Typography>

          <Box display="flex" gap={2} mb={2}>
            {[
              { label: "Paytm", icon: <SiPaytm style={{ fontSize: 48 }} /> },
              { label: "AmazonPay", icon: <FaAmazonPay style={{ fontSize: 48 }} /> },
              { label: "PhonePe", icon: <SiPhonepe style={{ fontSize: 48 }} /> },
              { label: "GooglePay", icon: <FaGooglePay style={{ fontSize: 48 }} /> },
            ].map(({ label, icon }) => (
              <Box
                key={label}
                onClick={() => setSelectedMethod(label)}
                sx={{
                  borderRadius: 5,
                  p: 2,
                  cursor: "pointer",
                  border: selectedMethod === label ? "2px solid #1976d2" : "1px solid #ccc",
                  backgroundColor: selectedMethod === label ? "#e3f2fd" : "transparent",
                }}
              >
                {icon}
              </Box>
            ))}
          </Box>

          {/* Card Details */}
          <TextField label="Cardholder Name" fullWidth size="small" sx={{ mb: 2 }} />
          <TextField label="Card Number" fullWidth size="small" sx={{ mb: 2 }} />
          <Box display="flex" gap={2} mb={2}>
            <TextField label="Date" size="small" fullWidth />
            <TextField label="CCV" size="small" fullWidth />
          </Box>

          <Typography variant="body2" color="text.secondary" mb={2}>
            <InfoOutlined fontSize="small" sx={{ verticalAlign: "middle" }} /> Credit Card payments may take up to 24h to be processed
          </Typography>

          <FormControlLabel control={<Checkbox />} label="Save my payment details for future purchases" sx={{ mb: 2 }} />

          <Divider sx={{ my: 3 }} />
          <Typography variant="subtitle2" mb={1}>
            Enable recurring payments{" "}
            <Typography component="span" color="success.main" fontWeight="bold">(Highly recommended)</Typography>
          </Typography>
          <Typography variant="caption" display="block" mb={2}>
            Never run out of balance when sending campaigns! You can change settings anytime.
          </Typography>
          <FormControlLabel
            control={<Switch checked={recurring} onChange={e => setRecurring(e.target.checked)} />}
            label=""
          />
        </Box>

        {/* Order Summary */}
        <Box flex={1} sx={{ borderRadius: 3, p: 3, height: "fit-content" }}>
          <Typography variant="h6" mb={3}>Order Summary</Typography>

          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography>Balance amount:</Typography>
            <Typography>₹{totalAmount.toFixed(2)}</Typography>
          </Box>

          <Box display="flex" justifyContent="space-between" mb={1}>
            <Typography>GST:</Typography>
            <Typography>₹{(totalAmount * 0.21).toFixed(2)}</Typography>
          </Box>

          <Divider sx={{ my: 2 }} />

          <Box display="flex" justifyContent="space-between" mb={3}>
            <Typography fontWeight="bold">Total:</Typography>
            <Typography fontWeight="bold">₹{(totalAmount * 1.21).toFixed(2)}</Typography>
          </Box>

          <button
            onClick={handleConfirmOrder}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Confirm your order
          </button>
        </Box>
      </Card>
    </Box>
  );
}
