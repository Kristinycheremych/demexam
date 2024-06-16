import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './views/MainPage';
import AddProduct from './views/product/addProduct/AddProduct';
import RegisterPage from './views/auth/register/RegisterPage';
import LoginPage from './views/auth/login/LoginPage';
import ProductPage from './views/product/ProductPage';
import OrderPage from './views/order/OrderPage';
import AddOrder from './views/order/AddOrder';
import OrderConfirmationPage from './views/order/OrderConfirmationPage';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<MainPage/>}/>
      <Route path='/create/product' element={<AddProduct/>}/>
      <Route path='/register' element={<RegisterPage/>}/>
      <Route path='/login' element={<LoginPage/>}/>
      <Route path='/product' element={<ProductPage/>}/>
      <Route path='/order' element={<OrderPage/>}/>
      <Route path='/addOrder' element={<AddOrder/>}/>
      <Route path='/orderConfirmationPage' element={<OrderConfirmationPage/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
