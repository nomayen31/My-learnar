import { createBrowserRouter } from "react-router-dom";
import Category from "../components/Category";
import Courses from "../components/Courses";
import Checkout from "../components/Checkout";
import Account from "../layout/Account";
import Main from "../layout/Main";
import Blog from "../pages/Blog";
import FAQs from "../pages/FAQs";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import CoursesPage from "../pages/CoursesPage";
import LoginPage from "../pages/LoginPage";
import RegistarPage from "../pages/RegistarPage";
import PrivetRoute from "./PrivetRoute.js";


export const routes = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        element: <Main />,
        children: [
            {
                path: "/",
                element: <CoursesPage />,
                loader: () => fetch(`https://my-learning-server-main.vercel.app/courses/all`),
            },
            {
                path: "/courses",
                element: <CoursesPage />,
                loader: () => fetch(`https://my-learning-server-main.vercel.app/courses/all`),
            },
            {
                path: "/category/:id",
                element: <Category />,
                loader: ({ params }) => fetch(`https://my-learning-server-main.vercel.app/category/${params.id}`),
            },
            {
                path: "/course/:id",
                element: <Courses />,
                loader: ({ params }) => fetch(`https://my-learning-server-main.vercel.app/course/${params.id}`),
            },
            {
                path: "account",
                element: <ErrorPage />,
            },

        ]
    },
    {
        path: "/chekout/:id",
        element: <PrivetRoute><Checkout /></PrivetRoute>,
        loader: ({ params }) => fetch(`https://my-learning-server-main.vercel.app/course/${params.id}`),
    },
    {
        path: "/home",
        element: <HomePage />
    },
    {
        path: "blog",
        element: <Blog />,
    },
    {
        path: "faq",
        element: <FAQs />,
    },
    {
        path: "account",
        errorElement: <ErrorPage />,
        element: <Account />,
        children: [
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "register",
                element: <RegistarPage />,
            },

        ]
    },


]);