import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {  LoginPage, SignupPage,ProductsPage, } from "./routes/Routes.js";
import { useEffect } from "react";
import Store from "./redux/store";
import { loadUser } from "./redux/actions/user";
import ProductDetailsCard from "./components/Route/ProductDetailsCard/ProductDetailsCard.jsx";

const App = () => {
 
  useEffect(() => {
    Store.dispatch(loadUser());
    
  }, []);
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<ProductsPage />} />
        <Route path="/sign-up" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
       
                <Route path="/detail" element={<ProductDetailsCard />} />

      </Routes>

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </BrowserRouter>
  );
};

export default App;
