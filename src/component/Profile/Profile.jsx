import { Route, Routes } from "react-router-dom";
import UserProfile from "./UserProfile";
import Order from "../Sections/Order";
import Address from "../Sections/Address";
import Favourites from "../Sections/Favourites";
import Notification from "../Sections/Notification";
import Refunds from "../Sections/Refunds";
import Feedback from "../Sections/Feedback";
import UserInfo from "../Sections/UserInfo";
import DeleteAccount from "../Sections/DeleteAccount";
import Subscription from "../Sections/Subscription";
import Privacy from "../Sections/Privacy";

const Profile = () => {
  return (
    <Routes>
      <Route path="/" element={<UserProfile />}>
        <Route path="order" element={<Order />} />
        <Route path="address" element={<Address />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="refunds" element={<Refunds />} />
        <Route path="notification" element={<Notification />} />
        <Route path="feedback" element={<Feedback />} />
        <Route path="user-info" element={<UserInfo />} />
        <Route path="delete-account" element={<DeleteAccount/>} />
        <Route path="subscription" element={<Subscription/>} />
        <Route path="privacy" element={<Privacy/>}/>
      </Route>
    </Routes>
  );
};

export default Profile;
