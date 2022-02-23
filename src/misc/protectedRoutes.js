import React from "react";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({
  children,
  isAuthenticated,
  redirectPath,
  ...rest
}) => {
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
                pathname: redirectPath,
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
