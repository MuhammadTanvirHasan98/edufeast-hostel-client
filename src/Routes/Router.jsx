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
import DasAllMeals from "../Pages/Dashboard/Admin/DasAllMeals";
import AllReviews from "../Pages/Dashboard/Admin/AllReviews";
import ServeMeals from "../Pages/Dashboard/Admin/ServeMeals";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/allMeals",
        element: <AllMeals />,
      },
      {
        path: "/mealDetails/:id",
        element: (
          <PrivateRoute>
            <MealDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "requestedMeals",
        element: (
          <PrivateRoute>
            <RequestedMeals />
          </PrivateRoute>
        ),
      },
      {
        path: "myReviews",
        element: (
          <PrivateRoute>
            <MyReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <PrivateRoute>
            <PaymentHistory />
          </PrivateRoute>
        ),
      },
      {
        path: "manageUsers",
        element: (
          <PrivateRoute>
            <ManageUsers />
          </PrivateRoute>
        ),
      },
      {
        path: "allMeals",
        element: (
          <PrivateRoute>
            <DasAllMeals />
          </PrivateRoute>
        ),
      },
      {
        path: "allReviews",
        element: (
          <PrivateRoute>
            <AllReviews />
          </PrivateRoute>
        ),
      },
      {
        path: "serveMeals",
        element: (
          <PrivateRoute>
            <ServeMeals />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
