import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import ErrorPage from "./error-page";
import Home from "./pages/Home/Home";
import Results from "./pages/Results/Results";


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                <Route path="/" element={<App />} errorElement={<ErrorPage />}>
                    <Route index path="/" element={<Home />} />
                    <Route path="results" element={<Results />} />
                </Route>
            </Routes>
        </HashRouter>
    </React.StrictMode>
);
