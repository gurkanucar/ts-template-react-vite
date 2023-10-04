import React, { FC, PropsWithChildren, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useTypedSelector } from "@/hooks/useSelector";

const UserPage = React.lazy(() => import("@/pages/userPage/UserPage"));
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

const RoutesProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const auth = useTypedSelector((state) => state.auth);

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                !route.isPublic && !auth.isLoggedIn ? (
                  <Navigate to="/login" replace />
                ) : (
                  <>
                    <React.Suspense fallback={<div>Loading...</div>}>
                      <route.component />
                    </React.Suspense>
                    {auth.isLoggedIn && children}
                  </>
                )
              }
            />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default RoutesProvider;
