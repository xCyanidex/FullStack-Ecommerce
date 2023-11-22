
import './App.css'
import NavDrawer from './Components/NavDrawer/NavDrawer';
import {
  HashRouter as Router,
  Routes,
  Route,
  NavLink,
  useLocation,
  BrowserRouter,
} from "react-router-dom";
import Products from './Pages/Products';
import { useEffect } from 'react';
import Orders from './Pages/Orders';
import Dashboard from './Pages/Dashboard';


    function ScrollToTop() {
      const { pathname } = useLocation();

      useEffect(() => {
        window.scrollTo(0, 0);
      }, [pathname]);

      return null;
    }

function App() {


  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <NavDrawer>
          <Routes>
            <Route path={"/"} element={<Dashboard/>} />
            <Route path={"/products"} element={<Products />} />
            <Route path={"/orders"} element={<Orders />} />
          </Routes>
        </NavDrawer>
      </BrowserRouter>
    </>
  );
}

export default App
