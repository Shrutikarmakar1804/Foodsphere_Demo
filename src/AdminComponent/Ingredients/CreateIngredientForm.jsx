import { Button, TextField, Paper } from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CreateIngredientForm = () => {
  const [formData, setFormData] = useState({
    categoryName: '',
    restaurantId: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: formData.categoryName,
      restaurantId: {
        id: parseInt(formData.restaurantId, 10),
      },
    };

    console.log(data);
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
          Create Ingredients
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <TextField
              fullWidth
              label="Category Name"
              id="categoryName"
              name="categoryName"
              variant="outlined"
              onChange={handleInputChange}
              value={formData.categoryName}
              InputLabelProps={{ style: { color: '#ccc' } }}
              InputProps={{ style: { color: '#fff' } }}
            />
          </div>
          <div>
            <TextField
              fullWidth
              label="Restaurant ID"
              id="restaurantId"
              name="restaurantId"
              variant="outlined"
              onChange={handleInputChange}
              value={formData.restaurantId}
              InputLabelProps={{ style: { color: '#ccc' } }}
              InputProps={{ style: { color: '#fff' } }}
            />
          </div>
          <div>
            <Button
              variant="contained"
              type="submit"
              fullWidth
              className="bg-cyan-400 hover:bg-cyan-300 text-black font-semibold"
            >
              Create Ingredients
            </Button>
          </div>
        </form>
      </Paper>
    </motion.div>
  );
};

export default CreateIngredientForm;
