import React, { useState } from 'react';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  TextField,
  Modal,
  Fade,
  Box
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { motion } from 'framer-motion';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 500,
  maxHeight: '90vh',
  overflowY: 'auto',
  bgcolor: '#1e1e2f',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

const RestaurantDetails = () => {
  const [open, setOpen] = useState(false);
  const [restaurantData, setRestaurantData] = useState({
    name: 'The Great Indian Restaurant',
    owner: 'Shruti Karmakar',
    cuisine: 'Indian',
    hours: '9:00 AM - 10:00 PM',
    status: true,
    country: 'India',
    city: 'Kolkata',
    postalCode: '700001',
    street: '1, Park Street',
    email: 'Shrutikarmakar0004@gmail.com',
    phone: '+919876543210'
  });

  const handleStatusToggle = () => {
    setRestaurantData((prev) => ({ ...prev, status: !prev.status }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRestaurantData({ ...restaurantData, [name]: value });
  };

  const handleModalToggle = () => setOpen(!open);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="lg:px-20 px-5 pb-10"
    >
      <Box sx={{ maxHeight: '90vh', overflowY: 'auto', pr: 2 }}>
        <div className="py-5 flex justify-between items-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-wide">
            {restaurantData.name}
          </h2>
          <div className="flex gap-3">
            <Button
              variant="contained"
              color={restaurantData.status ? 'primary' : 'error'}
              onClick={handleStatusToggle}
            >
              {restaurantData.status ? 'Close' : 'Open'}
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleModalToggle}>
              Edit
            </Button>
          </div>
        </div>

        <Grid container spacing={5}>
          <Grid size={{xs:8}} md={4}>
            <Card>
              <CardHeader title={<span className="text-gray-300">Restaurant Info</span>} />
              <CardContent className="space-y-4 text-gray-200">
                <p><strong>Owner:</strong> {restaurantData.owner}</p>
                <p><strong>Cuisine Type:</strong> {restaurantData.cuisine}</p>
                <p><strong>Opening Hours:</strong> {restaurantData.hours}</p>
                <p><strong>Country:</strong> {restaurantData.country}</p>
                <p><strong>City:</strong> {restaurantData.city}</p>
                <p><strong>Postal Code:</strong> {restaurantData.postalCode}</p>
                <p><strong>Street Address:</strong> {restaurantData.street}</p>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{xs:4}} md={4}>
            <Card>
              <CardHeader title={<span className="text-gray-300">Status Info</span>} />
              <CardContent className="space-y-4 text-gray-200">
                <p><strong>Status:</strong>{' '}
                  <span className={`px-5 py-2 rounded-full ${restaurantData.status ? 'bg-green-400 text-black' : 'bg-red-400 text-black'}`}>
                    {restaurantData.status ? 'Open' : 'Closed'}
                  </span>
                </p>
              </CardContent>
            </Card>
          </Grid>

          <Grid size={{xs:12}} md={4}>
            <Card>
              <CardHeader title={<span className="text-gray-300">Contact Info</span>} />
              <CardContent className="space-y-4 text-gray-200">
                <p><strong>Email:</strong> {restaurantData.email}</p>
                <p><strong>Phone:</strong> {restaurantData.phone}</p>
                <div className="flex items-center gap-4">
                  <strong>Social:</strong>
                  <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon sx={{ fontSize: '2rem', color: '#3b5998' }} />
                  </a>
                  <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <InstagramIcon sx={{ fontSize: '2rem', color: '#E1306C' }} />
                  </a>
                  <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <XIcon sx={{ fontSize: '2rem' }} />
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon sx={{ fontSize: '2rem', color: '#0A66C2' }} />
                  </a>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      <Modal open={open} onClose={handleModalToggle} closeAfterTransition>
        <Fade in={open}>
          <Box sx={modalStyle}>
            <h2 className="text-white text-xl mb-5">Edit Restaurant Info</h2>
            <Grid container spacing={2}>
              {[
                { label: 'Restaurant Name', name: 'name' },
                { label: 'Owner', name: 'owner' },
                { label: 'Cuisine Type', name: 'cuisine' },
                { label: 'Opening Hours', name: 'hours' },
                { label: 'Country', name: 'country' },
                { label: 'City', name: 'city' },
                { label: 'Postal Code', name: 'postalCode' },
                { label: 'Street Address', name: 'street' },
                { label: 'Email', name: 'email' },
                { label: 'Phone', name: 'phone' }
              ].map((field) => (
                <Grid size={{xs:12}} key={field.name}>
                  <TextField
                    label={field.label}
                    name={field.name}
                    fullWidth
                    variant="outlined"
                    value={restaurantData[field.name]}
                    onChange={handleChange}
                  />
                </Grid>
              ))}
              <Grid size={{xs:12}}>
                <Button variant="contained" color="primary" onClick={handleModalToggle}>Save</Button>
              </Grid>
            </Grid>
          </Box>
        </Fade>
      </Modal>
    </motion.div>
  );
};

export default RestaurantDetails;
