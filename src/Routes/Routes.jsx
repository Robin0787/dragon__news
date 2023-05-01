import { Navigate, createBrowserRouter } from "react-router-dom";
import LoginLayout from "../Layouts/LoginLayout";
import Main from "../Layouts/Main";
import NewsLayouts from "../Layouts/NewsLayouts";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import NewsDetails from "../Pages/NewsDetails";
import Category from "../Pages/Shared/Category";
import PrivateRoute from "../Pages/Shared/PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <LoginLayout />,
        children: [
            {
                path: '/',
                element: <Navigate to={'/category/0'}></Navigate>
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }

        ]
    },
    {
        path: "category",
        element: <Main />,
        children: [
            // {
            //     path: '/',
            //     element: <Category />,
            //     loader: () => fetch('http://localhost:1545/category/0')
            // },
            {
                path: ':id',
                element: <Category />,
                loader: ({ params }) => fetch(`http://localhost:1545/category/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <NewsLayouts />,
        children: [
            {
                path: ':id',
                element: <PrivateRoute><NewsDetails /></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:1545/news/${params.id}`)
            }
        ]
    }
])



export default router;