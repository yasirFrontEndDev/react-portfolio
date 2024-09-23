import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Navigate,
  Link,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Portfolio from "./pages/Portfolio";


const App = () => {
  const router = createBrowserRouter(
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
