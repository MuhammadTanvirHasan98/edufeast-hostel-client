
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Authentication/Login/Login";
import Register from "../Authentication/Register/Register";
import ErrorPage from "../Pages/ErrorPage";
import AllMeals from "../Pages/AllMeals/AllMeals";
import DashboardLayout from "../Layouts/DashboardLayout";
import UserProfile from "../Pages/Dashboard/Profiles/UserProfile";
import MealDetails from "../Components/Common/MealDetails";
import RequestedMeals from "../Pages/Dashboard/User/RequestedMeals";
import MyReviews from "../Pages/Dashboard/User/MyReviews";
import PaymentHistory from "../Pages/Dashboard/User/PaymentHistory";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers";




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
        path:'/mealDetails/:id',
        element:<MealDetails/>
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
         element:<UserProfile/>
      },
      {
        path:'requestedMeals',
        element:<RequestedMeals/>
      },
      {
        path:'myReviews',
        element:<MyReviews/>
      },
      {
        path:'paymentHistory',
        element:<PaymentHistory/>
      },
      {
        path:'manageUsers',
        element:<ManageUsers/>
      },
    ]
  }
]);

export default router;