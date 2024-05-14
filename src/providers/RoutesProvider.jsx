import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import SignIn from "../pages/signIn/SignIn";
import Home from "../pages/home/Home";
import SignUp from "../pages/signUp/SignUp";
import SingleFoodDetails from "../pages/singleFoodDetails/SingleFoodDetails";
import AvailableFoods from "../pages/availableFoods/AvailableFoods";
import AddFood from "../pages/addFood/AddFood";
import PrivateRoute from "../routes/PrivateRoute";
import ManageMyFoods from "../pages/manageMyFoods/ManageMyFoods";
import UpdateFood from "../pages/updateFood/UpdateFood";
import MyFoodRequest from "../pages/myFoodRequest/MyFoodRequest";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/sign_in',
        element: <SignIn />
      },
      {
        path: '/sign_up',
        element: <SignUp />
      },
      {
        path: '/available_foods',
        element: <AvailableFoods />
      },
      {
        path: '/food_details/:id',
        element: <PrivateRoute><SingleFoodDetails /></PrivateRoute>
      },
      {
        path: '/add_food',
        element: <PrivateRoute><AddFood /></PrivateRoute>
      },
      {
        path: '/manage_my_foods',
        element: <PrivateRoute><ManageMyFoods /></PrivateRoute>
      },
      {
        path: '/update_food/:id',
        element: <PrivateRoute><UpdateFood /></PrivateRoute>
      },
      {
        path: '/my_food_request',
        element: <PrivateRoute><MyFoodRequest /></PrivateRoute>
      }
    ]
  }
]);

const RoutesProvider = () => {
  return <RouterProvider router={router} />;
};

export default RoutesProvider;