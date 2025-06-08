import { Button, 
    FormControl, 
    InputLabel, 
    MenuItem, 
    Select, 
    TextField } from '@mui/material'
import React, { useState } from 'react'

const CreateIngredientForm = () => {
    const [formData, setFormData] = useState({
        Name:"",
        ingredientCatagoryId:""});
    const handleSubmit = () => {

        const data={
            name:formData.Name,
            ingredientCatagoryId:{
                id:1,
            },
        };
        console.log(data);
    };
        const handleInputChange = (e) => {
            const {name,value}=e.target
            setFormData({
                ...formData,[name]:value,
            })
        }
  return (
    <div className=''>
        <div className="p-5">
            <h3 className="text-gray-400 text-center text-xl pb-10">
                Create Category
            </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <TextField fullWidth
                                label="Category Name"
                                id="categoryname"
                                name="categoryname"
                                varient="outlined"
                                onChange={handleInputChange}
                                value={formData.categoryname}
                                ></TextField>

                                  <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                    <Select
                                      labelId="demo-simple-select-label"
                                      id="demo-simple-select"
                                      value={formData.ingredientCatagoryId}  
                                      label="ingredientCatagoryId"
                                      onChange={handleInputChange}
                                      name="ingredientCatagoryId"
                                    >
                                      <MenuItem value={10}>Ten</MenuItem>
                                      <MenuItem value={20}>Twenty</MenuItem>
                                      <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                  </FormControl>
                    <Button variant="contained" type="submit"> 
                        Create Category 
                    </Button>
                </form>

        </div>
    
    </div>
  );
};

export default CreateIngredientForm;