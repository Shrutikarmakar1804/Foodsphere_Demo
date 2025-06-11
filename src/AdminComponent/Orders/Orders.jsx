import React, { useState } from 'react';
import {
  Card,
  FormControlLabel,
  Typography,
  RadioGroup,
  Radio,
  Box
} from '@mui/material';
import OrderTable from './OrderTable';

export const Orders = () => {
  const [filter, setFilter] = useState("All"); // Default: All

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className='px-2'>
      <Card className='p-5'>
        <Box px={3} pb={2}>
          <Typography variant="subtitle1" sx={{ mb: 1 }}>
            Order Status
          </Typography>
          <RadioGroup row value={filter} onChange={handleFilter}>
            <FormControlLabel value="All" control={<Radio />} label="All" />
            <FormControlLabel value="Pending" control={<Radio />} label="Pending" />
            <FormControlLabel value="Completed" control={<Radio />} label="Completed" />
            <FormControlLabel value="Cancelled" control={<Radio />} label="Cancelled" />
            
          </RadioGroup>
        </Box>
      </Card>

      <OrderTable filter={filter} />
    </div>
  );
};
