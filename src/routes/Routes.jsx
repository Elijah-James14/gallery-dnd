import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import PhotoGallery from "../components/PhotoGallery";
import Register from "../components/Register";
import Login from "../components/Login";
import ProtectedRoutes from "./ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoutes>
            <PhotoGallery />
          </ProtectedRoutes>
        ),
      },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
    ],
  },
]);
export default router;
