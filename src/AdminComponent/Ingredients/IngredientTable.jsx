import React, { useState } from 'react';
import {
  Box, Card, CardHeader, IconButton, Modal,
  Paper, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Typography
} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
import CreateIngredientForm from './CreateIngredientForm';

const style = {
  position: 'absolute', top: '50%', left: '50%',
  transform: 'translate(-50%, -50%)', width: 500,
  bgcolor: 'background.paper', boxShadow: 24,
  borderRadius: 2, p: 4,
};

const IngredientTable = () => {
  const [open, setOpen] = useState(false);
  const [ingredients, setIngredients] = useState([
    { name: 'Turmeric Powder', restaurantId: { id: 101 } },
    { name: 'Tomatoes', restaurantId: { id: 101 } },
    { name: 'Cheddar Cheese', restaurantId: { id: 102 } },
    { name: 'Olive Oil', restaurantId: { id: 103 } },
    { name: 'Basil Leaves', restaurantId: { id: 104 } },
    { name: 'Chicken Breast', restaurantId: { id: 105 } },
    { name: 'Salmon Fillet', restaurantId: { id: 106 } },
    { name: 'Soy Sauce', restaurantId: { id: 107 } }
  ]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddIngredient = (newIngredient) => {
    setIngredients((prev) => [...prev, newIngredient]);
    handleClose();
  };

  return (
    <Box sx={{ px: 4, py: 4 }}>
      <Card sx={{ bgcolor: '#121212', color: '#fff' }} elevation={6}>
        <CardHeader
          title={<Typography variant="h6" fontWeight="bold" sx={{ color: '#fff' }}>Ingredients</Typography>}
          action={
            <IconButton onClick={handleOpen} aria-label="create" sx={{ color: '#fff' }}>
              <CreateIcon />
            </IconButton>
          }
          sx={{ pt: 5, pb: 1, borderBottom: '1px solid #333' }}
        />
        <TableContainer component={Paper} sx={{ bgcolor: '#121212' }}>
          <Table sx={{ minWidth: 500 }} aria-label="ingredient table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f50057' }}>
                <TableCell sx={{ color: '#fff' }}>Id</TableCell>
                <TableCell sx={{ color: '#fff' }} align="right">Name</TableCell>
                <TableCell sx={{ color: '#fff' }} align="right">Restaurant ID</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {ingredients.map((item, index) => (
                <TableRow key={index} hover sx={{ backgroundColor: '#1e1e1e', '&:hover': { backgroundColor: '#2c2c2c' } }}>
                  <TableCell sx={{ color: '#fff' }}>{index + 1}</TableCell>
                  <TableCell align="right" sx={{ color: '#fff' }}>{item.name}</TableCell>
                  <TableCell align="right" sx={{ color: '#fff' }}>{item.restaurantId.id}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <CreateIngredientForm onCreate={handleAddIngredient} />
        </Box>
      </Modal>
    </Box>
  );
};

export default IngredientTable;