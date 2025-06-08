import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const CreateFoodCategoryForm = () => {
    const [formData, setFormData] = useState({categoryName:"",restaurantId:""});
    const handleSubmit = () => {

        const data={
            name:formData.categoryName,
            restaurantId:{
                id:1
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
                Create Food Category
            </h3>
                <form onSubmit={handleSubmit} className="space-y-5">
                    <TextField fullWidth
                                label="Food Catagory Name"
                                id="categoryName"
                                name="categoryName"
                                varient="outlined"
                                onChange={handleInputChange}
                                value={FormData.categoryName}
                                >
                    
                    </TextField>

                    <TextField fullWidth
                                label="Restaurant Id"
                                id="restaurantId"
                                name="restaurantId"
                                varient="outlined"
                                onChange={handleInputChange}
                                value={FormData.restaurantId}
                                >
                    
                    </TextField>
                    <Button variant="contained" type="submit"> 
                        Create Category 
                    </Button>
                </form>

        </div>
    
    </div>
  );
};

export default CreateFoodCategoryForm;