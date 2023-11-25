import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
    },
]);

const App = () => (
    <RouterProvider router={router} />
);

export default App;
