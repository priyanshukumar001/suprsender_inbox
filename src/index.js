import React from "react";
import { createRoot } from "react-dom/client";
// import App from "./App";
import { RouterProvider } from "react-router-dom";
import appRouter from "./App";
import { IdProvider } from "../utils/globalVariables";


const root = createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <IdProvider>
            <RouterProvider router={appRouter} />
        </IdProvider>
    </React.StrictMode>
)