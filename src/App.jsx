import { CssBaseline, ThemeProvider } from '@mui/material';
import './App.css';
import { darkTheme } from './component/Theme/DarkTheme';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './component/State/Authentication/Action';
import { findUserCart } from './component/State/Cart/Action';
import { getRestaurantById } from './component/State/Restaurant/Action';
import process from 'process';
import { Routers } from './component/Routers/Routers';


window.process = process;

function App() {
  const dispatch = useDispatch();
  const jwt = localStorage.getItem("jwt");

  // Selector should grab the whole auth state, not just auth.user
  const auth = useSelector((store) => store.auth);

  const token = auth?.jwt || jwt;

  useEffect(() => {
    if (token) {
      dispatch(getUser(token));
      dispatch(findUserCart(token));
    }
  }, [token, dispatch]);

  useEffect(() => {
    if (jwt) {
      dispatch(getRestaurantById(jwt));
    }
  }, [token, dispatch]);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Routers />
    </ThemeProvider>
  );
}

export default App;
