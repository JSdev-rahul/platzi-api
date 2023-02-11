import { useSelector } from "react-redux";

import "./App.css";

import HandleRoutes from "./routes";
import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import Axios from "axios";
const RoutesComponent = ({ token }) => {
  if (token) {
    Axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    return <HandleRoutes isLogdin={true} />;
  } else {
    return <HandleRoutes isLogdin={false} />;
  }
};

function App() {
  // const baseUrl = process.env.REACT_APP_BASE_URL;
  // Axios.defaults.baseURL = baseUrl;
  const { token } = useSelector((state) => state?.auth);

  return (
    <Router>
      <RoutesComponent token={token} />
    </Router>
  );
}

export default App;
