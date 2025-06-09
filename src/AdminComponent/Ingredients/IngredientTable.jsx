import React from 'react';
import {
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
  Typography
} from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';
// import { motion, AnimatePresence } from 'framer-motion';
import CreateIngredientForm from './CreateIngredientForm';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  borderRadius: 2,
  p: 4,
};

const IngredientTable = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const orders = [1, 1, 1, 1, 1 ];

  return (
    <Box sx={{ px: 2, py: 4 }}>
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
          <Table sx={{ minWidth: 700 }} aria-label="ingredient table">
            <TableHead>
              <TableRow sx={{ backgroundColor: '#f50057' }}>
                <TableCell sx={{ color: '#fff' }}><strong>Id</strong></TableCell>
                <TableCell align="right" sx={{ color: '#fff' }}><strong>Name</strong></TableCell>
                <TableCell align="right" sx={{ color: '#fff' }}><strong>Category</strong></TableCell>
                <TableCell align="right" sx={{ color: '#fff' }}><strong>Availability</strong></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.map((_, index) => (
                <TableRow
                  key={index}
                  hover
                  sx={{
                    backgroundColor: '#1e1e1e',
                    '&:hover': { backgroundColor: '#2c2c2c' },
                  }}
                >
                  <TableCell sx={{ color: '#fff' }}>{index + 1}</TableCell>
                  <TableCell align="right" sx={{ color: '#fff' }}>Image</TableCell>
                  <TableCell align="right" sx={{ color: '#fff' }}>Price</TableCell>
                  <TableCell align="right" sx={{ color: '#fff' }}>Biriyani</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      {/* <AnimatePresence>
        {open && (
          <Modal open={open} onClose={handleClose}>
            <Box
              component={motion.div}
              initial={{ opacity: 1, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              sx={modalStyle}
            >
              <CreateIngredientForm />
            </Box>
          </Modal>
        )}
      </AnimatePresence> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <CreateIngredientForm />
        </Box>
      </Modal>
    </Box>
  );
};

export default IngredientTable;
