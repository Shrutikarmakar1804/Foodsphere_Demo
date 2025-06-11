import React from 'react';
import {
  Box,
  Card,
  CardHeader,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Typography,
  Chip,
  Button
} from '@mui/material';
import { IoFastFoodSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const orders = [
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
    image: "https://images.pexels.com/photos/17433352/pexels-photo-17433352/free-photo-of-combination-plate-with-maharstrian-food.jpeg",
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
    ingredients: "Rice, Chicken, Spices",
    status: "Completed",
  },
  {
    id: 6,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "rahul@gmail.com",
    price: "₹250",
    name: "Paneer Tikka",
    ingredients: "Extra Spices and Paneer",
    status: "Preparing",
  },
];

export default function OrderTable({ filter }) {
  const navigate = useNavigate();

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

  const filteredOrders = orders.filter((order) => {
    if (filter === "All") return true;
    if (filter === "Pending") return order.status.toLowerCase() === "preparing";
    if (filter === "Completed") return order.status.toLowerCase() === "completed";
    if (filter === "Cancelled") return order.status.toLowerCase() === "cancelled";
    return true;
  });

  return (
    <Box className="p-4">
      <Card elevation={3}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: '#f50057' }}>
              <IoFastFoodSharp />
            </Avatar>
          }
          action={
            <Box textAlign="right">
              <Button
                variant="contained"
                size="small"
                sx={{ mt: 1 }}
                onClick={() => navigate("/orders/create")}
              >
                + Manage Orders
              </Button>
            </Box>
          }
          title={<Typography variant="h6">All Orders</Typography>}
          sx={{ pt: 2, pb: 2 }}
        />

        <TableContainer component={Paper} elevation={0}>
          <Table sx={{ minWidth: 750 }} aria-label="order table">
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
              {filteredOrders.map((row) => (
                <TableRow
                  key={row.id}
                  hover
                  sx={{ cursor: 'pointer' }}
                  onClick={() => navigate(`/orders/${row.id}`)}
                >
                  <TableCell>{row.id}</TableCell>
                  <TableCell>
                    <Avatar src={row.image} alt={row.name} variant="rounded" />
                  </TableCell>
                  <TableCell>{row.customerEmail}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.ingredients}</TableCell>
                  <TableCell>
                    <Chip label={row.status} color={getStatusColor(row.status)} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
}
