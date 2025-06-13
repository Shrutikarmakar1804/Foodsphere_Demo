import { Box, Card, CardHeader, IconButton, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import CreateIngredientCatagoryForm from './CreateIngredientCatagoryForm';

const style = {
  position: 'absolute', top: '50%', left: '50%',
  transform: 'translate(-50%, -50%)', width: 400,
  bgcolor: 'background.paper', border: '2px solid #000',
  boxShadow: 24, p: 4,
};

export default function IngredientCategoryTable() {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([
    { name: 'Spices' },
    { name: 'Vegetables' },
    { name: 'Dairy' },
    { name: 'Fruits' },
    { name: 'Grains' },
    { name: 'Meat' },
    { name: 'Seafood' },
    { name: 'Condiments' }
  ]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleAddCategory = (newCategory) => {
    setCategories((prev) => [...prev, newCategory]);
    handleClose();
  };

  return (
    <Box>
      <Card className='mt-3' sx={{ bgcolor: '#121212', color: '#fff' }} elevation={6}>
        <CardHeader action={
          <IconButton onClick={handleOpen} aria-label="settings" sx={{ color: '#fff' }}>
            <CreateIcon />
          </IconButton>
        } title={"Ingredient Category"} sx={{ pt: 5, alignItems: "left", width: "38vw" }} />
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f50057' }}>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left" width= "38vw">Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {categories.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <CreateIngredientCatagoryForm onCreate={handleAddCategory} />
        </Box>
      </Modal>
    </Box>
  );
}