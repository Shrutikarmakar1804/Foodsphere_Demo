import React, { useState } from 'react';
import {
  Box, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Avatar, Typography, Chip, Snackbar, Alert,
  Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button
} from '@mui/material';
import { IoFastFoodSharp } from "react-icons/io5";

export default function OrderTable({ filter = "All" }) {
  const [orders, setOrders] = useState([
    {
      id: 1,
      image: "https://images.pexels.com/photos/16020573/pexels-photo-16020573/free-photo-of-rice-and-chicken-meal-on-the-plate.jpeg",
      customerEmail: "shruti18@gmail.com",
      price: "₹250",
      name: "Biryani",
      ingredients: "Rice, Chicken, Spices",
      status: "Completed",
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/16020573/pexels-photo-16020573/free-photo-of-rice-and-chicken-meal-on-the-plate.jpeg",
      customerEmail: "rahul02@gmail.com",
      price: "₹180",
      name: "Biryani",
      ingredients: "Rice, Spices",
      status: "Preparing",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/17433352/pexels-photo-17433352/free-photo-of-combination-plate-with-maharstrian-food.jpeg",
      customerEmail: "shruti@gmail.com",
      price: "₹250",
      name: "Biryani",
      ingredients: "Rice, Chicken, Spices",
      status: "Completed",
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/17433352/pexels-photo-of-combination-plate-with-maharstrian-food.jpeg",
      customerEmail: "rahul@gmail.com",
      price: "₹180",
      name: "Paneer Tikka",
      ingredients: "",
      status: "Cancelled",
    },
    {
      id: 5,
      image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg",
      customerEmail: "shruti@gmail.com",
      price: "₹250",
      name: "Pizza",
      ingredients: "Extra cheese and Chicken",
      status: "Completed",
    },
    {
      id: 6,
      image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
      customerEmail: "rahul@gmail.com",
      price: "₹250",
      name: "Paneer Tikka",
      ingredients: "Extra cheese and Chicken",
      status: "Preparing",
    },
  {
    id: 7,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "jit@gmail.com",
    price: "₹300",
    name: "chicken Tikka",
    ingredients: "Extra Spices and Chicken",
    status: "preparing",
  },
  {
    id: 8,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "ripan@gmail.com",
    price: "₹300",
    name: "Chicken Biryani",
    ingredients: "Extra Spices and Chicken",
    status: "Cancelled",
  },
  {
    id: 9,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "torsha@gmail.com",
    price: "₹300",
    name: "whooper Burger",
    ingredients: "Extra cheese and Chicken",
    status: "Completed",
  }
  ]);

  const statusCycle = ["Preparing", "Completed", "Cancelled"];

  const [selectedOrder, setSelectedOrder] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [nextStatus, setNextStatus] = useState("");

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "success";
      case "preparing":
        return "warning";
      case "cancelled":
        return "error";
      default:
        return "default";
    }
  };

  const handleStatusClick = (order) => {
    const currentIndex = statusCycle.indexOf(order.status);
    const nextIndex = (currentIndex + 1) % statusCycle.length;
    const upcomingStatus = statusCycle[nextIndex];
    setSelectedOrder(order);
    setNextStatus(upcomingStatus);
    setDialogOpen(true);
  };

  const handleConfirm = () => {
    setOrders(prev =>
      prev.map(order =>
        order.id === selectedOrder.id
          ? { ...order, status: nextStatus }
          : order
      )
    );
    setSnackbarOpen(true);
    setDialogOpen(false);
    setSelectedOrder(null);
  };

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  const filteredOrders = orders.filter(order => {
    if (filter === "All") return true;
    return order.status.toLowerCase() === filter.toLowerCase();
  });

  return (
    <Box className="p-4">
      <Card elevation={3}>
        <CardHeader
          avatar={<Avatar sx={{ bgcolor: '#f50057' }}><IoFastFoodSharp /></Avatar>}
          title={<Typography variant="h6">All Orders</Typography>}
          sx={{ pt: 2, pb: 2 }}
        />
        <TableContainer component={Paper} elevation={0}>
          <Table sx={{ minWidth: 750 }}>
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f50057' }}>
                <TableCell sx={{ color: '#fff' }}>ID</TableCell>
                <TableCell sx={{ color: '#fff' }}>Image</TableCell>
                <TableCell sx={{ color: '#fff' }}>Customer Email</TableCell>
                <TableCell sx={{ color: '#fff' }}>Price</TableCell>
                <TableCell sx={{ color: '#fff' }}>Name</TableCell>
                <TableCell sx={{ color: '#fff' }}>Ingredients</TableCell>
                <TableCell sx={{ color: '#fff' }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredOrders.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={7} align="center">No orders found</TableCell>
                </TableRow>
              ) : (
                filteredOrders.map((row) => (
                  <TableRow key={row.id} hover>
                    <TableCell>{row.id}</TableCell>
                    <TableCell>
                      <Avatar src={row.image} alt={row.name} variant="rounded" />
                    </TableCell>
                    <TableCell>{row.customerEmail}</TableCell>
                    <TableCell>{row.price}</TableCell>
                    <TableCell>{row.name}</TableCell>
                    <TableCell>{row.ingredients || '-'}</TableCell>
                    <TableCell>
                      <Chip
                        label={row.status}
                        color={getStatusColor(row.status)}
                        onClick={() => handleStatusClick(row)}
                        clickable
                      />
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      {/* Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Change Status</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to change status to <strong>{nextStatus}</strong>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={handleConfirm}>Confirm</Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert severity="success" sx={{ width: '100%' }}>
          Status updated to {nextStatus}
        </Alert>
      </Snackbar>
    </Box>
  );
}
