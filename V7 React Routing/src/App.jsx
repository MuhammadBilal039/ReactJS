import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import Layout from "./components/Layout";
import ContactDetails from "./pages/ContactDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
          loader: () => {
            return fetch("https://jsonplaceholder.typicode.com/users");
          },
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/contact/:id",
          element: <ContactDetails />,
        },
        {
          path: "/help",
          element: <Help />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
