import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import Shop from './component/Shop/Shop';
import Product from './component/Product/Product';
import Profile from './component/Profile/Profile';
import Mycart from './component/Mycart/Mycart';
import Login from './component/Login/Login';
import Otp from './component/Otp/Otp';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/shop' element={<Shop />} />
      <Route path='/product' element={<Product />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/mycart' element={<Mycart />} />
      <Route path='/login' element={<Login />} />
      <Route path='/otp' element={<Otp />} />

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
