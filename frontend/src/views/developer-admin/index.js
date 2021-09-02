import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ListingUpload from "./listing-upload";

const DeveloperAdmin = () => {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route path={`${match.path}`}>
        <ListingUpload />
      </Route>
    </Switch>
  );
};

export default DeveloperAdmin;
