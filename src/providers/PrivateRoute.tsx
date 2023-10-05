import { ReactNode } from "react";

import { useTypedSelector } from "@/hooks/useSelector";
import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

interface PrivateRouteProps {
  children?: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const auth = useTypedSelector((state) => state.auth);
  const location = useLocation();

  if (!auth.isLoggedIn) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children ? children : <Outlet />;
};

export default PrivateRoute;
