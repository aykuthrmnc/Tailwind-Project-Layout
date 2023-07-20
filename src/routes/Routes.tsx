import Loader from "~/components/Loader/Loader";
import SuspenseLoader from "~/components/Loader/SuspenseLoader";
import React, { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Route } from "~/types";

const MainLayout = lazy(() => import("~/layouts/MainLayout"));
const PrivateRoute = lazy(() => import("~/routes/PrivateRoute"));
const Home = lazy(() => import("~/pages/Home"));
const Profile = lazy(() => import("~/pages/Profile"));
const NotFound = lazy(() => import("~/pages/NotFound"));
// const Login = lazy(() => import("~/pages/auth/Login"));
// const Register = lazy(() => import("~/pages/auth/Register"));

const routes: Route[] = [
  {
    path: "/",
    layout: true,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  // {
  //   layout: true,
  //   element: <AuthLayout />,
  //   children: [
  //     {
  //       path: "login",
  //       element: <Login />,
  //     },
  //     {
  //       path: "register",
  //       element: <Register />,
  //     },
  //   ],
  // },
  {
    layout: true,
    name: "notFound",
    path: "*",
    element: <NotFound />,
  },
];

const authCheck = (routes: Route[]) =>
  routes?.map((route: Route) => {
    if (route?.auth) {
      route.element = <PrivateRoute>{route.element}</PrivateRoute>;
    }
    if (route?.children) {
      route.children = authCheck(route.children);
    }
    if (route?.layout) {
      route.element = (
        <ErrorBoundary
          fallback={<div className="text-center">Bir hata oluştu</div>}
        >
          <Suspense fallback={<Loader />}>{route.element}</Suspense>
        </ErrorBoundary>
      );
    } else {
      route.element = (
        <ErrorBoundary
          fallback={<div className="text-center">Bir hata oluştu</div>}
        >
          <Suspense fallback={<SuspenseLoader />}>{route.element}</Suspense>
        </ErrorBoundary>
      );
    }
    return route;
  });

const Routes = React.memo(() => {
  return <RouterProvider router={createBrowserRouter(authCheck(routes))} />;
  //   return <Suspense fallback={"Loading..."}>{useRoutes(routes)}</Suspense>;
});
export default Routes;
