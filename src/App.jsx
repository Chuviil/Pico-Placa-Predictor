import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./error-page";
import Home from "./pages/Home/Home";
import Results from "./pages/Results/Results";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path: "/results",
        element: <Results />,
        errorElement: <ErrorPage />,
    }
]);

const App = () => (
    <RouterProvider router={router} />
);

export default App;
