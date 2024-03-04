import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Startpage } from "@cardgame/startpage";

const routes = [
    {
        path: "/",
        element: <Startpage />
    }
];

export function Router() {

    const endpoints = createBrowserRouter(routes);
    return <RouterProvider router={ endpoints }/>
}