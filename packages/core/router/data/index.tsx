import { createBrowserRouter, RouterProvider } from "react-router-dom";

const routes = [
    {
        path: "/",
        element: <h1>Start</h1>
    }
];

export function Router() {

    const endpoints = createBrowserRouter(routes);
    return <RouterProvider router={ endpoints }/>
}