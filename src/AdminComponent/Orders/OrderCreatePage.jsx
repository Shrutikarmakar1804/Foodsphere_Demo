import {
  Box, Card, CardHeader, IconButton, Paper, Table,
  TableBody, TableCell, TableContainer, TableHead,
  TableRow, Avatar, Typography, Button, TextField, MenuItem,
  Grid, Chip
} from '@mui/material';
import { Delete, Visibility, Edit, AddCircleOutline } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { MdMenuBook } from "react-icons/md";

const defaultOrders = [
  {
    id: '0000134',
    name: "admin tech",
    branch: "Branch Name 3",
    date: "17/11/2017",
    time: "12:55 PM",
    total: "₹30.80",
    status: "Accepted"
  },
  {
    id: '0000133',
    name: "admin tech",
    branch: "peppers",
    date: "15/11/2017",
    time: "02:21 PM",
    total: "₹221.60",
    status: "Pending"
  },
  {
    id: '0000132',
    name: "admin tech",
    branch: "peppers",
    date: "06/11/2017",
    time: "05:04 PM",
    total: "₹49.00",
    status: "Rejected"
  }
];

const statuses = ["All", "Accepted", "Pending", "Rejected"];

function OrderCreatePage() {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("orders"));
    if (saved && saved.length) {
      setOrders(saved);
    } else {
      setOrders(defaultOrders);
      localStorage.setItem("orders", JSON.stringify(defaultOrders));
    }
  }, []);

  const handleDelete = (id) => {
    const updated = orders.filter(order => order.id !== id);
    setOrders(updated);
    localStorage.setItem("orders", JSON.stringify(updated));
  };

  const filteredOrders = orders.filter(order => {
    const matchStatus = statusFilter === "All" || order.status === statusFilter;
    const matchSearch = order.id.includes(search) || order.name.toLowerCase().includes(search.toLowerCase());
    return matchStatus && matchSearch;
  });

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case "accepted": return "success";
      case "pending": return "warning";
      case "rejected": return "error";
      default: return "default";
    }
  };

  return (
    <Box className="p-4">
      <Card elevation={3}>
        <CardHeader
          title={
            <Box display="flex" alignItems="center" gap={1}>
              <MdMenuBook size={24} />
              <Typography variant="h6">Orders</Typography>
            </Box>
          }
          action={
            <Button
              variant="contained"
              startIcon={<AddCircleOutline />}
              onClick={() => navigate("/admin/create-order")}
              sx={{ textTransform: "none" }}
            >
              Add Order
            </Button>
          }
          sx={{ pt: 2, pb: 1 }}
        />

        {/* Filters */}
        <Box px={2} pb={2}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                label="From Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                label="To Date"
                type="date"
                InputLabelProps={{ shrink: true }}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6} md={2}>
              <TextField
                select
                label="Status"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                fullWidth
              >
                {statuses.map(status => (
                  <MenuItem key={status} value={status}>{status}</MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <TextField
                label="Search order number..."
                variant="outlined"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
        </Box>

        {/* Table */}
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 750 }} aria-label="orders table">
            <TableHead>
              <TableRow sx={{ backgroundColor: "#f50057" }}>
                <TableCell sx={{ color: "#fff" }}>Order Number</TableCell>
                <TableCell sx={{ color: "#fff" }}>Name</TableCell>
                <TableCell sx={{ color: "#fff" }}>Branch Name</TableCell>
                <TableCell sx={{ color: "#fff" }}>Order Date</TableCell>
                <TableCell sx={{ color: "#fff" }}>Order Time</TableCell>
                <TableCell sx={{ color: "#fff" }}>Order Total</TableCell>
                <TableCell sx={{ color: "#fff" }}>Status</TableCell>
                <TableCell sx={{ color: "#fff" }}>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredOrders.map(order => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.name}</TableCell>
                  <TableCell>{order.branch}</TableCell>
                  <TableCell>{order.date}</TableCell>
                  <TableCell>{order.time}</TableCell>
                  <TableCell>{order.total}</TableCell>
                  <TableCell>
                    <Chip label={order.status} color={getStatusColor(order.status)} />
                  </TableCell>
                  <TableCell>
                    <IconButton color="primary">
                      <Visibility />
                    </IconButton>
                    <IconButton color="warning">
                      <Edit />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDelete(order.id)}>
                      <Delete />
                    </IconButton>
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

export default OrderCreatePage;
