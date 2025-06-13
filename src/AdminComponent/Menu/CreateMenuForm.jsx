// CreateMenuForm.js
import {
  Box, Button, Chip, CircularProgress, FormControl, Grid, IconButton,
  InputLabel, MenuItem, OutlinedInput, Select, TextField, ThemeProvider,
  createTheme
} from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';
import { useFormik } from 'formik';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { uploadImageToCloudinary } from '../util/UploadToCloudinary'; // Use mock if needed
import { motion } from 'framer-motion';

const initialValues = {
  name: '',
  description: '',
  price: '',
  category: '',
  restaurantId: '',
  ingredients: [],
  seasonal: false,
  vegetarian: true,
  images: [],
};

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#aaaaaa',
    },
  },
});

const CreateMenuForm = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues,
    onSubmit: (values) => {
      const newMenu = {
        id: Date.now(),
        image: values.images[0] || '',
        title: values.name,
        ingredients: values.ingredients.join(', '),
        price: `₹${values.price}`,
        availability: 'Available'
      };

      const existingMenus = JSON.parse(localStorage.getItem("menus")) || [];
      const updatedMenus = [...existingMenus, newMenu];
      localStorage.setItem("menus", JSON.stringify(updatedMenus));
      navigate("/admin/menu");
    }
  });

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setUploadImage(true);
    const image = await uploadImageToCloudinary(file);
    formik.setFieldValue('images', [...formik.values.images, image]);
    setUploadImage(false);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...formik.values.images];
    updatedImages.splice(index, 1);
    formik.setFieldValue('images', updatedImages);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <div className="py-20 px-4 lg:px-20 flex items-center justify-center min-h-screen bg-gray-900">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-gray-800 rounded-lg shadow-lg p-6 w-full lg:max-w-4xl text-white"
        >
          <h1 className="font-bold text-3xl text-center py-4">Add New Menu</h1>
          <form onSubmit={formik.handleSubmit} className="space-y-5">
            <Grid container spacing={4}>
              <Grid size={{xs:12}} className="flex flex-wrap gap-3">
                <input accept="image/*" id="fileinput" style={{ display: 'none' }} onChange={handleImageChange} type="file" />
                <label htmlFor="fileinput">
                  <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600 bg-gray-700">
                    <AddPhotoAlternate className="text-white" />
                  </span>
                  {uploadImage && (
                    <div className="absolute top-0 bottom-0 right-0 left-0 w-24 h-24 flex items-center justify-center bg-black bg-opacity-50">
                      <CircularProgress size={24} />
                    </div>
                  )}
                </label>
                <div className="flex flex-wrap gap-2">
                  {formik.values.images.map((image, index) => (
                    <div className="relative" key={index}>
                      <img className="w-24 h-24 object-cover rounded-md" src={image} alt="" />
                      <IconButton
                        size="small"
                        sx={{ position: 'absolute', top: 0, right: 0 }}
                        onClick={() => handleRemoveImage(index)}
                      >
                        <CloseIcon sx={{ fontSize: '1rem', color: 'white' }} />
                      </IconButton>
                    </div>
                  ))}
                </div>
              </Grid>
              <Grid size={{xs:12}}>
                <TextField fullWidth label="Name" id="name" name="name" onChange={formik.handleChange} value={formik.values.name} />
              </Grid>
              <Grid size={{xs:12}}>
                <TextField fullWidth label="Description" id="description" name="description" onChange={formik.handleChange} value={formik.values.description} />
              </Grid>
              <Grid size={{xs:12}}>
                <TextField fullWidth label="Price" id="price" name="price" onChange={formik.handleChange} value={formik.values.price} />
              </Grid>
              <Grid size={{xs:12}} className="flex flex-wrap gap-3">
                <FormControl fullWidth>
                  <InputLabel>Category</InputLabel>
                  <Select label="Category" name="category" value={formik.values.category} onChange={formik.handleChange}>
                    <MenuItem value={10}>Biryani</MenuItem>
                    <MenuItem value={20}>Pizza</MenuItem>
                    <MenuItem value={30}>KFC</MenuItem>
                    <MenuItem value={40}>Burger</MenuItem>
                    <MenuItem value={50}>Chinese</MenuItem>
                    <MenuItem value={60}>Ice Cream</MenuItem>   
                    <MenuItem value={70}>Drinks</MenuItem>
                    <MenuItem value={80}>Snacks</MenuItem>
                    <MenuItem value={90}>Salads</MenuItem>  
                    <MenuItem value={100}>Desserts</MenuItem>
                    <MenuItem value={110}>Sandwiches</MenuItem>
                    <MenuItem value={120}>Wraps</MenuItem>
                    <MenuItem value={130}>Soups</MenuItem>
                    <MenuItem value={140}>Pasta</MenuItem>
                    <MenuItem value={150}>Tacos</MenuItem>
                    <MenuItem value={160}>Sushi</MenuItem>
                    <MenuItem value={170}>Curry</MenuItem>
                    <MenuItem value={180}>Salads</MenuItem>
                    <MenuItem value={190}>Grilled Items</MenuItem>  
                    <MenuItem value={200}>Breakfast</MenuItem>
                    <MenuItem value={210}>Brunch</MenuItem>
                    <MenuItem value={220}>Vegan</MenuItem>
                    <MenuItem value={230}>Gluten-Free</MenuItem>
                    <MenuItem value={240}>Seafood</MenuItem>
                    <MenuItem value={250}>Steak</MenuItem>
                    <MenuItem value={260}>Barbecue</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid size={{xs:12}} className="flex flex-wrap gap-3">
                <FormControl fullWidth>
                  <InputLabel>Ingredients</InputLabel>
                  <Select
                    name="ingredients"
                    multiple
                    value={formik.values.ingredients}
                    onChange={formik.handleChange}
                    input={<OutlinedInput label="Ingredients" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={value} />
                        ))}
                      </Box>
                    )}
                  >
                    {["Bread", "Sauce", "Chicken", "Lettuce", "Cheese", "Dough", "Patty", "Bread", "Sauce", "Chicken", "Lettuce", "Cheese", "Dough", "Patty" ].map((name) => (
                      <MenuItem key={name} value={name}>
                        {name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
            </Grid>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Create Menu
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </ThemeProvider>
  );
};

export default CreateMenuForm;
