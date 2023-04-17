import Dashboard from "./src/pages/Dashboard";
import ErrorPage from "./src/pages/errorPage";

const RouteLists = [
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
  },
];

export default RouteLists;
