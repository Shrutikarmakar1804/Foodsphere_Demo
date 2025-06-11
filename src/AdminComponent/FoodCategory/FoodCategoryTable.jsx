import {
  Avatar,
  Box,
  Card,
  CardHeader,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import React from 'react';
import CreateIcon from '@mui/icons-material/Create';
import CreateFoodCategoryForm from './CreateFoodCategoryForm';
import { motion, AnimatePresence } from 'framer-motion';

const foodCategories = [
  { id: "FOOD01", name: 'Biryani' },
  { id: "FOOD02", name: 'Fried Chicken Wings' },
  { id: "FOOD03", name: 'Chicken Sausage Pizza' },
  { id: "FOOD03", name: 'Coca-Cola' },
  { id: "FOOD03", name: 'Pepsi' },
  { id: "FOOD03", name: 'Butter Panner Masala' },
  { id: "FOOD03", name: 'Chocolate "Cake' },
  { id: "FOOD03", name: 'Mango Mouse' }
];

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  outline: 0,
};

export default function FoodCategoryTable() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box className="bg-gray-900 min-h-screen text-white">
      {/* Gradient Header */}
      <header className="bg-[#f50057] p-6 flex items-center justify-between">
        <h1 className="text-lg font-bold uppercase tracking-wider">Products</h1>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <Card className="bg-gray-800 text-white shadow-lg rounded-xl overflow-hidden">
          <CardHeader
            title="Food Categories"
            action={
              <IconButton onClick={handleOpen} aria-label="add" className="text-white hover:text-blue-400">
                <CreateIcon />
              </IconButton>
            }
            sx={{ pt: 3, pb: 1, px: 3 }}
          />
          <TableContainer component={Paper} className="bg-gray-800">
            <Table sx={{ minWidth: 300 }} aria-label="food categories table">
              <TableHead>
                <TableRow>
                  <TableCell align="left" className="text-white">Food ID</TableCell>
                  <TableCell align="left" className="text-white">Food Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {foodCategories.map((row) => (
                  <TableRow
                    key={row.id}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    hover
                  >
                    <TableCell component="th" scope="row" className="text-white">
                      {row.id}
                    </TableCell>
                    <TableCell align="left" className="text-white">
                      {row.name}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </main>

      {/* Modal with Framer Motion */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="add-food-category-modal"
        closeAfterTransition
      >
        <Box sx={modalStyle}>
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className="bg-gray-900 text-white p-6 rounded-xl shadow-2xl w-[90vw] max-w-md"
              >
                <CreateFoodCategoryForm />
              </motion.div>
            )}
          </AnimatePresence>
        </Box>
      </Modal>
    </Box>
  );
}
