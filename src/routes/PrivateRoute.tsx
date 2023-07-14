import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { RootState } from "~/store";
import { Props } from "~/types";

const PrivateRoute = ({ children }: Props): any => {
  const user = useSelector((state: RootState) => state.auth.user);
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" replace={true} state={{ return_url: location.pathname }} />;
  }

  return children;
};

export default PrivateRoute;