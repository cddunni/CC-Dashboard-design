import type { RouteObject } from "react-router-dom";
import { createBrowserRouter, Outlet } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Marketing from "./pages/marketing";

export type PageProps = {
  title: string;
  description: string;
  isPublic?: boolean;
};

const pages: RouteObject[] = [
  // Dashboard
  {
    path: "",
    errorElement: <div>Something went wrong</div>,
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        path: "/",
        element: <Marketing />,
      },
      {
        path: "/analytics",
        element: <>Analytics</>,
      },
    ],
  },
  {
    path: "*",
    element: <div>Page Not Found!</div>,
  },
];

const routes = createBrowserRouter(pages);

export { routes };
