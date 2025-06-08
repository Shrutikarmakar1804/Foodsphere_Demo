import {Dashboard,
  ShoppingBag,
  ShopTwo as ShopTwoIcon,
  Category as CategoryIcon,
  Fastfood as FastfoodIcon,
  Event as EventIcon,
  AdminPanelSettings as AdminPanelSettingsIcon,
  Logout as LogoutIcon,
} from '@mui/icons-material';
import {
  Divider,
  Drawer,
  useMediaQuery
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../component/State/Authentication/Action';

const menu = [
  { title: "Dashboard", icon: <Dashboard />, path: "/" },
  { title: "Orders", icon: <ShoppingBag />, path: "/orders" },
  { title: "Menu", icon: <ShopTwoIcon />, path: "/menu" },
  { title: "Food Category", icon: <CategoryIcon />, path: "/category" },
  { title: "Ingredients", icon: <FastfoodIcon />, path: "/ingredients" },
  { title: "Events", icon: <EventIcon />, path: "/event" },
  { title: "Details", icon: <AdminPanelSettingsIcon />, path: "/details" },
  { title: "Logout", icon: <LogoutIcon />, path: "/" }
];

export const AdminSideBar = ({ open, handleClose }) => {
  const isSmallScreen = useMediaQuery("(max-width:1080px)");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = (item) => {
    if (item.title === "Logout") {
      dispatch(logout());
      navigate("/");
    } else {
      navigate(`/admin/restaurants${item.path}`);
    }
    handleClose();
  };

  return (
    <Drawer
      variant={isSmallScreen ? "temporary" : "permanent"}
      onClose={handleClose}
      open={isSmallScreen ? open : true}
      anchor="left"
      sx={{ zIndex: 1 }}
    >
      <div className="w-[60vw] md:w-[20vw] h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white shadow-lg flex flex-col">
        
        <div className="px-6 py-5 text-2xl font-bold border-b border-gray-300 dark:border-gray-700">
          Admin Panel
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar p-7 space-y-8">
          {menu.map((item, i) => (
            <div key={i}>
              <div
                onClick={() => handleNavigate(item)}
                className="flex items-center gap-4 px-4 py-2 rounded-lg cursor-pointer transition-all hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                {item.icon}
                <span className="text-base font-medium">{item.title}</span>
              </div>
              {i !== menu.length - 1 && <Divider className="my-2" />}
            </div>
          ))}
        </div>
      </div>
    </Drawer>
  );
};

export default AdminSideBar;
