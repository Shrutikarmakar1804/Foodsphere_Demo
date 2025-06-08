import {
  Divider,
  Drawer,
  useMediaQuery,
} from '@mui/material';
import {
  ShoppingBag as ShoppingBagIcon,
  Favorite as FavoriteIcon,
  Settings as SettingsIcon,
  NotificationsActive as NotificationsActiveIcon,
  MonetizationOn as MonetizationOnIcon,
  Logout as LogoutIcon,
  AddReaction,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import { logout } from '../State/Authentication/Action';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import PrivacyTipRoundedIcon from '@mui/icons-material/PrivacyTipRounded';

const menu = [
  { title: "Order", icon: <ShoppingBagIcon /> },
  { title: "Favorites", icon: <FavoriteIcon /> },
  { title: "Address", icon: <AddReaction /> },
  { title: "Refunds", icon: <MonetizationOnIcon /> },
  { title: "Notification", icon: <NotificationsActiveIcon /> },
  { title: "Privacy", icon: <PrivacyTipRoundedIcon  /> },
  { title: "Logout", icon: <LogoutIcon /> },
  { title: "DeleteAccount", icon: <DeleteIcon /> },
  { title: "Subscription", icon: < AttachMoneyRoundedIcon/> },
];

const ProfileNavigation = ({ open, handleClose }) => {
  const isSmallScreen = useMediaQuery('(max-width:900px)');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = (item) => {
    if (item.title === "Logout") {
      dispatch(logout());
      navigate("/");
    }
    else {
      navigate(`/my-profile/${item.title.toLowerCase()}`);
    }
    if (isSmallScreen && handleClose) {
      handleClose();
    }
  };

  return (
    <Drawer 
      variant={isSmallScreen ? "temporary" : "permanent"} 
      onClose={handleClose} 
      open={isSmallScreen ? open : true} 
      anchor="left"
      sx={{ zIndex: 1, position:"sticky" }} >
        
        <div className="w-[50vw] lg:w-[20vw] h-[100vh] flex flex-col justify-center text-xl gap-8 pt-16">
           
        {menu.map((item, i) => (
          <React.Fragment key={item.title}>
            <div onClick={() => handleNavigate(item)} className="px-5 flex items-center space-x-5 cursor-pointer">
              {item.icon}
              <span>{item.title}</span>
            </div>
            {i !== menu.length - 1 && <Divider />}
          </React.Fragment>
        ))}
        </div>
      </Drawer>
  );
};

export default ProfileNavigation;
 