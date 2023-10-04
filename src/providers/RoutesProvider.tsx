import React, { FC, PropsWithChildren, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useTypedSelector } from "@/hooks/useSelector";
import LoadingSpinner from "./LoadingSpinner";

// const UserPage = React.lazy(() => import("@/pages/userPage/UserPage"));
const UserPage = React.lazy(() =>
  new Promise<{ default: React.ComponentType }>(resolve =>
    setTimeout(() => {
      import("@/pages/userPage/UserPage")
        .then(module => resolve({ default: module.default }))
    }, 2000)
  )
);



const NotFoundPage = React.lazy(() => import("@/pages/NotFoundPage"));

const routes = [
  {
    path: "/user",
    component: UserPage,
    isPublic: false,
  },
  {
    path: "/user/:id",
    component: UserPage,
    isPublic: false,
  },
  {
    path: "/login",
    component: UserPage,
    isPublic: true,
  },
];

// const LoadingSpinner = () => <div>Loading...</div>;

const RoutesProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const auth = useTypedSelector((state) => state.auth);

  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFoundPage />} />
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              !route.isPublic && !auth.isLoggedIn ? (
                <Navigate to="/login" replace />
              ) : (
                <>
                  <Suspense fallback={<LoadingSpinner />}>
                    <route.component />
                  </Suspense>
                  {auth.isLoggedIn && children}
                </>
              )
            }
          />
        ))}
      </Routes>
    </Router>
  );
};

export default RoutesProvider;
