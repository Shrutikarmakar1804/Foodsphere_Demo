import { AddPhotoAlternate } from '@mui/icons-material';
import { Button, CircularProgress, Grid, IconButton, TextField } from '@mui/material';
import { useFormik } from 'formik';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { uploadImageToCloudinary } from '../util/UploadToCloudinary';
import { useDispatch } from 'react-redux';
import { createRestaurant } from '../../component/State/Restaurant/Action';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  name: "",
  description: "",
  cuisineType: "",
  streetAddress: "",
  city: "",
  stateProvince: "",
  postalCode: "",
  country: "",
  email: "",
  mobile: "",
  X: "",
  instagram: "",
  linkedIn: "",
  facebook: "",
  openingHours: "",
  closingHours: "",
  images: [],
};

const CreateRestaurantForm = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const { enqueueSnackbar } = useSnackbar(); 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const jwt = localStorage.getItem("jwt");

  const formik = useFormik({
    initialValues,
    onSubmit: async (values) => {
      const data = {
        name: values.name,
        description: values.description,
        cuisineType: values.cuisineType,
        address: {
          streetAddress: values.streetAddress,
          city: values.city,
          stateProvince: values.stateProvince,
          postalCode: values.postalCode,
          country: values.country,
        },
        contactInformation: {
          email: values.email,
          mobile: values.mobile,
          X: values.X,
          instagram: values.instagram,
          facebook: values.facebook,
        },
        openingHours: values.openingHours,
        closingHours: values.closingHours,
        images: values.images,
      };

      console.log("data ---", data);

      dispatch(createRestaurant({ data, token: jwt }));

      enqueueSnackbar('Restaurant created successfully!', { variant: 'success' });
      navigate("/admin/restaurants");
      formik.resetForm();
      setUploadImage(false);
    }
  });

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    setUploadImage(true);
    const image = await uploadImageToCloudinary(file);
    formik.setFieldValue("images", [...(formik.values.images || []), image]);
    setUploadImage(false);
  };

  const handleRemoveImage = (index) => {
    const updatedImages = formik.values.images.filter((_, i) => i !== index);
    formik.setFieldValue("images", updatedImages);
  };

  return (
    <div className="py-20 px-20 lg:flex items-center justify-center min-h-screen">
      <div className="lg:max-w-4xl">
        <h1 className="font-bold text-2xl text-center py-2">Add New Restaurant</h1>
        <form onSubmit={formik.handleSubmit} className="py-5">
          <Grid container spacing={5}>
            <Grid item xs={12} className="flex flex-wrap gap-3">
              <input accept="image/*" id="fileInput" style={{ display: "none" }} onChange={handleImageChange} type="file" />
              <label className="relative" htmlFor="fileInput">
                <span className="w-24 h-24 cursor-pointer flex items-center justify-center p-3 border rounded-md border-gray-600">
                  <AddPhotoAlternate className="text-white" />
                </span>
                {uploadImage && (
                  <div className="absolute top-0 bottom-0 right-0 left-0 w-24 h-24 flex items-center justify-center">
                    <CircularProgress />
                  </div>
                )}
              </label>
              <div className="flex flex-wrap gap-2">
                {formik.values.images.map((image, index) => (
                  <div className="relative" key={index}>
                    <img className="w-24 h-24 object-cover" src={image} alt="" />
                    <IconButton
                      size="small"
                      sx={{ position: "absolute", top: 0, right: 0, outline: "none" }}
                      onClick={() => handleRemoveImage(index)}
                    >
                      <CloseIcon sx={{ fontSize: "1rem" }} />
                    </IconButton>
                  </div>
                ))}
              </div>
            </Grid>

            <Grid size={{ xs:12 }} >
            <TextField fullWidth
              id="name"
              name="name"
              label="Restaurant Name"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.name}
            />
          </Grid>
          <Grid size={{ xs:12 }} >
            <TextField fullWidth              
              id="description"
              name="description"
              label="Description of your Restaurant"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.description}
            />

          </Grid>
          
          <Grid size={{ xs: 12}}>
            <TextField fullWidth
            id="cuisineType"
            name="cuisineType"
            label="Cuisine Type"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.cuisineType}
            >

            </TextField>

          </Grid>
          

                <Grid size={{ xs: 12 }}>
        <TextField fullWidth
          id="email"
          name="email"
          label="Email"
          variant="outlined"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </Grid>
      <Grid size={{ xs: 12 }}>
        <TextField fullWidth
          label="Street Address"
          id="streetAddress"
          name="streetAddress"
          onChange={formik.handleChange}
          value={formik.values.streetAddress}
        />
      </Grid>


          <Grid size={{ xs: 6 }} >
            <TextField fullWidth
            label="State Province"
            id="stateProvince"
            name="stateProvince"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.stateProvince}
            >

            </TextField>

          </Grid>
          <Grid size={{ xs: 6 }} >
            <TextField fullWidth
            label="Postal Code"
            id="postalCode"
            name="postalCode"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.postalCode}
            >

            </TextField>

          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField fullWidth
            label="Country"
            id="country"
            name="country"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.country}
            >

            </TextField>

          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField fullWidth
            label="City"
            id="city"
            name="city"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.city}
            >

            </TextField>

          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField fullWidth
            label="Phone Number"
            id="mobile"
            name="mobile"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.mobile}
            >

            </TextField>

          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField fullWidth
            label="Opening Hours"
            id="openingHours"
            name="openingHours"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.openingHours}
            >

            </TextField>

          </Grid>

          <Grid  size={{ xs: 6 }}>
            <TextField fullWidth
            label="Closing Hours"
            id="closingHours"
            name="closingHours"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.closingHours}
            >

            </TextField>

          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField fullWidth
            label="X(Twitter)"
            id="X"
            name="X"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.X}
            >

            </TextField>

          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField fullWidth
            label="Instagram"
            id="instagram"
            name="instagram"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.instagram}
            >

            </TextField>

          </Grid>

          <Grid size={{ xs: 6 }}>
            <TextField fullWidth
            label="Facebook"
            id="facebook"
            name="facebook"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.facebook}
            >

            </TextField>

          </Grid>
          <Grid size={{ xs: 6 }}>
            <TextField fullWidth
            label="LinkedIn"
            id="linkedIn"
            name="linkedIn"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.linkedIn}
            >

            </TextField>
            
          </Grid>
          <br />
          <Button variant="contained" color="secondary" type="submit">
            Create Restaurant
          </Button>
          </Grid>
        </form>
      </div>
    </div>
  );
};
export default CreateRestaurantForm;
