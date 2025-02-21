import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {PATHS} from "./PATHS";

export default function Layout()
{
    const router = createBrowserRouter(PATHS);

    return <RouterProvider router={router} />;
}
