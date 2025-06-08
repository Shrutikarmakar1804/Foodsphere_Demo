import { AddPhotoAlternate } from '@mui/icons-material'
import { Box, Button, Chip, CircularProgress, FormControl, Grid, IconButton, InputLabel, MenuItem, OutlinedInput, Select, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { uploadImageToCloudinary } from '../util/UploadToCloudinary';

const initialValues = {
  name: "",
  description: "",
  price: "",
  category: "",
  restaurantId:"",
  ingredients:[],
  seasonal:false,
  vegetarian:true,
  images:[],
};

const CreateMenuForm = () => {
  const [uploadImage, setUploadImage] = useState(false);
  const formik=useFormik({
    initialValues,
    onSubmit: (values) =>{
        values.restaurantId = 2
        console.log("data ---",values)
    },
  });
  const handleImageChange = async(e) => {
    const file = e.target.files[0];
    setUploadImage(true)
    const image = await uploadImageToCloudinary(file)
    console.log("image ---",image)
    formik.setFieldValue("images", [...formik.values.images,image])
    setUploadImage(false)
  };
  const handleRemoveImage=(index) => {
    const updatedImages = [...formik.values.images]
    updatedImages.splice(index,1);
    formik.setFieldValue("images",updatedImages)
  };
  return (
    <div className="py-20 px-20 lg:flex itmes-center justify-center min-h-screen">
     <div className="lg:max-w-4xl">
     <h1 className="font-bold text-2xl text-center py-2">
        Add New Menu
      </h1>
      <form onSubmit={formik.handleSubmit} className="space-y-5">
        <Grid container spacing={5}>
          <Grid className="flex flex-wrap gap-3" item xs={12} lg={6}>
              <input
              accept='image/*'
              id='fileinput'
              style={{display:"none"}}
              onChange={handleImageChange}
              type='file' />

              <label className='relative' htmlFor="fileinput">
                <span 
                  className='w-24 h-24 cursor-pointer flex items-center justify-center 
                  p-3 bprder rounded-md border-gray-600 '>
                  <AddPhotoAlternate className='text-white' />
                </span>
                {
                  uploadImage && <div className="absolute top-0 bottom-0 right-0 left-0 w-24 h-24 flex items-center justify-center">
                    <CircularProgress />
                  </div>
                }
              </label>
            <div
            className="flex flex-wrap gap-2">
              {(formik.values.images).map((image,index)=>
              <div className="relative" key={index}>
                <img className="w-24 h-24 object-cover"
                key={index}
                  src={image}
                 alt="" />
                 <IconButton 
                 size="small"
                 sx={{position:"absolute",top:0,right:0, outline:"none"}}
                 onClick={()=>handleRemoveImage(index)}>
                  <CloseIcon sx={{fontSize:"1rem"}}/>
                 </IconButton>

              </div>)}

            </div>

          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth
            label="Name"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            >

            </TextField>

          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth
            label="description"
            id="description"
            name="description"
            onChange={formik.handleChange}
            value={formik.values.description}
            >

            </TextField>

          </Grid>
          <Grid item xs={12}>
            <TextField fullWidth
            label="Price"
            id="price"
            name="price"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.price}
            >

            </TextField>

          </Grid>
          <Grid item xs={12} lg="6">
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={formik.values.category}  
                  label="Food Category"
                  onChange={formik.handleChange}
                  name="category"
                >
                  <MenuItem value={10}>Biryani</MenuItem>
                  <MenuItem value={20}>pizza</MenuItem>
                  <MenuItem value={30}>KFC</MenuItem>
                </Select>
              </FormControl>
              </Grid>

              <Grid item xs={12}>
            <TextField fullWidth
            label="RestaurantId"
            id="restaurantId"
            name="restaurantId"
            variant="outlined"
            onChange={formik.handleChange}
            value={formik.values.restaurantId}
            >

            </TextField>

          </Grid>

          <Grid item xs={12}>
          <FormControl fullWidth>
        <InputLabel id="demo-multiple-chip-label">Ingredients</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          name="ingredients"
          multiple
          value={formik.values.ingredients}
          onChange={formik.handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Ingredients" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
        //MenuProps={MenuProps}
        >
          {["bread", "Sauce", "chicken"].map((name,index) => (
            <MenuItem
              key={name}
              value={name}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

          </Grid>

          <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Is Seasonal</InputLabel>
                <Select
                  labelId="seasonal"
                  id="demo-simple-select"
                  value={formik.values.seasonal}  
                  label="Is Seasonal"
                  onChange={formik.handleChange}
                  name="seasonal"
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                  
                </Select>
              </FormControl>
              </Grid>

              <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Is Vegetarian</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="vegetarian"
                  value={formik.values.vegetarian}  
                  label="Is Vegetarian"
                  onChange={formik.handleChange}
                  name="vegetarian"
                >
                  <MenuItem value={true}>Yes</MenuItem>
                  <MenuItem value={false}>No</MenuItem>
                </Select>
              </FormControl>
              </Grid>
        </Grid>
        <Button variant="contained" color="primary" type="submit">Create Restaurent</Button>
      </form>
     </div>
    </div>
  )
}

export default CreateMenuForm;
