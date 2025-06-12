import { Route, Routes, useLocation } from "react-router-dom";
import Contact from "../Navbar/Contact";
import Home from "../Home/Home";
import Navbar from "../Navbar/Navbar";
import PaymentSuccess from "../PaymentSuccess/PaymentsSuccess";
import RestaurantDetails from "../Restaurant/RestaurantDetails";
import Auth from "../Auth/Auth";
import PaymentPage from "../PaymentSuccess/PaymentPage";
import Offers from "../Navbar/Offers";
import Help from "../Navbar/Help";
import ForgotPassword from "../Auth/ForgotPassword";
import About from "../Navbar/About";
import Terms from "../Navbar/Terms";
import Search from "../Navbar/Search";
import Profile from "../Profile/Profile";
import Cart from "../Cart/Cart";
import DishDetailsPage from "../Page/DishDetailsPage";

export const CustomerRoute = () => {
  const location = useLocation();

  return (
    <div>
      
      <Navbar />
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/account/:register" element={<Home />} />
        <Route path="/resturant/city/:title/:id" element={<RestaurantDetails />} />
        <Route path="/search" element={<Search/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/help" element={<Help/>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/payment" element={<PaymentPage />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/terms" element={<Terms/>} />
        <Route path="/my-profile/*" element={<Profile/>} />
        <Route path="/dish/:id" element={<DishDetailsPage />} />
        
        
      </Routes>
      <Auth/>
    </div>
  );
};


