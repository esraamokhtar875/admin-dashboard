import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import CategoryList from './components/CategoryList.js';
import FoodList from './components/FoodList.js';
import UsersList from './components/UserList.js';


import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
// import { Category } from '@mui/icons-material';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="category-list" element={<CategoryList />} />
      <Route path="food-list" element={<FoodList />} />
      <Route path="users-list" element={<UsersList />} />
    </Route>
  )
);

// function Root() {
//   return <RouterProvider router={router} />;
// }

// ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Router path="/" element={< App />}>
//       <Routes>
//         <Route path="/category-list" element={<CategoryList />} />
//         <Route path="/food-list" element={<FoodList />} />
//         <Route path="/users-list" element={<UsersList />} />
//       </Routes>
//     {/* <Route path="/CategoryList.js" element={<Category/>}> */}
//       {/* <Route path="" element={<Dashboard />} /> */}
//       {/* ... etc. */}
//     </Router>
//   )
// );


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);




// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
