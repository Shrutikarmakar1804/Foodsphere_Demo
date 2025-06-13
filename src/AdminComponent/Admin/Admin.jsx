import { AdminSideBar } from './AdminSideBar'
import { Route, Routes } from 'react-router-dom'
import FoodCategory  from '../FoodCategory/FoodCategory'
import Ingredients from '../Ingredients/Ingredients'
import RestaurantDetails from './RestaurantDetails'
import CreateMenuForm from '../Menu/CreateMenuForm'
import CreateOrder from '../Dashboard/CreateOrder'
import RestaurantDashboard from '../Dashboard/Dashboard'
import CreateEvent from '../Events/CreateEvent'
import Events from '../Events/Events'
import Orders from '../Orders/Orders'
import Menu from '../Menu/Menu'
import OrderCreatePage from '../Orders/OrderCreatePage'



const Admin = () => {
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
                        <Route path='dashboard' element={<RestaurantDashboard/>}/>
                        <Route path='orders' element={<Orders/>}/>
                        <Route path='menu' element={<Menu/>}/>
                        <Route path='food-category' element={<FoodCategory/>}/>
                        <Route path='ingredients' element={<Ingredients/>}/>
                        <Route path='events' element={<Events/>}/>
                        <Route path='create-event' element={<CreateEvent/>}/>
                        <Route path='details' element={<RestaurantDetails/>}/>
                        <Route path='add-menu' element={<CreateMenuForm />}/>
                        <Route path='create-order' element={<CreateOrder />}/>
                        <Route path='admin/create-order' element={<OrderCreatePage />}/>
                    </Routes>
                </div>
        </div>
    </div>
  )
}

export default Admin;