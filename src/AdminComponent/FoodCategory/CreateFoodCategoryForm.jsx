// CreateFoodCategoryForm.jsx
import { Button, TextField, Paper } from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CreateFoodCategoryForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    categoryName: '',
    restaurantId: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCategory = {
      name: formData.categoryName,
      restaurantId: parseInt(formData.restaurantId, 10),
    };

    if (onCreate) {
      onCreate(newCategory);
    }

    // Optionally reset the form
    setFormData({ categoryName: '', restaurantId: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
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
            onChange={handleInputChange}
            value={formData.categoryName}
            InputLabelProps={{ style: { color: '#ccc' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
          <TextField
            fullWidth
            label="Restaurant ID"
            name="restaurantId"
            variant="outlined"
            onChange={handleInputChange}
            value={formData.restaurantId}
            InputLabelProps={{ style: { color: '#ccc' } }}
            InputProps={{ style: { color: '#fff' } }}
          />
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
