import { useRoutes } from "react-router-dom";
import { Suspense, memo } from "react";
import MainLayout from "@/layouts/MainLayout";
import { routes } from "./RouteConfig";

const AppRoutes = memo(() => {
  const element = useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: routes
    }
  ]);

  return <Suspense fallback={<div>Loading...</div>}>{element}</Suspense>;
});

export default AppRoutes;