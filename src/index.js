import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import CategoryList from './components/CategoryList.js';
import FoodList from './components/FoodList.js';
import UsersList from './components/UserList.js';
// @ts-ignore
import LandingPage from "./components/LandingPage"; 


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import { Category } from '@mui/icons-material';


const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<App  />}>
      <Route index element={<LandingPage />} /> 
      <Route path="category-list" element={<CategoryList />} />
      <Route path="food-list" element={<FoodList />} />
      <Route path="users-list" element={<UsersList />} />
    </Route>
  )
);




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

