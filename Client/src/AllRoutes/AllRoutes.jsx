import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from '../Pages/Home';
import Details from '../Pages/Details';
import Cart from '../Pages/Cart';
import Success from '../Pages/Success';
import Product from '../Pages/Product';
import Authentication from '../Pages/Authentication';
import PrivatePage from '../Pages/PrivatePage';
import { CheckoutPage } from '../Pages/CheckoutPage';
import Products from '../Admin/pages/Products';
import Orders from '../Admin/pages/Orders';
import Users from '../Admin/components/Customers/Users';
import Admin from '../Pages/Admin';
import Simple from '../Components/Navbar';
import LargeWithLogoLeft from '../Components/Footer';
import SideBar from '../Admin/components/Sidebar';
import sidebar_menu from '../Admin/constants/sidebar-menu';
import AdminDashboard from '../Admin/pages/Dashboard/AdminDashboard';

export const AllRoutes = () => {
  const [value, setValue] = useState(localStorage.getItem("pageValue") || "user");

  useEffect(() => {
    // Listen for changes in localStorage
    window.addEventListener('storage', handleLocalStorageChange);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('storage', handleLocalStorageChange);
    };
  }, []);

  const handleLocalStorageChange = (e) => {
    if (e.key === "pageValue") {
      // Update the state when the value in localStorage changes
      setValue(e.newValue);
    }
  };

  const reloadPage = () => {
    window.location.reload();
  };

  return (
    <>
      {value !== "admin" ? (
        <Router>
          <Simple />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/details/:id' element={<PrivatePage><Details /></PrivatePage>} />
            <Route path='/products' element={<Product />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/checkout' element={<CheckoutPage />} />
            <Route path='/login' element={<Authentication />} />
            <Route path='/success' element={<Success />} />
            <Route path="*" element={<div></div>} />
          </Routes>
          <LargeWithLogoLeft />
        </Router>
      ) : (
        <Router>
          <div className='dashboard-container'>
            <SideBar menu={sidebar_menu} />
            <div className='dashboard-body'>
              <Routes>
                <Route exact path="/admin/dashboard" element={<AdminDashboard />} />
                <Route path="/admin/orders" element={<Orders />} />
                <Route path="/admin/products" element={<Products />} />
                <Route path="/admin/customer" element={<Users />} />
                <Route path="*" element={<div></div>} />
              </Routes>
            </div>
          </div>
        </Router>
      )}
    </>
  );
};
