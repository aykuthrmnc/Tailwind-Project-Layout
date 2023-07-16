import Loader from "~/components/Loader/Loader";
import SuspenseLoader from "~/components/Loader/SuspenseLoader";
import React, { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Route } from "~/types";

// DENEME
// import Layout from "~/layoutsLayout";
// import Home from "~/pages/Home";
// import Cari from "~/pages/cari/cariYonetimi";
// import CariList from "~/pages/cari/cariYonetimi/List";
// import CariIslemleri from "~/pages/cari/cariIslemleri";
// import DevirIslemleri from "~/pages/cari/cariIslemleri/DevirIslemleri";
// import CariHareket from "~/pages/cari/cariHareket";
// import CariEkstre from "~/pages/cari/cariEkstre";
// import CariBakiye from "~/pages/cari/cariBakiye";

const MainLayout = lazy(() => import("~/layouts/Main"));
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
  //   auth: true,
  //   layout: true,
  //   path: "deneme",
  //   element: <Layout />,
  //   children: [
  //     {
  //       index: true,
  //       element: <Home />,
  //     },
  //     {
  //       path: "cari",
  //       element: <Outlet />,
  //       children: [
  //         {
  //           index: true,
  //           element: <Cari />,
  //         },
  //         {
  //           path: ":id",
  //           element: <Cari />,
  //         },
  //         {
  //           path: "list",
  //           element: <CariList />,
  //         },
  //       ],
  //     },
  //     {
  //       path: "cari-islemleri/:id",
  //       element: <CariIslemleri />,
  //     },
  //     {
  //       path: "devir-islemleri/:id",
  //       element: <DevirIslemleri />,
  //     },
  //     {
  //       path: "cari-hareket",
  //       element: <CariHareket />,
  //     },
  //     {
  //       path: "cari-ekstre",
  //       element: <CariEkstre />,
  //     },
  //     {
  //       path: "cari-bakiye",
  //       element: <CariBakiye />,
  //     },
  //     {
  //       path: "stock",
  //       element: <div></div>,
  //     },
  //     {
  //       path: "inventories",
  //       element: <div></div>,
  //     },
  //     {
  //       path: "inventory",
  //       element: <Outlet />,
  //       children: [
  //         {
  //           path: ":id",
  //           element: <div></div>,
  //         },
  //       ],
  //     },
  //     {
  //       path: "add-stock-receipt/:id",
  //       element: <div></div>,
  //     },
  //     {
  //       path: "stock-receipt/:id/:evrakNo",
  //       element: <div></div>,
  //     },
  //     {
  //       path: "stock-categories",
  //       element: <div></div>,
  //     },
  //     {
  //       path: "stock-category",
  //       element: <Outlet />,
  //       children: [
  //         {
  //           index: true,
  //           element: <div></div>,
  //         },
  //         {
  //           path: ":id",
  //           element: <div></div>,
  //         },
  //       ],
  //     },
  //     {
  //       path: "stock-movement",
  //       element: <div></div>,
  //     },
  //     {
  //       path: "stock-extract",
  //       element: <div></div>,
  //     },
  //     {
  //       path: "offers",
  //       element: <div></div>,
  //     },
  //     {
  //       path: "offer",
  //       element: <Outlet />,
  //       children: [
  //         {
  //           path: ":teklifId",
  //           element: <div></div>,
  //         },
  //         {
  //           path: ":id/:evrakno",
  //           element: <div></div>,
  //         },
  //       ],
  //     },
  //     {
  //       path: "create-offer/:id",
  //       element: <div></div>,
  //     },
  //     {
  //       path: "orders",
  //       element: <Outlet />,
  //       children: [
  //         {
  //           index: true,
  //           element: <div></div>,
  //         },
  //         {
  //           path: ":siparisId",
  //           element: <div></div>,
  //         },
  //       ],
  //     },
  //     {
  //       path: "create-order/:id",
  //       element: <div></div>,
  //     },
  //     {
  //       path: "bills",
  //       element: <div></div>,
  //     },
  //     {
  //       path: "bill/:faturaId",
  //       element: <div></div>,
  //     },
  //     {
  //       path: "create-bill/:id",
  //       element: <div></div>,
  //     },
  //     {
  //       path: "expense-bill",
  //       element: <Outlet />,
  //       children: [
  //         {
  //           path: ":id",
  //           element: <div></div>,
  //         },
  //         {
  //           path: ":id/:evrakno",
  //           element: <div></div>,
  //         },
  //       ],
  //     },
  //     {
  //       path: "check-and-bill",
  //       element: <div></div>,
  //     },
  //     {
  //       path: "check/:id",
  //       element: <div></div>,
  //     },
  //     {
  //       path: "create-check/:id",
  //       element: <div></div>,
  //     },
  //     {
  //       path: "staff/:id",
  //       element: <div></div>,
  //     },
  //     {
  //       path: "add-staff",
  //       element: <div></div>,
  //     },
  //     {
  //       path: "branch/:id",
  //       element: <div></div>,
  //     },
  //     {
  //       path: "add-branch",
  //       element: <div></div>,
  //     },
  //     {
  //       path: "store/:id",
  //       element: <div></div>,
  //     },
  //     {
  //       path: "add-store",
  //       element: <div></div>,
  //     },
  //     {
  //       path: "unit",
  //       element: <Outlet />,
  //       children: [
  //         {
  //           index: true,
  //           element: <div></div>,
  //         },
  //         {
  //           path: ":id",
  //           element: <div></div>,
  //         },
  //       ],
  //     },
  //     {
  //       path: "settings",
  //       element: <Outlet />,
  //       children: [
  //         {
  //           index: true,
  //           element: <div></div>,
  //         },
  //         {
  //           path: ":tabKey",
  //           element: <div></div>,
  //         },
  //       ],
  //     },
  //     {
  //       path: "company",
  //       element: <div></div>,
  //     },
  //     {
  //       path: "refresh/*",
  //       element: <div></div>,
  //     },
  //   ],
  // },
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
  //     // {
  //     //   path: "/register-wizard",
  //     //   element: <RegisterWizard />,
  //     // },
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
