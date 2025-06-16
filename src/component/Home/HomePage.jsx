import React from 'react';
import { Link } from 'react-router-dom';
import { demoRestaurants } from '../data/mockData';
import { Box, Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';

const HomePage = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" mb={3}>Restaurants</Typography>
      <Grid container spacing={3}>
        {demoRestaurants.map((r) => (
          <Grid item xs={12} sm={6} md={4} key={r.id}>
            <Link to={`/restaurant/${r.id}`} style={{ textDecoration: 'none' }}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={r.image}
                  alt={r.name}
                />
                <CardContent>
                  <Typography variant="h6">{r.name}</Typography>
                  <Typography variant="body2">{r.description}</Typography>
                  <Typography variant="caption" color="text.secondary">{r.location}</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HomePage;
