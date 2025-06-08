import { Card, Chip, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isPresentInFavourites } from '../config/logic';
import {  addToFavorites } from '../State/Authentication/Action';

const RestaurantCard = ({item}) => {
  const navigate=useNavigate()
  const dispatch=useDispatch();
  const jwt=localStorage.getItem("jwt")
  const auth=useSelector(store=>store)

  const handleAddToFavorite=()=>{
    dispatch(addToFavorites({restaurantId:item.id,jwt}))
  }

  const handleNavigateToRestaurant=()=>{  
    if(item.open){
      navigate(`/restaurants/${item.address.city}/${item.id}/${item.name}`)
    }
  }
  return (
    <Card  className=' w-[18rem]'>
        <div 
        className={`${true?'cursor-pointer':"cursor-not-allowed"}relative`}>
<img className="w-full h-[10rem] rounded-t-md object-cover"
src={item.images[0]}
alt="" 
/>
<Chip
size="small"
className="absolute top-2 left-2"
color={item.open?"success":"error"}
label={item.open?"open":'closed'}
  />

        </div>
        <div className="p-4 textPart lg:flex w-full justify-between">
          <div className="space-y-1">
            <p onClick={handleNavigateToRestaurant}className="font-semibold text-lg cursor-pointer">{item.name}</p>
            <p className="text-gray-500 text-sm">
              {item.description}
            </p>
          </div>
          <div>
            <IconButton onClick={handleAddToFavorite}>
              {isPresentInFavourites(auth.favorites,item)?<FavoriteIcon/>:<FavoriteBorderIcon/>}
            </IconButton>
          </div>

        </div>
      
    </Card>
  )
}

export default RestaurantCard;
