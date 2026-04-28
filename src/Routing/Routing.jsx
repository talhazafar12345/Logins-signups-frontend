




import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../Pages/Home'
import Login from '../Pages/Login'
import Otp from '../Pages/Otp'
import Content from '../Pages/Content'
import Verifyotp from '../Pages/Verifyotp'
import Setpassword from '../Pages/Setpassword'




function Routing() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>
        },

        {
            path: "/login-page",
            element: <Login />
        },

        {
            path: "/otp-page",
            element: <Otp />
        },

        {
            path: "/content-page",
            element: <Content />
        },

        {
            path: "/verify-otp",
            element: <Verifyotp />
        },

        {
            path: "/change-password",
            element: <Setpassword />
        },
    ])
    return (
        <RouterProvider router={router} />
    )
}
export default Routing





