import {
  Button,
  TextField,
  Typography,
} from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../State/Authentication/Action';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    console.log('form values', values);
    dispatch(loginUser({ userData: values, navigate }));
  };

  return (
    <div>
      
   <div
            display="flex"
            justifyContent="center"
            alignItems="center"
            height="87%"
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
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div
                 width={{ xs: '90%', sm: '500px' }}
                 p={4}
                 boxShadow={3}
                 
                 borderRadius={2}
                 bgcolor="black" 

               >
          <Typography variant="h5" className='text-center'>
            Login
          </Typography>

          <Formik onSubmit={handleSubmit} initialValues={initialValues}>
            <Form>
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
              <Button
                sx={{ mt: 3, padding: "1rem" }}
                fullWidth
                type="submit"
                variant="contained"
                color="primary"
              >
                Login
              </Button>
            </Form>
          </Formik>

          <Typography variant="body2" align="center" sx={{ mt: 4 }}>
            Don't have an account?
            <Button
              size="small"
              onClick={() => navigate("/account/register")}
              // sx={{ ml: 1 }}
              color="primary"
            >
              Register
            </Button>
          </Typography>
          <Typography variant="body2" align="center" sx={{ mt: 1 }}>
            <Button
              size="small"
              onClick={() => navigate("/forgotpassword")}
              color="primary">
              Forgot Password?
            </Button>
          </Typography>
        </div>
      </motion.div>
    </div>
    </div>
  );
};

export default LoginForm;
