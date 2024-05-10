import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Blogs from "../components/Blogs/Blogs";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ]
    },
]);

export default router;