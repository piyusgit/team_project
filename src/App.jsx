// import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import { Navbar } from "./components/navbar/Navbar";
// import Admin from "./components/Admin";
// import { Provider } from "react-redux";
// import store from "./store";

function App() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const handleLoginSuccess = () => {
  //   setIsLoggedIn(true);
  // };

  return (
    <div className="app">
      {/* <Provider store={store}>  */}
      <Navbar />
      {/* <Router> */}
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<ProtectedRoute />} />
        <Route path="/" element={<Navigate to="/login" />} />
        {/* <Route path="/admin" element={<Admin />} /> */}
      </Routes>
      {/* </Router> */}
      {/* </Provider>  */}
    </div>
  );
}

const ProtectedRoute = () => {
  const isAuthenticated = sessionStorage.getItem("authenticated") === "true";
  return isAuthenticated ? <HomePage /> : <Navigate to="/login" />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.element.isRequired,
};
export default App;
