import React from "react";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import Dashboard from "./Components/Dashboard";
import MyStocks from "./Components/MyStocks";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StateProvider, StateContext } from "./Context/StateContext";
import { CssBaseline } from "@material-ui/core";
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
