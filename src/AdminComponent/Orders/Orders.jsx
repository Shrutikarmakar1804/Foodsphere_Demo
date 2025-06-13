import { useState } from 'react';
import {
  Card,
  FormControlLabel,
  Typography,
  RadioGroup,
  Radio,
  Box
} from '@mui/material';
import OrderTable from './OrderTable';

const Orders = () => {
  const [filter, setFilter] = useState("All"); // Default filter

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className='px-5' style={{ marginTop: '20px' }}>
      <Card className='p-5' elevation={3}>
        <Box px={3} pb={2}>
          <Typography
            variant="subtitle1"
            sx={{ mb: 2 }}
            gutterBottom
            fontSize={30}
          >
            Order Status
          </Typography>

          <RadioGroup
            row
            name="order-status-filter"
            value={filter}
            onChange={handleFilter}
          >
            <FormControlLabel value="All" control={<Radio />} label="All" />
            <FormControlLabel value="Pending" control={<Radio />} label="Pending" />
            <FormControlLabel value="Completed" control={<Radio />} label="Completed" />
            <FormControlLabel value="Cancelled" control={<Radio />} label="Cancelled" />
          </RadioGroup>
        </Box>
      </Card>

      {/* Pass filter value to OrderTable */}
      <OrderTable filter={filter} />
    </div>
  );
};

export default Orders;
