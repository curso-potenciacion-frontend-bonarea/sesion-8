import React, { Suspense } from "react";
import MainLayout from "./layouts/MainLayout";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MainMenuPage from "./pages/MainMenuPage";
import CleanLayout from "./layouts/CleanLayout";
import { authFullPaths, authPaths } from "./auth/routing/paths";
import NotFoundPage from "./pages/NotFoundPage";
import { shopsPaths } from "./shops/routing/paths";
import { trucksPaths } from "./trucks/routing/paths";
import ShopsListProvider from "./shops/context/ShopsListProvider";

const LoginPage = React.lazy(() => import("./auth/pages/LoginPage"));
const RegisterPage = React.lazy(() => import("./auth/pages/RegisterPage"));
const ShopsListPage = React.lazy(() => import("./shops/pages/ShopsListPage"));
const TrucksListPage = React.lazy(
  () => import("./trucks/pages/TrucksListPage")
);

const App = (): React.ReactElement => {
  return (
    <Suspense>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<MainLayout />}>
            <Route path="" element={<Navigate to={authFullPaths.login} />} />
            <Route path="menu" element={<MainMenuPage />} />
          </Route>
          <Route path={shopsPaths.root} element={<MainLayout />}>
            <Route
              path={shopsPaths.list}
              element={
                <ShopsListProvider>
                  <ShopsListPage />
                </ShopsListProvider>
              }
            />
          </Route>
          <Route path={trucksPaths.root} element={<MainLayout />}>
            <Route path={trucksPaths.list} element={<TrucksListPage />} />
          </Route>
          <Route path={authPaths.root} element={<CleanLayout />}>
            <Route path="" element={<Navigate to={authFullPaths.login} />} />
            <Route path={authPaths.login} element={<LoginPage />} />
            <Route path={authPaths.register} element={<RegisterPage />} />
          </Route>
          <Route path="*" element={<CleanLayout />}>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default App;
