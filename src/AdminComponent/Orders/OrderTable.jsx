import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Snackbar,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from "@mui/material";
import { useState } from "react";

const ordersData = [
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
  },
   {
    id: 10,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "jit@gmail.com",
    price: "₹300",
    name: "chicken Tikka",
    ingredients: "Extra Spices and Chicken",
    status: "preparing",
  },
  {
    id: 11,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "ripan@gmail.com",
    price: "₹300",
    name: "Chicken Biryani",
    ingredients: "Extra Spices and Chicken",
    status: "Cancelled",
  },
  {
    id: 12,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "torsha@gmail.com",
    price: "₹300",
    name: "whooper Burger",
    ingredients: "Extra cheese and Chicken",
    status: "Completed",
  },
   {
    id: 13,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "jit@gmail.com",
    price: "₹300",
    name: "chicken Tikka",
    ingredients: "Extra Spices and Chicken",
    status: "preparing",
  },
  {
    id: 14,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "ripan@gmail.com",
    price: "₹300",
    name: "Chicken Biryani",
    ingredients: "Extra Spices and Chicken",
    status: "Cancelled",
  },
  {
    id: 15,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "torsha@gmail.com",
    price: "₹300",
    name: "whooper Burger",
    ingredients: "Extra cheese and Chicken",
    status: "Completed",
  },
   {
    id: 16,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "jit@gmail.com",
    price: "₹300",
    name: "chicken Tikka",
    ingredients: "Extra Spices and Chicken",
    status: "preparing",
  },
  {
    id: 17,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "ripan@gmail.com",
    price: "₹300",
    name: "Chicken Biryani",
    ingredients: "Extra Spices and Chicken",
    status: "Cancelled",
  },
  {
    id: 18,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "torsha@gmail.com",
    price: "₹300",
    name: "whooper Burger",
    ingredients: "Extra cheese and Chicken",
    status: "Completed",
  },
   {
    id: 19,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "jit@gmail.com",
    price: "₹300",
    name: "chicken Tikka",
    ingredients: "Extra Spices and Chicken",
    status: "preparing",
  },
  {
    id: 20,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "ripan@gmail.com",
    price: "₹300",
    name: "Chicken Biryani",
    ingredients: "Extra Spices and Chicken",
    status: "Cancelled",
  },
  {
    id: 21,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "torsha@gmail.com",
    price: "₹300",
    name: "whooper Burger",
    ingredients: "Extra cheese and Chicken",
    status: "Completed",
  },
   {
    id: 22,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "jit@gmail.com",
    price: "₹300",
    name: "chicken Tikka",
    ingredients: "Extra Spices and Chicken",
    status: "preparing",
  },
  {
    id: 23,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "ripan@gmail.com",
    price: "₹300",
    name: "Chicken Biryani",
    ingredients: "Extra Spices and Chicken",
    status: "Cancelled",
  },
  {
    id: 24,
    image: "https://images.pexels.com/photos/20371512/pexels-photo-20371512/free-photo-of-top-view-of-a-plate-with-roasted-chicken.jpeg",
    customerEmail: "torsha@gmail.com",
    price: "₹300",
    name: "whooper Burger",
    ingredients: "Extra cheese and Chicken",
    status: "Completed",
  }
];

const OrderTable = ({ filter }) => {
  const [orders, setOrders] = useState(ordersData);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleChipClick = (id) => {
    setSelectedOrderId(id);
    setDialogOpen(true);
  };

  const confirmStatusChange = () => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === selectedOrderId
          ? { ...order, status: "Completed" }
          : order
      )
    );
    setDialogOpen(false);
    setSnackbarOpen(true);
  };

  const filteredOrders =
    filter === "All"
      ? orders
      : orders.filter(
          (order) => order.status.toLowerCase() === filter.toLowerCase()
        );

  const getChipColor = (status) => {
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

  return (
    <Box sx={{ mt: 2 }}>
      <Card sx={{ backgroundColor: "#111", color: "white" }}>
        <CardContent>
          <Typography variant="h6" gutterBottom color="white">
            All Orders
          </Typography>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ backgroundColor: "#f50057" }}>
                  <TableCell sx={{ color: "white" }}>ID</TableCell>
                  <TableCell sx={{ color: "white" }}>Image</TableCell>
                  <TableCell sx={{ color: "white" }}>Customer Email</TableCell>
                  <TableCell sx={{ color: "white" }}>Price</TableCell>
                  <TableCell sx={{ color: "white" }}>Name</TableCell>
                  <TableCell sx={{ color: "white" }}>Ingredients</TableCell>
                  <TableCell sx={{ color: "white" }}>Status</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {filteredOrders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell sx={{ color: "white" }}>{order.id}</TableCell>
                    <TableCell>
                      <Avatar src={order.image} alt={order.name} />
                    </TableCell>
                    <TableCell sx={{ color: "white" }}>{order.email}</TableCell>
                    <TableCell sx={{ color: "white" }}>{order.price}</TableCell>
                    <TableCell sx={{ color: "white" }}>{order.name}</TableCell>
                    <TableCell sx={{ color: "white" }}>
                      {order.ingredients}
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={order.status}
                        color={getChipColor(order.status)}
                        onClick={() =>
                          order.status !== "Completed" && handleChipClick(order.id)
                        }
                        sx={{ cursor: "pointer" }}
                      />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
      </Card>

      {/* Confirm Dialog */}
      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <DialogTitle>Mark as Completed?</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to change the order status to <b>Completed</b>?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
          <Button onClick={confirmStatusChange} variant="contained">
            Confirm
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        message="Order marked as Completed"
      />
    </Box>
  );
};

export default OrderTable;
