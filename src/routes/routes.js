import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Wallet from "../components/Wallet";
import Profile from "../components/Profile";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/register',
          element: <Register />
        },
        {
            path: '/wallet',
            element: <Wallet />
        },
        {
            path: '/profile',
            element: <Profile />
        }
      ]
    }
])

export default router;