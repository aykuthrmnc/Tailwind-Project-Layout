import { Outlet } from "react-router-dom";
import Header from "~/components/Layouts/Header";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="container mx-auto py-5 flex-1">
        <Outlet />
      </div>
    </div>
  );
};
export default MainLayout;
