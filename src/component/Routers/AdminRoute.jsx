// import { Route, Routes } from 'react-router-dom'
// import  CreateRestaurantForm  from '../../AdminComponent/CreateRestaurantForm/CreateRestaurantForm'
// import Admin from '../../AdminComponent/Admin/Admin'


// export const AdminRoute = () => {
//   return (
//     <div>
//         <Routes>
            
//             <Route path= "/*" element={false?<CreateRestaurantForm/>:<Admin/>}>

//             </Route>
        
//         </Routes>
//     </div>
//   )
// }

import React, { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CreateRestaurantForm from '../../AdminComponent/CreateRestaurantForm/CreateRestaurantForm';
import Admin from '../../AdminComponent/Admin/Admin';

const AdminRoute = () => {
  const [restaurantCreated, setRestaurantCreated] = useState(false);

  return (
    <Routes>
      {!restaurantCreated ? (
        <Route
          path="*"
          element={<CreateRestaurantForm onRestaurantCreate={() => setRestaurantCreated(true)} />}
        />
      ) : (
        <Route path="*" element={<Admin />} />
      )}
    </Routes>
  );
};

export default AdminRoute;