import React, { useState } from 'react';
import {
  Box,
  Grid,
  TextField,
  Button,
  IconButton,
  Typography,
  Divider,
  CircularProgress,
  Paper,
  Fade,
} from '@mui/material';
import { AddPhotoAlternate, Image, Info, Contacts } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';

const CreateRestaurantForm = ({ onRestaurantCreate }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    cuisineType: '',
    email: '',
    streetAddress: '',
    city: '',
    stateProvince: '',
    postalCode: '',
    country: '',
    mobile: '',
    openingHours: '',
    closingHours: '',
    X: '',
    instagram: '',
    linkedIn: '',
    facebook: '',
    images: [],
  });

  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploading(true);
    setTimeout(() => {
      const previewURL = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, previewURL],
      }));
      setUploading(false);
    }, 1000);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = formData.images.filter((_, i) => i !== index);
    setFormData((prev) => ({
      ...prev,
      images: updatedImages,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('restaurant', JSON.stringify(formData));
    if (onRestaurantCreate) onRestaurantCreate(formData);
  };

  return (
    <Paper
      elevation={4}
      sx={{
        p: 4,
        maxWidth: '1100px',
        margin: 'auto',
        mt: 5,
        borderRadius: 3,
        background: (theme) =>
          theme.palette.mode === 'dark'
            ? 'linear-gradient(to right, #1e1e1e, #2c2c2c)'
            : 'linear-gradient(to right, #ffffff, #f0f0f0)',
      }}
    >
      <Box mb={3}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          <Info sx={{ verticalAlign: 'middle', mr: 1 }} /> Restaurant Setup
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Fill in your restaurant details to get started.
        </Typography>
      </Box>

      <Divider sx={{ mb: 3 }} />

      {/* Image Upload Section */}
      <Box mb={3}>
        <Typography variant="h6" gutterBottom>
          <Image sx={{ verticalAlign: 'middle', mr: 1 }} /> Upload Photos
        </Typography>
        <Box display="flex" alignItems="center" gap={2} flexWrap="wrap" mb={1}>
          <input id="upload" type="file" accept="image/*" hidden onChange={handleImageChange} />
          <label htmlFor="upload">
            <Box
              sx={{
                width: 96,
                height: 96,
                border: '2px dashed #888',
                borderRadius: 2,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                cursor: 'pointer',
                backgroundColor: 'action.hover',
              }}
            >
              <AddPhotoAlternate />
            </Box>
          </label>
          {uploading && <CircularProgress size={24} />}
          {formData.images.map((img, idx) => (
            <Fade in key={idx}>
              <Box sx={{ position: 'relative' }}>
                <img
                  src={img}
                  alt={`uploaded-${idx}`}
                  style={{
                    width: 96,
                    height: 96,
                    objectFit: 'cover',
                    borderRadius: 8,
                    border: '1px solid #888',
                  }}
                />
                <IconButton
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    color: 'white',
                    '&:hover': { backgroundColor: 'rgba(0,0,0,0.8)' },
                  }}
                  onClick={() => handleRemoveImage(idx)}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </Box>
            </Fade>
          ))}
        </Box>
      </Box>

      {/* Form Fields */}
      <form onSubmit={handleSubmit}>
        <Typography variant="h6" gutterBottom>
          <Contacts sx={{ verticalAlign: 'middle', mr: 1 }} /> Details
        </Typography>

        <Grid container spacing={2}>
          {[
            ['name', 'Restaurant Name'],
            ['description', 'Description'],
            ['cuisineType', 'Cuisine Type'],
            ['email', 'Email'],
            ['mobile', 'Mobile'],
            ['streetAddress', 'Street Address'],
            ['city', 'City'],
            ['stateProvince', 'State/Province'],
            ['postalCode', 'Postal Code'],
            ['country', 'Country'],
            ['openingHours', 'Opening Hours'],
            ['closingHours', 'Closing Hours'],
            ['X', 'X (Twitter)'],
            ['instagram', 'Instagram'],
            ['linkedIn', 'LinkedIn'],
            ['facebook', 'Facebook'],
          ].map(([name, label]) => (
            <Grid size={{xs:12}} sm={6} key={name}>
              <TextField
                fullWidth
                label={label}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                variant="filled"
              />
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box textAlign="center" mt={2}>
          <Button
            variant="contained"
            size="large"
            type="submit"
            sx={{
              px: 5,
              py: 1.5,
              background: 'linear-gradient(to right, #4A00E0, #8E2DE2)',
              color: '#fff',
              fontWeight: 'bold',
              '&:hover': {
                background: 'linear-gradient(to right, #3b0088, #6d20c1)',
              },
            }}
          >
            Create Restaurant
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default CreateRestaurantForm;
