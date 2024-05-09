import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import LogIn from "../Pages/LogIn/LogIn";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/login",
                element: <LogIn></LogIn>
            },
        ]
    },
]);

export default router;