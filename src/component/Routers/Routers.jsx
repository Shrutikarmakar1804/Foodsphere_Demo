import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CustomerRoute } from './CustomerRoute'
import { AdminRoute } from './AdminRoute'



 export const Routers = () => {
  return (
    <Routes>
        <Route path="/admin/restaurants/*" element={<AdminRoute/>} ></Route>
        <Route path="/*" element={<CustomerRoute/>} ></Route>
    </Routes>
  )
}

