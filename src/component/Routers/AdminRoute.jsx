import React from 'react';
import { Routes, Route } from 'react-router-dom';
import CreateRestaurantForm from '../../AdminComponent/CreateRestaurantForm/CreateRestaurantForm';
import Admin from '../../AdminComponent/Admin/Admin';

const AdminRoute = () => {
  const restaurant = localStorage.getItem("restaurant");

  return (
    <Routes>
      {!restaurant ? (
        <Route
          path="*"
          element={<CreateRestaurantForm onRestaurantCreate={() => window.location.reload()} />}
        />
      ) : (
        <Route path="*" element={<Admin />} />
      )}
    </Routes>
  );
};

export default AdminRoute;
