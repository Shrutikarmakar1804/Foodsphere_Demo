// src/pages/PaymentPage.jsx
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Box, Card, Divider, FormControlLabel,
  Switch, TextField, Typography, Checkbox, Grid
} from "@mui/material";
import { FaGooglePay, FaAmazonPay } from "react-icons/fa";
import { SiPhonepe, SiPaytm } from "react-icons/si";
import { InfoOutlined, AttachMoney } from "@mui/icons-material";
import { MdCreditCard } from "react-icons/md";
import { motion } from "framer-motion";

const paymentOptions = [
  { label: "Paytm", icon: <SiPaytm size={36} /> },
  { label: "GooglePay", icon: <FaGooglePay size={36} /> },
  { label: "AmazonPay", icon: <FaAmazonPay size={36} /> },
  { label: "PhonePe", icon: <SiPhonepe size={36} /> },
  { label: "Card", icon: <MdCreditCard size={36} /> },
  { label: "Cash on Delivery", icon: <AttachMoney fontSize="large" /> },
];

export default function PaymentPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [recurring, setRecurring] = useState(false);
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [cardType, setCardType] = useState("Visa");

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    const incomingTotal = location.state?.total;
    const savedTotal = localStorage.getItem("orderTotal");
    const alreadyAlerted = sessionStorage.getItem("alreadyAlertedPayment");

    if (!isLoggedIn && !alreadyAlerted) {
      if (incomingTotal) {
        localStorage.setItem("orderTotal", incomingTotal);
      }
      alert("You must be logged in to access the payment page.");
      sessionStorage.setItem("alreadyAlertedPayment", "true");
      navigate("/");
      return;
    }

    if (isLoggedIn && !incomingTotal && !savedTotal) {
      alert("No order details found. Please add items to your cart.");
      navigate("/");
      return;
    }

    if (incomingTotal) {
      localStorage.setItem("orderTotal", incomingTotal);
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
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <Box sx={{ minHeight: "100vh", p: 4, display: "flex", justifyContent: "center" }}>
        <Card sx={{ width: "100%", maxWidth: 1200, display: "flex", p: 4, flexDirection: { xs: "column", md: "row" }, gap: 4 }}>

          {/* Left Panel */}
          <Box flex={2}>
            <Typography variant="h4" mb={3}>Choose Payment Method</Typography>

            <Grid container spacing={2} mb={3}>
              {paymentOptions.map(({ label, icon }) => (
                <Grid item xs={6} sm={4} md={3} key={label}>
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Box
                      onClick={() => setSelectedMethod(label)}
                      sx={{
                        p: 2,
                        borderRadius: 4,
                        textAlign: "center",
                        cursor: "pointer",
                        border: selectedMethod === label ? "2px solid #1976d2" : "1px solid #ccc",
                        // backgroundColor: selectedMethod === label ? "#e3f2fd" : "white",
                        transition: "all 0.3s ease"
                      }}
                    >
                      <Box mb={1}>{icon}</Box>
                      <Typography variant="subtitle2">{label}</Typography>
                    </Box>
                  </motion.div>
                </Grid>
              ))}
            </Grid>

            {selectedMethod === "Card" && (
              <Box mb={4}>
                <Typography variant="h6" mb={2}>Card Details</Typography>

                {/* Card Type Buttons */}
                <Typography variant="subtitle1" mb={1}>Choose your card type</Typography>
                <Grid container spacing={2} mb={3}>
                  {["Visa", "MasterCard", "RuPay", "Amex"].map((type) => (
                    <Grid item key={type}>
                      <Box
                        onClick={() => setCardType(type)}
                        sx={{
                          px: 3,
                          py: 1.5,
                          borderRadius: 2,
                          border: cardType === type ? "2px solid #1976d2" : "1px solid #ccc",
                          // backgroundColor: cardType === type ? "#0d47a1" : "#000",
                          color: cardType === type ? "#fff" : "#ccc",
                          cursor: "pointer",
                          transition: "0.3s ease",
                          fontWeight: 500,
                          minWidth: "80px",
                          textAlign: "center"
                        }}
                      >
                        {type}
                      </Box>
                    </Grid>
                  ))}
                </Grid>

                {/* Card Preview Section */}
                <Box
                  sx={{
                    backgroundColor: "",
                    color: "#fff",
                    p: 3,
                    borderRadius: 2,
                    mb: 3,
                    boxShadow: "0 2px 10px rgba(0,0,0,0.5)"
                  }}
                >
                  <Typography variant="body1" gutterBottom>
                    <strong>Cardholder:</strong> Shruti Karmakar
                  </Typography>
                  <Typography variant="body1">
                    <strong>Card Number:</strong> **** **** **** 2345
                  </Typography>
                </Box>

                {/* Card Form Inputs */}
                <TextField label="Cardholder Name" fullWidth size="small" sx={{ mb: 2 }} />
                <TextField label="Card Number" fullWidth size="small" sx={{ mb: 2 }} />
                <Box display="flex" gap={2} mb={2}>
                  <TextField label="Expiry Date" size="small" fullWidth />
                  <TextField label="CCV" size="small" fullWidth />
                </Box>

                <Typography variant="body2" color="text.secondary" mb={2}>
                  <InfoOutlined fontSize="small" sx={{ verticalAlign: "middle", mr: 0.5 }} />
                  Debit Card payments may take up to 24h to be processed
                </Typography>

                <FormControlLabel
                  control={<Checkbox />}
                  label="Save my payment details for future purchases"
                  sx={{ color: "#fff" }}
                />
              </Box>
            )}

            {selectedMethod && selectedMethod !== "Cash on Delivery" && (
              <FormControlLabel
                control={<Switch checked={recurring} onChange={() => setRecurring(!recurring)} />}
                label="Enable recurring monthly payment"
                sx={{ mb: 2 }}
              />
            )}
          </Box>
          {/* Right Panel (Order Summary) */}
          <Box
            flex={1}
            sx={{
              backgroundColor: "",
              borderRadius: 6,
              p: 3,
              height: "fit-content",
              minWidth: "500px"
            }}
          >
            <Typography variant="h6" mb={3}>Order Summary</Typography>
            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography>Subtotal:</Typography>
              <Typography>₹{totalAmount.toFixed(2)}</Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography>GST (18%):</Typography>
              <Typography>₹{(totalAmount * 0.18).toFixed(2)}</Typography>
            </Box>
            <Divider sx={{ my: 2 }} />
            <Box display="flex" justifyContent="space-between" mb={3}>
              <Typography fontWeight="bold">Total:</Typography>
              <Typography fontWeight="bold">₹{(totalAmount * 1.21).toFixed(2)}</Typography>
            </Box>

            <Divider sx={{ my: 2 }} />
            {/* <Typography variant="h6">Total: ₹{totalAmount.toFixed(2)}</Typography> */}
            <Box mt={2}>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                <Box
                  onClick={handleConfirmOrder}
                  sx={{
                    backgroundColor: "#1976d2",
                    color: "white",
                    p: 2,
                    borderRadius: 2,
                    textAlign: "center",
                    cursor: "pointer",
                    fontWeight: 600
                  }}
                >
                  Confirm Order
                </Box>
              </motion.div>
            </Box>
          </Box>

        </Card>
      </Box>
    </motion.div>
  );
}