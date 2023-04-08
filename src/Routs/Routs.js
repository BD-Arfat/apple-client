import { createBrowserRouter } from "react-router-dom";
import Main from "../Laout/Footer/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllMobiles from "../Pages/AllMobiles/AllMobiles";
import Blog from "../Pages/Blog/Blog";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashbordLaout from "../Pages/DashbordLaout/DashbordLaout";

export const router = createBrowserRouter([
    {
        path: "/",
        element : <Main></Main>,
        children: [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : '/login',
                element: <Login></Login>
            },
            {
                path :"/register",
                element: <Register></Register>
            },
            {
                path:"/category",
                element : <AllMobiles></AllMobiles>
            },
            {
                path : '/blog',
                element : <Blog></Blog>
            },
            
        ]
    },
    {
        path:'dashboard',
        element:<DashbordLaout></DashbordLaout>,
        children:[
            {
                path : "/dashboard",
                element : <Dashboard/>, 
            }
        ]
    }
]);
