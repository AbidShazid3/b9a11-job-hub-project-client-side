import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import LogIn from "../Pages/LogIn/LogIn";
import Register from "../Pages/Register/Register";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Blogs from "../components/Blogs/Blogs";
import UserProfile from "../components/UserProfile/UserProfile";
import PrivetRoutes from "./PrivetRoutes";
import AllJobs from "../Pages/AllJobs/AllJobs";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import AddJob from "../Pages/AddJob/AddJob";
import MyJobs from "../Pages/MyJobs/MyJobs";
import JobCatDetails from "../components/JobCatDetails/JobCatDetails";
import AllJobsSingleCard from "../Pages/AllJobs/AllJobsSingleCard";
import UpdateJob from "../components/UpdateJob/UpdateJob";


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
                path: "/categoriesJob/:id",
                element: <PrivetRoutes><JobCatDetails></JobCatDetails></PrivetRoutes>,
                loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: "/alljobs",
                element: <AllJobs></AllJobs>
            },
            {
                path: "/job/:id",
                element: <PrivetRoutes><AllJobsSingleCard></AllJobsSingleCard></PrivetRoutes>,
                loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: "/appliedjob",
                element: <PrivetRoutes><AppliedJobs></AppliedJobs></PrivetRoutes>
            },
            {
                path: "/addjob",
                element: <PrivetRoutes><AddJob></AddJob></PrivetRoutes>
            },
            {
                path: "/myjobs",
                element: <PrivetRoutes><MyJobs></MyJobs></PrivetRoutes>
            },
            {
                path: "/updateJob/:id",
                element: <PrivetRoutes><UpdateJob></UpdateJob></PrivetRoutes>,
                loader: ({params})=> fetch(`http://localhost:5000/jobs/${params.id}`)
            },
            {
                path: "/profile",
                element: <PrivetRoutes><UserProfile></UserProfile></PrivetRoutes>
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