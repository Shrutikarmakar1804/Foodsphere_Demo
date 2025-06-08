import { Box, Button, MenuItem, Select, TextField, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../State/Authentication/Action';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

const initialvalues = {
  fullName: '',
  email: '',
  password: '',
  role: '',
};

export const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log("form values", values);
    dispatch(registerUser({ userData: values, navigate }));
  };

  return (
    <div>
    <div
         display="flex"
         justifyContent="center"
         alignItems="center"
         height="100%"
         position="absolute"
         borderRadius={2}
         boxShadow={3}
         width="90%"
         sx={{
           backgroundImage: 'url("/your-background-image.png")',
           backgroundSize: 'cover',
           backgroundPosition: 'center',
           px: 2,
         }}
    >

      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div
          width={{ xs: '100%', sm: '500px' }}
          p={4}
          boxShadow={3}
          borderRadius={2}
          bgcolor="black"
        >
          <Typography variant="h5" align="center">
            Register
          </Typography>

          <Formik onSubmit={handleSubmit} initialValues={initialvalues}>
            <Form>
              <Field
                as={TextField}
                name="fullName"
                label="FULL NAME"
                fullWidth
                variant="outlined"
                margin="normal"
              />
              <Field
                as={TextField}
                name="email"
                label="Email"
                fullWidth
                variant="outlined"
                margin="normal"
              />
              <Field
                as={TextField}
                name="password"
                label="Password"
                type="password"
                fullWidth
                variant="outlined"
                margin="normal"
              />
              <Field name="role">
                {({ field }) => (
                  <Select
                    {...field}
                    fullWidth
                    margin="normal"
                    displayEmpty
                    variant="outlined"
                    sx={{ mt: 2 }}
                  >
                   
                    <MenuItem value="ROLE_CUSTOMER">Customer</MenuItem>
                    <MenuItem value="ROLE_RESTAURANT_OWNER">Restaurant Owner</MenuItem>
                  </Select>
                )}
              </Field>

              <Button
                sx={{ mt: 3, padding: "1rem" }}
                fullWidth
                type="submit"
                variant="contained"
              >
                Register
              </Button>
            </Form>
          </Formik>

          <Typography variant="body2" align="center" sx={{ mt: 4 }}>
            Already have an account?
            <Button size="small" onClick={() => navigate('/account/login')}
              // sx={{ ml: 1 }}
              color="primary">
              Login
            </Button>
          </Typography>
        </div>
      </motion.div>
    </div>
    </div>
  );
};

export default RegisterForm;
