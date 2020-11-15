import React from "react";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";
import Dashboard from "./Components/Dashboard";
import MyStocks from "./Components/MyStocks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StateProvider, StateContext } from "./Context/StateContext";

function App() {
  return (
    <StateProvider>
      <div>
        <Router>
          <Navbar />

          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/mystocks" component={MyStocks} />
          </Switch>
        </Router>
      </div>
    </StateProvider>
  );
}

export default App;
