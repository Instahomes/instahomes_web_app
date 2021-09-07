import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import ListingUpload from "./listing-upload";
import ListingEdit from "./listing-edit";
import DevelopmentUpload from "./development-upload";
import DevelopmentEdit from "./development-edit";
import Login from "./login";
import ProtectedRoute from "../../misc/protectedRoutes";
import { isAuthenticated } from "../../services/developer-admin/auth";
import EmptyPage from "../../components/empty-page";

const DeveloperAdmin = () => {
  let match = useRouteMatch();
  const loginPath = `${match.path}/login`;
  const isLoggedIn = isAuthenticated();

  return (
    <Switch>
      <Route exact path={loginPath}>
        {isLoggedIn ? <Redirect to={`${match.path}/listings`} /> : <Login />}
      </Route>
      <ProtectedRoute
        isAuthenticated={isLoggedIn}
        redirectPath={loginPath}
        exact
        path={`${match.path}/listings/:id`}
      >
        <ListingEdit />
      </ProtectedRoute>
      <ProtectedRoute
        isAuthenticated={isLoggedIn}
        redirectPath={loginPath}
        path={`${match.path}/listings`}
      >
        <ListingUpload />
      </ProtectedRoute>
      <ProtectedRoute
        isAuthenticated={isLoggedIn}
        redirectPath={loginPath}
        exact
        path={`${match.path}/developments/:id`}
      >
        <DevelopmentEdit />
      </ProtectedRoute>
      <ProtectedRoute
        isAuthenticated={isLoggedIn}
        redirectPath={loginPath}
        path={`${match.path}/developments`}
      >
        <DevelopmentUpload />
      </ProtectedRoute>
      <Route exact path={`${match.path}`}>
        {isLoggedIn ? (
          <Redirect to={loginPath} />
        ) : (
          <Redirect to={`${match.path}/listings`} />
        )}
      </Route>
      <Route>
        <EmptyPage isEmpty={true} />
      </Route>
    </Switch>
  );
};

export default DeveloperAdmin;
