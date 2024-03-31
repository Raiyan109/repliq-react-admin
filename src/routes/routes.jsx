import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ProductDetail from "../pages/ProductDetail";
import ProductList from "../pages/ProductList";
import Dashboard from "../pages/Dashboard";
import AddProduct from "../pages/AddProduct";
import MyProduct from "../pages/MyProduct";

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
                path: 'myProduct',
                element: <MyProduct />
            },
            {
                path: 'add',
                element: <AddProduct />
            },
        ]
    },
    {
        path: '/:id',
        element: <ProductDetail />
    },

])

export default routes