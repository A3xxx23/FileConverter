import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import FiletoPDF from "../pages/FiletoPDF";
import URLtoPDF from "../pages/URLtoPDF";
import ImagetoPDF from "../pages/ImagetoPDF";
import HTMLtoPDF from "../pages/HTMLtoPDF";
import { RootLayout } from "../layout/RootLayout";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <App/>,
            },
            {
                path: "FiletoPDF",
                element: <FiletoPDF/>,
            },
            {
                path: "URLtoPDF",
                element: <URLtoPDF/>,
            },
            {
                path: "ImagetoPDF",
                element: <ImagetoPDF/>,
            },
            {
                path: "HTMLtoPDF",
                element: <HTMLtoPDF/>,
            },
        ],
    },
]);