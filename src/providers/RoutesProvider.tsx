import React, { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// It seems you have a typo in your second code. I'm keeping the original name.

// Lazy load components
// const PublicPage1 = React.lazy(
//   () =>
//     new Promise<{ default: React.ComponentType }>((resolve) =>
//       setTimeout(() => {
//         import("@/pages/PublicPage1").then((module) =>
//           resolve({ default: module.default })
//         );
//       }, 2000)
//     )
// );

const PublicPage1 = lazy(() => import("@/pages/PublicPage1"));
const PublicPage2 = lazy(() => import("@/pages/PublicPage2"));
const PrivatePage1 = lazy(() => import("@/pages/PrivatePage1"));
const PrivatePage2 = lazy(() => import("@/pages/PrivatePage2"));
const LoginPage = lazy(() => import("@/pages/LoginPage"));
const HelloPage = lazy(() => import("@/pages/HelloPage"));
const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));
const PrivateRoute = lazy(() => import("@/providers/PrivateRoute"));

const router = createBrowserRouter([
  {
    path: "",
    children: [
      {
        path: "/",
        element: <HelloPage />,
      },
      {
        path: "public1",
        element: <PublicPage1 />,
      },
      {
        path: "public2",
        element: <PublicPage2 />,
      },
      {
        path: "login",
        element: <LoginPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
      {
        element: <PrivateRoute />,
        children: [
          {
            path: "private1",
            element: <PrivatePage1 />,
          },
          {
            path: "private2",
            element: <PrivatePage2 />,
          },
        ],
      },
    ],
  },
]);

const RoutesProvider = () => {
  return <RouterProvider router={router} />;
};

export default RoutesProvider;
