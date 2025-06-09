import React, { useState } from 'react';
import {
  Box,
  Button,
  Fade,
  Grid,
  Modal,
  TextField,
  Typography,
} from '@mui/material';
import {
  LocalizationProvider,
  DateTimePicker,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'background.paper',
  borderRadius: 3,
  boxShadow: 10,
  p: 4,
  outline: 'none',
};

const initialValues = {
  image: '',
  location: '',
  name: '',
  startedAt: null,
  endsAt: null,
};

export const Events = () => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('submit', formValues);
    setFormValues(initialValues);
    handleClose();
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date, key) => {
    setFormValues((prev) => ({ ...prev, [key]: date }));
  };

  return (
    <div className="p-5">
      <Button onClick={handleOpen} variant="contained">
        Create New Event
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Fade in={open}>
          <Box sx={modalStyle}>
            <Typography id="modal-title" variant="h6" gutterBottom>
              Create New Event
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                {['image', 'location', 'name'].map((field) => (
                  <Grid item xs={12} key={field}>
                    <TextField
                      name={field}
                      label={field[0].toUpperCase() + field.slice(1)}
                      variant="outlined"
                      fullWidth
                      value={formValues[field]}
                      onChange={handleFormChange}
                    />
                  </Grid>
                ))}

                {['startedAt', 'endsAt'].map((field) => (
                  <Grid item xs={12} key={field}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateTimePicker
                        label={field === 'startedAt' ? 'Start Date and Time' : 'End Date and Time'}
                        value={formValues[field]}
                        onChange={(date) => handleDateChange(date, field)}
                        renderInput={(params) => <TextField fullWidth {...params} />}
                      />
                    </LocalizationProvider>
                  </Grid>
                ))}

                <Grid item xs={12} textAlign="right">
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};
