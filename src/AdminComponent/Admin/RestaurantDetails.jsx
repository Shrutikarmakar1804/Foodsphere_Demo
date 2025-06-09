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
  width: 400,
  bgcolor: '#1e1e2f',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

export const RestaurantDetails = () => {
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
      <div className='py-5 flex justify-between items-center'>
        <h3 className='text-3xl font-bold text-white'> {restaurantData.name} </h3>
        <div className="flex gap-3">
          <Button variant="contained" color={restaurantData.status ? 'primary' : 'error'} onClick={handleStatusToggle}>
            {restaurantData.status ? 'Close' : 'Open'}
          </Button>
          <Button variant="outlined" color="secondary" onClick={handleModalToggle}>Edit</Button>
        </div>
      </div>
      <Grid container spacing={3}>
        <Grid size= {{xs:12 , md:6}} item>
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
        <Grid size= {{xs:12 , md:6}} item>  

          <Card>
            <CardHeader title={<span className="text-gray-300">Restaurant Info</span>} />
            <CardContent className="space-y-4 text-gray-200">
              <p><strong>Owner:</strong> {restaurantData.owner}</p>
              <p><strong>Cuisine Type:</strong> {restaurantData.cuisine}</p>
              <p><strong>Opening Hours:</strong> {restaurantData.hours}</p>
              <p><strong>Status:</strong> <span className={`px-3 py-1 rounded-full ${restaurantData.status ? 'bg-green-400 text-black' : 'bg-red-400 text-black'}`}>{restaurantData.status ? 'Open' : 'Closed'}</span></p>
            </CardContent>
          </Card>
        </Grid>
        <Grid size= {{xs:12 }}>
          <Card>
            <CardHeader title={<span className="text-gray-300">Address</span>} />
            <CardContent className="space-y-4 text-gray-200">
              <p><strong>Country:</strong> {restaurantData.country}</p>
              <p><strong>City:</strong> {restaurantData.city}</p>
              <p><strong>Postal Code:</strong> {restaurantData.postalCode}</p>
              <p><strong>Street Address:</strong> {restaurantData.street}</p>
            </CardContent>
          </Card>
      
        <Grid size= {{xs:12, lg: 4}}>
          <Card>
            <CardHeader title={<span className="text-gray-300">Contact Info</span>} />
            <CardContent className="space-y-4 text-gray-200">
              <p><strong>Email:</strong> {restaurantData.email}</p>
              <p><strong>Phone:</strong> {restaurantData.phone}</p>
              <div className="flex items-center gap-4">
                <strong>Social:</strong>
                <FacebookIcon sx={{ fontSize: '2rem' }} />
                <InstagramIcon sx={{ fontSize: '2rem' }} />
                <XIcon sx={{ fontSize: '2rem' }} />
                <LinkedInIcon sx={{ fontSize: '2rem' }} />
              </div>
            </CardContent>
          </Card>
          </Grid>
        </Grid>
      </Grid>

      <Modal open={open} onClose={handleModalToggle} closeAfterTransition>
        <Fade in={open}>
          <Box sx={modalStyle}>
            <h2 className="text-white text-xl mb-10">Edit Restaurant Info</h2>
            <div className="space-y-6">
              <TextField label="Restaurant Name" name="name" fullWidth variant="outlined" value={restaurantData.name} onChange={handleChange} />
              <TextField label="Owner" name="owner" fullWidth variant="outlined" value={restaurantData.owner} onChange={handleChange} />
              <TextField label="Cuisine Type" name="cuisine" fullWidth variant="outlined" value={restaurantData.cuisine} onChange={handleChange} />
              <TextField label="Opening Hours" name="hours" fullWidth variant="outlined" value={restaurantData.hours} onChange={handleChange} />
              <TextField label="Country" name="country" fullWidth variant="outlined" value={restaurantData.country} onChange={handleChange} />
              <TextField label="City" name="city" fullWidth variant="outlined" value={restaurantData.city} onChange={handleChange} />
              <TextField label="Postal Code" name="postalCode" fullWidth variant="outlined" value={restaurantData.postalCode} onChange={handleChange} />
              <TextField label="Street Address" name="street" fullWidth variant="outlined" value={restaurantData.street} onChange={handleChange} />
              <TextField label="Email" name="email" fullWidth variant="outlined" value={restaurantData.email} onChange={handleChange} />
              <TextField label="Phone" name="phone" fullWidth variant="outlined" value={restaurantData.phone} onChange={handleChange} />
              <Button variant="contained" color="primary" onClick={handleModalToggle}>Save</Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </motion.div>
  );
};

export default RestaurantDetails;
