import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../State/Authentication/Action";

import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import FavoriteIcon from "@mui/icons-material/Favorite";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import NotificationsIcon from "@mui/icons-material/Notifications";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FeedbackIcon from "@mui/icons-material/Feedback";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import DeleteIcon from "@mui/icons-material/Delete";
import LogoutIcon from "@mui/icons-material/Logout";

function UserProfile() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const menuItems = [
    { title: "Orders", icon: <ShoppingBagIcon />, path: "order" },
    { title: "Favourites", icon: <FavoriteIcon />, path: "favourites" },
    { title: "Addresses", icon: <AddLocationAltIcon />, path: "address" },
    { title: "Notifications", icon: <NotificationsIcon />, path: "notification" },
    { title: "Refunds", icon: <CurrencyRupeeIcon />, path: "refunds" },
    { title: "Feedback", icon: <FeedbackIcon />, path: "feedback" },
    { title: "Edit Profile", icon: <AccountCircleIcon />, path: "user-info" },
    { title: "Delete Account", icon: <DeleteIcon />, path: "delete-account" },
    { title: "Logout", icon: <LogoutIcon />, action: handleLogout },
  ];

  return (
    <div className="min-h-screen bg-black flex">
      {/* Sidebar */}
      <div className="w-64 bg-gray-100 p-6">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <div
              key={item.title}
              onClick={() => item.action ? item.action() : navigate(item.path)}
              className={`flex items-center space-x-3 px-4 py-2 rounded cursor-pointer ${
                location.pathname.includes(item.path)
                  ? "bg-white text-black font-semibold"
                  : "text-gray-800 hover:bg-white"
              }`}
            >
              {item.icon}
              <span>{item.title}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main content area */}
      <div className="flex-1 bg-black p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}

export default UserProfile;