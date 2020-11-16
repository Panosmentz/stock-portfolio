import React, { useContext, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { StateContext } from "../Context/StateContext";

const PrivateRoute = (props) => {
  const { isAuthenticated } = useContext(StateContext);

  const isAuth = JSON.parse(localStorage.getItem("isAuthenticated"));
  console.log("isAuth from Private Route component", isAuth);
  return isAuth ? (
    <Route {...props} />
  ) : (
    <Redirect
      to={{
        pathname: "/",
        state: { from: props.location },
      }}
    />
  );
};

export default PrivateRoute;
