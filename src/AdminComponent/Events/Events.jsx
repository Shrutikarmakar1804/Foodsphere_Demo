import React, { useState } from 'react';
import {
  Box,
  Button,
  Fade,
  Grid,
  Modal,
  TextField,
  Typography,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';
import {
  LocalizationProvider,
  DateTimePicker,
} from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

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

const Events = () => {
  const [open, setOpen] = useState(false);
  const [formValues, setFormValues] = useState(initialValues);
  const [events, setEvents] = useState([
    {
      image: 'https://b.zmtcdn.com/data/pictures/chains/2/20172/6e96bfb00b9dd20195385f866d3e0e10_featured_v2.jpg',
      name: 'Pizza Party @ Domino’s',
      location: 'MG Road',
      startedAt: dayjs('2025-06-15T18:00'),
      endsAt: dayjs('2025-06-15T22:00'),
    },
    {
      image: 'https://cdn.sanity.io/images/kbqq3e0r/production/47b731d4e4fd1f15b0024eec3feb0960c3702f89-800x445.jpg?w=3840&q=100',
      name: 'KFC Bucket Feast',
      location: 'Brigade Road',
      startedAt: dayjs('2025-06-18T20:00'),
      endsAt: dayjs('2025-06-18T23:00'),
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb3Mw8rsZ7YfYld7PGL1LSlmO4kKA1XSIUDw&s',
      name: 'Taco Bell Fiesta',
      location: 'Koramangala',
      startedAt: dayjs('2025-06-20T18:30'),
      endsAt: dayjs('2025-06-20T21:30'),
    },
    {
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw4BRVGAePY7hZzp96Tsn1fbhbFdtCO3Si2g&s',
      name: 'Domino’s Grant Pizza',
      location: 'Jayanagar',
      startedAt: dayjs('2025-06-21T19:00'),
      endsAt: dayjs('2025-06-21T22:00'),
    },
    {
      image: 'https://mcdonaldsblog.in/wp-content/uploads/2021/11/happy-childrens-day.jpg',
      name: 'McDonald’s Children’s Meal ',
      location: 'MG Road',
      startedAt: dayjs('2025-06-23T17:00'),
      endsAt: dayjs('2025-06-23T20:00'),
    },
    {
      image: 'https://i.ytimg.com/vi/lm0gcIwNkbc/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAc5_n701D3ntBEe4UR4QKzTeC_Tw',
      name: 'KFC Family Feast',
      location: 'Brigade Road',
      startedAt: dayjs('2025-06-24T19:30'),
      endsAt: dayjs('2025-06-24T22:30'),
    },
    {
      image: 'https://static.wixstatic.com/media/8b7c7b_05e4d428e11f49fb9008a396d237289f~mv2.png/v1/fill/w_320,h_180,enc_auto/file.jpeg%201x,%20https://static.wixstatic.com/media/8b7c7b_05e4d428e11f49fb9008a396d237289f~mv2.png/v1/fill/w_640,h_360,enc_auto/file.jpeg%202x,%20https://static.wixstatic.com/media/8b7c7b_05e4d428e11f49fb9008a396d237289f~mv2.png/v1/fill/w_960,h_540,enc_auto/file.jpeg%203x',
      name: 'Burger King Whopper Night',
      location: 'Indiranagar',
      startedAt: dayjs('2025-06-25T20:00'),
      endsAt: dayjs('2025-06-25T23:00'),
    },
    {
      image: 'https://www.allrecipes.com/thmb/5vfVjThzZsweDidPCuRLZLVTut4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ar-taste-test-taco-bell-unique-1-4x3-94016192e88a428f925c209fe29081a3.jpg',
      name: 'Taco Bell Taco Tuesday',
      location: 'Koramangala',
      startedAt: dayjs('2025-06-26T18:30'),
      endsAt: dayjs('2025-06-26T21:30'),
    }
  ]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setEvents([...events, formValues]);
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
    <Box p={4} sx={{ backgroundColor: '#000', minHeight: '100vh' }}>
      <Typography variant="h4" fontWeight="bold" color="#fff" mb={3}>
        Current Events 🎉
      </Typography>

      <Button onClick={handleOpen} variant="contained" sx={{ mb: 3 }}>
        Create New Event
      </Button>

      <Grid container spacing={3}>
        {events.map((event, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ borderRadius: 3, backgroundColor: '#121212', color: '#fff' }}>
              <CardMedia
                component="img"
                image={event.image}
                alt={event.name}
                sx={{
                  height: 140,
                  objectFit: 'cover',
                  borderTopLeftRadius: '12px',
                  borderTopRightRadius: '12px',
                }}
              />
              <CardContent sx={{ p: 2 }}>
                <Typography variant="subtitle1" fontWeight="bold">
                  {event.name}
                </Typography>
                <Typography variant="body2" color="#bbb">
                  📍 {event.location}
                </Typography>
                <Typography variant="body2" color="#bbb">
                  🗓️ {dayjs(event.startedAt).format('MMM D, YYYY h:mm A')} →{' '}
                  {dayjs(event.endsAt).format('h:mm A')}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal Form */}
      <Modal open={open} onClose={handleClose} closeAfterTransition>
        <Fade in={open}>
          <Box sx={modalStyle}>
            <Typography variant="h6" gutterBottom>
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
                      required
                    />
                  </Grid>
                ))}

                {['startedAt', 'endsAt'].map((field) => (
                  <Grid item xs={12} key={field}>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                      <DateTimePicker
                        label={
                          field === 'startedAt'
                            ? 'Start Date and Time'
                            : 'End Date and Time'
                        }
                        value={formValues[field]}
                        onChange={(date) => handleDateChange(date, field)}
                        renderInput={(params) => (
                          <TextField fullWidth required {...params} />
                        )}
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
    </Box>
  );
};

export default Events;
