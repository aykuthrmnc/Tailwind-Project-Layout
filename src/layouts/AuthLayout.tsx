import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { RootState } from "~/store";

const AuthLayout = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const location = useLocation();

  if (user) {
    return <Navigate to={location.state?.return_url || "/"} replace={true} />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto flex-1 py-5">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
