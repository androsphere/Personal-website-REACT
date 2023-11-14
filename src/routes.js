import Home from "./pages/Home";
import About from "./pages/About";
import Pieces from "./pages/Pieces";
import ErrorPage from "./pages/ErrorPage";


const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  }, 
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />
  },
  {
    path: "/pieces",
    element: <Pieces />,
    errorElement: <ErrorPage />
  }
  
];

export default routes;