import Root from "./Root";
import { Home, NotFound, SignIn, SignUp } from "../Pages";

export const PATHS = [
    {
        path: "/",
        element: (
                <Root />
        ),
        errorElement: <NotFound />,
        children: [
            { index: true, element: <Home /> },
            { path: "/login", element: <SignIn /> },
            { path: "/register", element: <SignUp /> }
        ]
    },
];
