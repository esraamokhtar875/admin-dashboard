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
import SearchResults from './components/SearchResults.js';
import AddFood from './components/Forms/AddFood.js';
import AddCategory from './components/Forms/AddCategory.js';
import AddUser from './components/Forms/AddUser.js'


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<App  />}>
      <Route index element={<LandingPage />} /> 
      <Route path="category-list" element={<CategoryList />} />
      <Route path="food-list" element={<FoodList />} />
      <Route path="/add-food" element={<AddFood />} />
      <Route path="users-list" element={<UsersList />} />
      <Route path="/add-category" element={<AddCategory />} />
      <Route path="/add-user" element={<AddUser />} />
      <Route path="/search" element={<SearchResults />} />
      <Route path="/edit-food/:id" element={<AddFood />} />
      <Route path="/edit-category/:id" element={<AddCategory />} />
      <Route path="/edit-user/:id" element={<AddUser />} />

    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

