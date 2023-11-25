import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
]);

const App = () => (
    <RouterProvider router={router} />
);

export default App;
