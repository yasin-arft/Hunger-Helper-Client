import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import SignIn from "../pages/signIn/SignIn";
import Home from "../pages/home/Home";
import SignUp from "../pages/signUp/SignUp";

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
      }
    ]
  }
]);

const RoutesProvider = () => {
  return <RouterProvider router={router} />;
};

export default RoutesProvider;