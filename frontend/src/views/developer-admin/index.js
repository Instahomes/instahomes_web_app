import React from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ListingUpload from "./listing-upload";
import ListingEdit from "./listing-edit";

const DeveloperAdmin = () => {
  let match = useRouteMatch();

  return (
    <Switch>
      <Route exact path={`${match.path}/listings/:id`}>
        <ListingEdit />
      </Route>
      <Route path={`${match.path}`}>
        <ListingUpload />
      </Route>
    </Switch>
  );
};

export default DeveloperAdmin;
