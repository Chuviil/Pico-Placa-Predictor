import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
    },
]);

const App = () => (
    <RouterProvider router={router} />
);

export default App;
