import React, { useState, useEffect } from 'react';
import {
  Button,
  Card,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Snackbar,
  Alert,
} from '@mui/material';
import { AddLocation } from '@mui/icons-material';
import AddressCard from '../Cart/AddressCard'; // Reusable card component

const Address = ({ userEmail = "demo@example.com" }) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', street: '', city: '', zip: '' });
  const [addresses, setAddresses] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  const showSnackbar = (message, severity = 'success') => {
    setSnackbar({ open: true, message, severity });
  };

  const handleSnackbarClose = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  useEffect(() => {
    const stored = localStorage.getItem(`addresses_${userEmail}`);
    if (stored) {
      try {
        setAddresses(JSON.parse(stored));
      } catch (err) {
        console.error('Error reading addresses:', err);
      }
    }
  }, [userEmail]);

  useEffect(() => {
    localStorage.setItem(`addresses_${userEmail}`, JSON.stringify(addresses));
  }, [addresses, userEmail]);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setFormData({ name: '', street: '', city: '', zip: '' });
    setEditIndex(null);
    setOpen(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    const { name, street, city, zip } = formData;
    if (!name || !street || !city || !zip) {
      return showSnackbar('Please fill all fields', 'error');
    }

    if (editIndex !== null) {
      const updated = [...addresses];
      updated[editIndex] = formData;
      setAddresses(updated);
      showSnackbar('Address updated!');
    } else {
      setAddresses((prev) => [...prev, formData]);
      showSnackbar('New address added!');
    }

    handleClose();
  };

  const handleEdit = (address) => {
    const index = addresses.findIndex((a) => a === address);
    setEditIndex(index);
    setFormData(address);
    setOpen(true);
  };

  const handleDelete = (address) => {
    const updated = addresses.filter((a) => a !== address);
    setAddresses(updated);
    showSnackbar('Address deleted!', 'info');
  };

  const handleSelectAddress = (address) => {
    showSnackbar(`Selected address: ${address.name}`, 'success');
  };

  return (
    <section className="flex justify-center px-5 pb-10">
      <div>
        <h1 className="text-center font-semibold text-2xl py-10">Choose Delivery Address </h1>

        <div className="flex gap-5 flex-wrap justify-center">
          {addresses.map((address, index) => (
            <AddressCard
              key={index}
              item={address}
              handleSelectAddress={() => handleSelectAddress(address)}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
              showButton={true}
            />
          ))}

          <Card className="flex flex-col items-center gap-5 w-72 p-5 bg-white shadow-md">
            <AddLocation fontSize="large" />
            <div className="space-y-3 text-gray-500 w-full">
              <h1 className="font-semibold text-lg text-gray-700">Add New Address</h1>
              <Button variant="outlined" fullWidth onClick={handleOpen}>
                Add
              </Button>
            </div>
          </Card>
        </div>

        {/* Dialog */}
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{editIndex !== null ? 'Edit Address' : 'Add New Address'}</DialogTitle>
          <DialogContent>
            <div className="flex flex-col gap-4 mt-6">
              <TextField label="Name" name="name" fullWidth value={formData.name} onChange={handleChange} />
              <TextField label="Street" name="street" fullWidth value={formData.street} onChange={handleChange} />
              <TextField label="City" name="city" fullWidth value={formData.city} onChange={handleChange} />
              <TextField label="ZIP Code" name="zip" fullWidth value={formData.zip} onChange={handleChange} />
            </div>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmit} variant="contained">
              {editIndex !== null ? 'Update' : 'Save'}
            </Button>
          </DialogActions>
        </Dialog>

        {/* Snackbar */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={3000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: '100%' }}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </div>
    </section>
  );
};

export default Address;
