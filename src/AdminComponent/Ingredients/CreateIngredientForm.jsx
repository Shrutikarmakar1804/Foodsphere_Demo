import { Button, TextField, Paper } from '@mui/material';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CreateIngredientForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    categoryName: '',
    restaurantId: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: formData.categoryName,
      restaurantId: { id: parseInt(formData.restaurantId, 10) },
    };
    onCreate(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3 }}>
      <Paper elevation={3} className="p-6 rounded-lg bg-gray-800 text-white shadow-xl w-full">
        <h3 className="text-xl text-center font-semibold mb-6 text-gray-300">Create Ingredients</h3>
        <form onSubmit={handleSubmit} className="space-y-6">
          <TextField fullWidth label="Category Name" name="categoryName" variant="outlined" onChange={handleInputChange} value={formData.categoryName} InputLabelProps={{ style: { color: '#ccc' } }} InputProps={{ style: { color: '#fff' } }} />
          <TextField fullWidth label="Restaurant ID" name="restaurantId" variant="outlined" onChange={handleInputChange} value={formData.restaurantId} InputLabelProps={{ style: { color: '#ccc' } }} InputProps={{ style: { color: '#fff' } }} />
          <Button variant="contained" type="submit" fullWidth className="bg-cyan-400 hover:bg-cyan-300 text-black font-semibold">Create Ingredients</Button>
        </form>
      </Paper>
    </motion.div>
  );
};

export default CreateIngredientForm;