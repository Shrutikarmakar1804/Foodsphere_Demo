// CreateFoodCategoryForm.jsx
import { Button, TextField, Paper, MenuItem } from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CreateFoodCategoryForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    categoryName: '',
    restaurantId: '',
    type: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCategory = {
      name: formData.categoryName,
      restaurantId: parseInt(formData.restaurantId, 10),
      type: formData.type,
    };
    if (onCreate) onCreate(newCategory);
    setFormData({ categoryName: '', restaurantId: '', type: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
    >
      <Paper elevation={3} className="p-6 rounded-lg bg-gray-800 text-white shadow-xl w-full">
        <h3 className="text-xl text-center font-semibold mb-6 text-gray-300">
          Create Food Category
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <TextField
            fullWidth
            label="Food Category Name"
            name="categoryName"
            variant="outlined"
            value={formData.categoryName}
            onChange={handleInputChange}
            InputLabelProps={{ style: { color: '#ccc' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
          <TextField
            fullWidth
            label="Restaurant ID"
            name="restaurantId"
            variant="outlined"
            value={formData.restaurantId}
            onChange={handleInputChange}
            InputLabelProps={{ style: { color: '#ccc' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
          <TextField
            fullWidth
            select
            label="Category Type"
            name="type"
            value={formData.type}
            onChange={handleInputChange}
            InputLabelProps={{ style: { color: '#ccc' } }}
            InputProps={{ style: { color: '#fff' } }}
          >
            {['Main Course', 'Starter', 'Dessert', 'Beverage'].map((type) => (
              <MenuItem key={type} value={type}>
                {type}
              </MenuItem>
            ))}
          </TextField>
          <Button
            variant="contained"
            type="submit"
            fullWidth
            className="bg-cyan-400 hover:bg-cyan-300 text-black font-semibold"
          >
            Create Category
          </Button>
        </form>
      </Paper>
    </motion.div>
  );
};

export default CreateFoodCategoryForm;
