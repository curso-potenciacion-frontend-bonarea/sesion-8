import LoginForm from "@/auth/components/LoginForm";
import RegisterForm from "@/auth/components/RegisterForm";
import MainLayout from "@/layouts/MainLayout";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "access/login",
        element: <LoginForm />,
      },
      {
        path: "access/register",
        element: <RegisterForm />,
      },
    ],
  },
]);

export default router;
