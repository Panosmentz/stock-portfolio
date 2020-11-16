import React from "react";
import { CssBaseline } from "@material-ui/core";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import MyStocks from "./Components/MyStocks";
import { StateProvider } from "./Context/StateContext";
import PrivateRoute from "./routes/PrivateRoute";

function App() {
  return (
    <StateProvider>
      <ToastContainer />
      <CssBaseline />
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/mystocks" component={MyStocks} />
        </Switch>
      </Router>
    </StateProvider>
  );
}

export default App;
