import React from "react";
import { Switch, Route, Redirect, useRouteMatch } from "react-router-dom";
import DevelopmentPage from "./development-page";
import ProtectedRoute from "../../misc/protectedRoutes";
import { isAuthenticated } from "../../services/developer-admin/auth";
import EmptyPage from "../../components/empty-page";

const DeveloperWebsite = () => {
  let match = useRouteMatch();
  const loginPath = `${match.path}/login`;
  const isLoggedIn = isAuthenticated();

  return (
    <Switch>
      <Route exact path={`${match.path}/development/:id`}>
        <DevelopmentPage />
      </Route>
      <Route>
        <EmptyPage isEmpty={true} />
      </Route>
    </Switch>
  );
};

export default DeveloperWebsite;
