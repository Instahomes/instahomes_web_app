import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ children, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      children={(props) => {
        if (isAuthenticated) {
          return children;
        } else {
          return (
            <Redirect
              to={{
                pathname: "/signup",
                // state: {
                //   from: props.location,
                // },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;
