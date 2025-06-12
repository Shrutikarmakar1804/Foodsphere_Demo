import React, { useState } from 'react';
import {
  Grid,
  TextField,
  Button,
  IconButton,
  CircularProgress
} from '@mui/material';
import { AddPhotoAlternate } from '@mui/icons-material';
import CloseIcon from '@mui/icons-material/Close';

const CreateRestaurantForm = ({ onRestaurantCreate }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    cuisineType: '',
    email: '',
    streetAddress: '',
    city: '',
    stateProvince: '',
    postalCode: '',
    country: '',
    mobile: '',
    openingHours: '',
    closingHours: '',
    X: '',
    instagram: '',
    linkedIn: '',
    facebook: '',
    images: []
  });

  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setUploading(true);

    // Simulate upload with timeout
    setTimeout(() => {
      const fakeURL = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, fakeURL]
      }));
      setUploading(false);
    }, 1000);
  };

  const handleRemoveImage = (index) => {
    const updated = [...formData.images];
    updated.splice(index, 1);
    setFormData({ ...formData, images: updated });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Demo Created Restaurant:', formData);
    onRestaurantCreate(); // triggers switch to Admin dashboard
  };

  return (
    <div className="py-20 px-10 min-h-screen">
      <h2 className="text-2xl font-bold text-center mb-6">Add New Restaurant (Demo)</h2>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Upload Section */}
          <Grid item xs={12} className="flex gap-2 flex-wrap">
            <input id="upload" type="file" accept="image/*" hidden onChange={handleImageChange} />
            <label htmlFor="upload">
              <span className="w-24 h-24 cursor-pointer flex items-center justify-center border border-gray-400 rounded">
                <AddPhotoAlternate />
              </span>
            </label>
            {uploading && <CircularProgress size={24} />}
            {formData.images.map((img, idx) => (
              <div className="relative" key={idx}>
                <img src={img} alt="" className="w-24 h-24 object-cover" />
                <IconButton
                  size="small"
                  sx={{ position: 'absolute', top: 0, right: 0 }}
                  onClick={() => handleRemoveImage(idx)}
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </div>
            ))}
          </Grid>

          {/* Text Fields */}
          {[
            ['name', 'Restaurant Name'],
            ['description', 'Description'],
            ['cuisineType', 'Cuisine Type'],
            ['email', 'Email'],
            ['mobile', 'Mobile'],
            ['streetAddress', 'Street Address'],
            ['city', 'City'],
            ['stateProvince', 'State/Province'],
            ['postalCode', 'Postal Code'],
            ['country', 'Country'],
            ['openingHours', 'Opening Hours'],
            ['closingHours', 'Closing Hours'],
            ['X', 'X (Twitter)'],
            ['instagram', 'Instagram'],
            ['linkedIn', 'LinkedIn'],
            ['facebook', 'Facebook']
          ].map(([name, label]) => (
            <Grid item xs={12} sm={6} key={name}>
              <TextField
                fullWidth
                name={name}
                label={label}
                value={formData[name]}
                onChange={handleChange}
              />
            </Grid>
          ))}

          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Create Restaurant
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CreateRestaurantForm;


// import React, { useState } from 'react';
// import {
//   Grid,
//   TextField,
//   Button,
//   IconButton,
//   CircularProgress
// } from '@mui/material';
// import { AddPhotoAlternate } from '@mui/icons-material';
// import CloseIcon from '@mui/icons-material/Close';

// const CreateRestaurantForm = ({ onRestaurantCreate }) => {
//   const [formData, setFormData] = useState({
//     name: '',
//     description: '',
//     cuisineType: '',
//     email: '',
//     streetAddress: '',
//     city: '',
//     stateProvince: '',
//     postalCode: '',
//     country: '',
//     mobile: '',
//     openingHours: '',
//     closingHours: '',
//     X: '',
//     instagram: '',
//     linkedIn: '',
//     facebook: '',
//     images: []
//   });

//   const [uploading, setUploading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (!file) return;
//     setUploading(true);

//     // Simulate upload with timeout
//     setTimeout(() => {
//       const fakeURL = URL.createObjectURL(file);
//       setFormData((prev) => ({
//         ...prev,
//         images: [...prev.images, fakeURL]
//       }));
//       setUploading(false);
//     }, 1000);
//   };

//   const handleRemoveImage = (index) => {
//     const updated = [...formData.images];
//     updated.splice(index, 1);
//     setFormData({ ...formData, images: updated });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Demo Created Restaurant:', formData);
//     onRestaurantCreate(); // triggers switch to Admin dashboard
//   };

//   return (
//     <div className="py-20 px-10 min-h-screen">
//       <h2 className="text-2xl font-bold text-center mb-6">Add New Restaurant (Demo)</h2>
//       <form onSubmit={handleSubmit}>
//         <Grid container spacing={2}>
//           {/* Upload Section */}
//           <Grid item xs={12} className="flex gap-2 flex-wrap">
//             <input id="upload" type="file" accept="image/*" hidden onChange={handleImageChange} />
//             <label htmlFor="upload">
//               <span className="w-24 h-24 cursor-pointer flex items-center justify-center border border-gray-400 rounded">
//                 <AddPhotoAlternate />
//               </span>
//             </label>
//             {uploading && <CircularProgress size={24} />}
//             {formData.images.map((img, idx) => (
//               <div className="relative" key={idx}>
//                 <img src={img} alt="" className="w-24 h-24 object-cover" />
//                 <IconButton
//                   size="small"
//                   sx={{ position: 'absolute', top: 0, right: 0 }}
//                   onClick={() => handleRemoveImage(idx)}
//                 >
//                   <CloseIcon fontSize="small" />
//                 </IconButton>
//               </div>
//             ))}
//           </Grid>

//           {/* Text Fields */}
//           {[
//             ['name', 'Restaurant Name'],
//             ['description', 'Description'],
//             ['cuisineType', 'Cuisine Type'],
//             ['email', 'Email'],
//             ['mobile', 'Mobile'],
//             ['streetAddress', 'Street Address'],
//             ['city', 'City'],
//             ['stateProvince', 'State/Province'],
//             ['postalCode', 'Postal Code'],
//             ['country', 'Country'],
//             ['openingHours', 'Opening Hours'],
//             ['closingHours', 'Closing Hours'],
//             ['X', 'X (Twitter)'],
//             ['instagram', 'Instagram'],
//             ['linkedIn', 'LinkedIn'],
//             ['facebook', 'Facebook']
//           ].map(([name, label]) => (
//             <Grid item xs={12} sm={6} key={name}>
//               <TextField
//                 fullWidth
//                 name={name}
//                 label={label}
//                 value={formData[name]}
//                 onChange={handleChange}
//               />
//             </Grid>
//           ))}

//           <Grid item xs={12}>
//             <Button type="submit" variant="contained" color="primary">
//               Create Restaurant
//             </Button>
//           </Grid>
//         </Grid>
//       </form>
//     </div>
//   );
// };

// export default CreateRestaurantForm;