import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Landing from "../pages/Landing";
import Products from "../pages/Products";
import Layout from "../pages/Layout";

const mypaths = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Landing /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/products", element: <Products /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={mypaths} />;
}

export default App;
