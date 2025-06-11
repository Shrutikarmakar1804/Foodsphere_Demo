import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Card } from '@mui/material';
import { green } from '@mui/material/colors';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { motion } from 'framer-motion';

const PaymentSuccess = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { method, total } = location.state || {};
  const formattedAmount = total ? `₹${(total + total * 0.21).toFixed(2)}` : "₹0.00";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black-100 to-green-200 px-5 py-10">
      <motion.div 
        className="bg-white rounded-xl shadow-2xl p-10 flex flex-col items-center w-full max-w-md"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.div 
          className="bg-green-100 p-5 rounded-full mb-5"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <CheckCircleOutlineIcon sx={{ fontSize: '5rem', color: green[500] }} />
        </motion.div>

        <h1 className="text-3xl font-bold text-green-700 mb-3">Payment Successful!</h1>
        <p className="text-gray-600 text-center mb-4">
          Thank you for your purchase. Your order has been placed successfully.
        </p>

        {/* <div className="text-center mb-6">
          <p className="text-lg font-semibold text-gray-700">
            Amount Paid: <span className="text-green-700">{formattedAmount}</span>
          </p>
          <p className="text-md text-gray-600">
            Payment Method: <span className="font-medium text-blue-600">{method || "N/A"}</span>
          </p>
        </div> */}

        <button
          className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-full transition duration-300"
          onClick={() => navigate('/')}
        >
          Continue Shopping
        </button>
      </motion.div>
    </div>
  );
};

export default PaymentSuccess;