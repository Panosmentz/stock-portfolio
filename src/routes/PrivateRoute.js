import React, { useContext, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = (props) => {
  const isAuth = JSON.parse(localStorage.getItem("isAuthenticated"));
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
