import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = (props) => {
  const token = localStorage.getItem('token');
  return (
    <Route>
      {() =>
        token ? props.children : <Redirect to="/" />
      }
    </Route>
  );
};

export default ProtectedRoute;