import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../pages/login';
import Dashboard from '../pages/Dashboard';
import Layout from '../components/Layout';

const AppRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login/>}></Route>
           
            <Route element={<Layout/>}>
                 <Route path="/dashboard" element={<Dashboard/>}></Route> 
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
