import { Navigate, useRoutes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import PasswordRecovery from "./pages/PasswordRecovery.jsx";
import Task from "./pages/Task.jsx";
import Group from "./pages/Group.jsx";
import Layout from "./components/Layout";
import LoginTheme from "./components/mui/LoginTheme";

export const AppRouter = () => {
  return useRoutes([
    {
      path: "/",
      element: <LoginTheme />,
      children: [
        { path: "/", element: <Navigate to="/login" /> },
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
        { path: "passwordRecovery", element: <PasswordRecovery /> },
      ],
    },
    {
      path: "/todo-app/",
      element: <Layout />,
      children: [
        { path: "task", element: <Task /> },
        { path: "group/:id", element: <Group /> },
      ],
    },
  ]);
};
