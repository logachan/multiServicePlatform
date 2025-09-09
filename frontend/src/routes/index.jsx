import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import ResponsiveAppBar from "../components/MainLayout/index";
import Sendmail from "../Pages/Sendmail";
import Blog from "../Pages/Blog";



const routerPath = createBrowserRouter([
    {
        path: "/",
        element: <ResponsiveAppBar />,
        children: [
            {
                path: "Home", // ✅ No leading slash
                element: <Home />
            },
            {
                path: "SendMail", // ✅ No leading slash
                element: <Sendmail />
            },
            {
                path: "Blog", // ✅ No leading slash
                element: <Blog />
            }
        ]
    },
],
    {
        basename: "/",
    }
)

export default routerPath;