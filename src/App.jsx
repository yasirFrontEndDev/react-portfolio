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
import ReduxTool from "./pages/ReduxTool";
//switching from BrowserRouter to HashRouter, as GitHub Pages does not support client-side routing without special configuration.
const App = () => {
  const router = createHashRouter(
    createRoutesFromElements(
      <>
        <Route />
          <Route path="/" element={<MainLayout />}>
          <Route index element={<Portfolio />} />
          <Route path="/redux" element={<ReduxTool />}/>
        </Route>
      </>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
