
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import ErrorPage from "../Pages/ErrorPage";
import AllMeals from "../Pages/AllMeals/AllMeals";
import DashboardLayout from "../Layouts/DashboardLayout";




const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        index: true,
        element:<Home/>
      },
      {
        path:'/allMeals',
        element:<AllMeals/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      }
    ]
  },
  {
    path:'/dashboard',
    element:<DashboardLayout/>,
    children:[
      {
         index: true,
        element: <h1>Dashboard!</h1>
      },
      {
        path:'profile',
        element:<h1>Profile!</h1>
      },
      {
        path:'requestedMeals',
        element:<h1>Requested Meals!</h1>
      },
      {
        path:'myReviews',
        element:<h1>My Reviews!</h1>
      },
      {
        path:'paymentHistory',
        element:<h1>Payment History</h1>
      },
    ]
  }
]);

export default router;