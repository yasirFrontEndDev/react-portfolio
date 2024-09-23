import React from "react";
import {
  createHashRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Link,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Portfolio from "./pages/Portfolio";

const App = () => {
  const router = createHashRouter(
    createRoutesFromElements(
      <>
        <Route />
          <Route path="/" element={<MainLayout />}>
          <Route index element={<Portfolio />} />
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
