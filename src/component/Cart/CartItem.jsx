import { Chip, IconButton } from '@mui/material';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCartItem, updateCartItem } from '../State/Cart/Action';

const CartItem = ({ item }) => {
  const { jwt } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleUpdateCartItem = (delta) => {
    if (delta === -1 && item.quantity === 1) {
      handleRemoveCartItem();
      return;
    }
    const data = {
      cartItemId: item.id,
      quantity: item.quantity + delta
    };
    dispatch(updateCartItem(data, jwt));
  };

  const handleRemoveCartItem = () => {
    dispatch(removeCartItem({ cartItemId: item.id, jwt }));
  };

  return (
    <div className="px-5">
      <div className="lg:flex items-center lg:space-x-5">
        <img className="w-[5rem] h-[5rem] object-cover" src={item.food.images[0]} alt="" />
        <div className="flex items-center justify-between lg:w-[70%]">
          <div className="space-y-1 lg:space-y-3 w-full">
            <p>{item.food.name}</p>
            <div className="flex items-center space-x-1">
              <IconButton onClick={() => handleUpdateCartItem(-1)}>
                <RemoveCircleOutlineIcon />
              </IconButton>
              <span>{item.quantity}</span>
              <IconButton onClick={() => handleUpdateCartItem(1)}>
                <AddCircleOutlineIcon />
              </IconButton>
            </div>
          </div>
          <p>₹{item.totalPrice}</p>
        </div>
      </div>
      <div className="pt-3 space-x-2">
        {item.ingredients?.map((ing, i) => (
          <Chip label={ing} key={i} />
        ))}
      </div>
    </div>
  );
};

export default CartItem;