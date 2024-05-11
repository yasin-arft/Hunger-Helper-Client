import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import SignIn from "../pages/signIn/SignIn";
import Home from "../pages/home/Home";
import SignUp from "../pages/signUp/SignUp";
import SingleFoodDetails from "../pages/singleFoodDetails/SingleFoodDetails";
import AvailableFoods from "../pages/availableFoods/AvailableFoods";

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
        loader: ({ params }) => fetch(`http://localhost:5000/food/${params.id}`),
        element: <SingleFoodDetails />
      }
    ]
  }
]);

const RoutesProvider = () => {
  return <RouterProvider router={router} />;
};

export default RoutesProvider;