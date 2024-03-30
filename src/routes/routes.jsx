import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import ProductDetail from "../pages/ProductDetail";
import ProductList from "../pages/ProductList";

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
        path: '/:id',
        element: <ProductDetail />
    },

])

export default routes