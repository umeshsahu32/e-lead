import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import {
  Home,
  AboutUs,
  CaseStudy,
  ContactUs,
  Packages,
  Privacy,
  Services,
  Terms,
  NotFound,
} from "./routes.js";


const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "case-study", element: <CaseStudy /> },
      { path: "contact-us", element: <ContactUs /> },
      { path: "packages", element: <Packages /> },
      { path: "privacy", element: <Privacy /> },
      { path: "services", element: <Services /> },
      { path: "terms", element: <Terms /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default AppRouter;
