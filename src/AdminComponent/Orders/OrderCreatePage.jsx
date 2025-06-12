import { Box, Typography } from '@mui/material';

const OrderCreatePage = () => {
  return (
    <Box p={4} sx={{ backgroundColor: '#121212', color: '#fff' }}>
      <Box mb={4}>
        <Typography variant="h5" gutterBottom>
          Create New Order
        </Typography>
        <Typography variant="body1">
          Use the form below to create a new order. (You can replace this with a form component.)
        </Typography>
        </Box>
      <Typography variant="h4" gutterBottom>
        Manage Orders
      </Typography>
      <Typography>
        This is where admins can create or manage orders. (You can replace this with a form or management table.)
      </Typography>
    </Box>
  );
};

export default OrderCreatePage;
