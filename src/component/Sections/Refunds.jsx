import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  Alert,
  Divider,
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";

function Refunds() {
  const [refundStatus, setRefundStatus] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchRefundStatus = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) throw new Error("User not authenticated");

        const res = await axios.get("http://localhost:8080/user/refund-status", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setRefundStatus(res.data.status || "None");
      } catch (err) {
        console.error(err);
        setError("Failed to load refund status.");
      } finally {
        setLoading(false);
      }
    };

    fetchRefundStatus();
  }, []);

  const handleRequestRefund = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) throw new Error("User not authenticated");

      await axios.post(
        "http://localhost:8080/user/request-refund",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Refund request submitted!");
      setRefundStatus("Pending");
    } catch (err) {
      console.error(err);
      alert("Failed to request refund. Please try again.");
    }
  };

  const getStatusUI = () => {
    switch (refundStatus) {
      case "Pending":
        return (
          <Alert severity="info" icon={<HourglassEmptyIcon />}>
            Your refund request is <strong>pending</strong> review.
          </Alert>
        );
      case "Approved":
        return (
          <Alert severity="success" icon={<CheckCircleIcon />}>
            🎉 Your refund has been <strong>approved</strong>.
          </Alert>
        );
      case "Rejected":
        return (
          <Alert severity="error" icon={<HighlightOffIcon />}>
            Your refund request was <strong>rejected</strong>.
          </Alert>
        );
      case "None":
        return (
          <Button
            variant="contained"
            color="primary"
            startIcon={<RequestQuoteIcon />}
            onClick={handleRequestRefund}
          >
            Request Refund
          </Button>
        );
      default:
        return (
          <Typography variant="body2" color="text.secondary">
            No refund information available.
          </Typography>
        );
    }
  };

  return (
    <Box
      maxWidth={500}
      mx="auto"
      mt={5}
      p={4}
      boxShadow={3}
      borderRadius={2}
      bgcolor="black"
    >
      <Typography variant="h5" fontWeight={600} gutterBottom>
        Refund Center
      </Typography>

      {loading ? (
        <Box display="flex" alignItems="center" gap={2}>
          <CircularProgress size={24} />
          <Typography>Loading refund status...</Typography>
        </Box>
      ) : (
        <>
          {error && (
            <Alert severity="error" icon={<ErrorIcon />}>
              {error}
            </Alert>
          )}

          <Box mt={2}>{getStatusUI()}</Box>

          <Divider sx={{ my: 4 }} />

          <Typography variant="h6" gutterBottom>
            📜 Refund Policy
          </Typography>
          <Typography color="text.secondary">
            Refunds are available within <strong>7 days</strong> of purchase. Each request is reviewed by our team. For further queries, please contact our support staff.
          </Typography>
        </>
      )}
    </Box>
  );
}

export default Refunds;
