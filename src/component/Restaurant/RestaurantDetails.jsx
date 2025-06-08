import {
  Divider, FormControl, FormControlLabel,
  Radio, RadioGroup, Typography, Grid
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getRestaurantById, getRestaurantCategory } from '../State/Restaurant/Action';
import { getMenuItemsByRestaurantId } from '../State/Menu/Action';
import MenuCard from './MenuCard';

const foodTypes = [
  { label: "All", value: "all" },
  { label: "Vegitarian Only", value: "vegitarian" },
  { label: "Non-Vegitarian", value: "non-vegitarian" },
  { label: "Seasonal", value: "seasonal" }
];

const RestaurantDetails = () => {
  const [foodType, setFoodType] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  const { id, city } = useParams();
  const { restaurant, menu } = useSelector(store => store);

  const handleFilter = (e) => {
    setFoodType(e.target.value);
  };

  const handleFilterCategory = (e, value) => {
    setSelectedCategory(value);
  };

  useEffect(() => {
    if (id) {
      dispatch(getRestaurantById({ jwt, restaurantId: id }));
      dispatch(getRestaurantCategory({ jwt, restaurantId: id }));
    }
  }, [id]);

  useEffect(() => {
    if (id) {
      dispatch(getMenuItemsByRestaurantId({
        jwt,
        restaurantId: id,
        vegetarian: foodType === "vegitarian",
        nonveg: foodType === "non-vegitarian",
        seasonal: foodType === "seasonal",
        foodCategory: selectedCategory
      }));
    }
  }, [foodType, selectedCategory, id]);

  const rest = restaurant.restaurant;

  return (
    <div className='px-5 lg:px-20'>
      <section>
        <h3 className="text-gray-500 py-2 mt-10">
          Home / {city} / {rest?.name}
        </h3>

        <Grid container spacing={2}>
          {[0, 1, 2, 3].map(i => (
            <Grid item xs={12} lg={6} key={i}>
              <img
                className="w-full h-[40vh] object-cover"
                src={rest?.images?.[i] || 'https://via.placeholder.com/400'}
                alt={`image-${i}`}
              />
            </Grid>
          ))}
        </Grid>

        <div className="pt-3 pb-5">
          <h1 className="text-4xl font-semibold">{rest?.name}</h1>
          <p className="text-gray-500 mt-1">{rest?.description}</p>
          <div className="space-y-3 mt-3">
            <p className="text-gray-500 flex items-center gap-3">
              <LocationOnIcon className='text-green-500' />
              <span>{city}</span>
            </p>
            <p className="text-yellow-500 flex items-center gap-3">
              <CalendarTodayIcon className='text-white' />
              <span>Mon-Sun: 11.00AM - 10.00PM (Today)</span>
            </p>
          </div>
        </div>
      </section>

      <Divider />

      <section className="pt-[2rem] lg:flex relative">
        <div className="space-y-10 lg:w-[20%] filter">
          <div className="box space-y-5 lg:sticky top-28">
            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>Food Type</Typography>
            <FormControl className="py-10 space-y-5">
              <RadioGroup value={foodType} onChange={handleFilter} name="food_type">
                {foodTypes.map(item => (
                  <FormControlLabel
                    key={item.value}
                    value={item.value}
                    control={<Radio />}
                    label={item.label}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>

          <Divider />

          <div className="box space-y-5 lg:sticky top-28">
            <Typography variant="h5" sx={{ paddingBottom: "1rem" }}>Food Category</Typography>
            <FormControl className="py-10 space-y-5">
              <RadioGroup value={selectedCategory} onChange={handleFilterCategory} name="food_category">
                {restaurant.categories.map(cat => (
                  <FormControlLabel
                    key={cat.name}
                    value={cat.name}
                    control={<Radio />}
                    label={cat.name}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
        </div>

        <div className="space-y-5 lg:w-[80%] lg:pl-10">
          {menu.menuItems.map(item => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default RestaurantDetails;
