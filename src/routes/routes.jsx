import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ProductDetail from "../pages/ProductDetail";
import ProductList from "../pages/ProductList";
import Dashboard from "../pages/Dashboard";
import Layout from "../pages/Layout/Layout";
import Statistics from "../components/Statistics";
import AddProduct from "../pages/AddProduct";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signUp',
        element: <SignUp />
    },
    {
        path: '/products',
        element: <ProductList />
    },
    {
        path: '/dashboard',
        element: <Dashboard />,
        children: [
            {
                path: 'statistics',
                element: <Statistics />
            },
            {
                path: 'add',
                element: <AddProduct />
            },
        ]
    },
    // {
    //     path: '/statistics',
    //     element: <Statistics />
    // },
    {
        path: '/:id',
        element: <ProductDetail />
    },

])

export default routes