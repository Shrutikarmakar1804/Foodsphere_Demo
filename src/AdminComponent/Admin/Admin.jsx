import { AdminSideBar } from './AdminSideBar'
import { Route, Routes } from 'react-router-dom'
import { Orders } from '../Orders/Orders'
import { Menu } from '../Menu/Menu'
import FoodCategory  from '../FoodCategory/FoodCategory'
import Ingredients from '../Ingredients/Ingredients'
import { Events } from '../Events/Events'
import RestaurantDetails from './RestaurantDetails'
import CreateMenuForm from '../Menu/CreateMenuForm'
import CreateOrder from '../Dashboard/CreateOrder'
import RestaurantDashboard from '../Dashboard/Dashboard'



export const Admin = () => {
  const handleClose=()=>{

  }
  return (
    <div>
        <div className='lg:flex justify-between'>
            <div>
                <AdminSideBar handleClose={handleClose}/>
            </div>
                <div className='lg:w-[80%]'>
                    <Routes>
                        <Route path='/' element={<RestaurantDashboard/>}/>
                        <Route path='/orders' element={<Orders/>}/>
                        <Route path='/menu' element={<Menu/>}/>
                        <Route path='/category' element={<FoodCategory/>}/>
                        <Route path='/ingredients' element={<Ingredients/>}/>
                        <Route path='/event' element={<Events/>}/>
                        <Route path='/create-event' element={<Events/>}/>
                        <Route path='/details' element={<RestaurantDetails/>}/>
                        <Route path='/add-menu' element={<CreateMenuForm />}/>
                        <Route path='/create-order' element={<CreateOrder />}/>
                    </Routes>
                </div>
        </div>
    </div>
  )
}
