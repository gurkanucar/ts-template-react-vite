import NotFoundPage from "@/pages/NotFoundPage";
import UserPage from "@/pages/userPage/UserPage";
import { FC, PropsWithChildren } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useTypedSelector } from "@/hooks/useSelector";

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
                  <route.component />
                  {auth.isLoggedIn && children}
                </>
              )
            }
          />
        ))}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
};

export default RoutesProvider;
