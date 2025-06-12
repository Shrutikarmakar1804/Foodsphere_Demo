import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminRoute } from './AdminRoute'
import { CustomerRoute } from './CustomerRoute'



 export const Routers = () => {
  return (
    <Routes>
        <Route path="/admin/restaurants/*" element={<AdminRoute/>} ></Route>
        <Route path="/*" element={<CustomerRoute/>} ></Route>
    </Routes>
  )
}

// import React from 'react';
// import { Route, Routes } from 'react-router-dom';
// import AdminRoute from './AdminRoute';
// import CustomerRoute from './CustomerRoute';

// export const Routers = () => {
//   return (
//     <Routes>
//       <Route path="/admin/*" element={<AdminRoute />} />
//       <Route path="/*" element={<CustomerRoute />} />
//     </Routes>
//   );
// };

