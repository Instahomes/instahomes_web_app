import React, { useState, useEffect } from "react";
import Base from "../../../components/developer-admin/base";
import {
  OrangeButton,
  OutlineButton,
} from "../../../components/developer-admin/base/styles";
import { withTheme } from "styled-components";
import { useRouteMatch } from "react-router-dom";
import { getListingById } from "../../../services/developer-admin/listings";
import { getDevelopments } from "../../../services/developer-admin/developments";
import FormComponent from "./formComponent";

const HeaderElements = withTheme(() => {
  return (
    <React.Fragment>
      {/* <OutlineButton style={{ marginLeft: "auto", marginRight: "1em" }}>
        Save for Later
      </OutlineButton> */}
      <OrangeButton
        style={{ marginLeft: "auto" }}
        form="edit-listing"
        type="submit"
      >
        Save & Make Visible
      </OrangeButton>
    </React.Fragment>
  );
});

const ListingEdit = React.memo((props) => {
  const match = useRouteMatch();
  const [data, setData] = useState(null);
  const [developments, setDevelopments] = useState([]);
  const { id } = match.params;
  const isEditing = id != "new";

  useEffect(() => {
    if (isEditing) {
      getListingById(id, setData, () => {});
    }
    getDevelopments(
      (devs) =>
        setDevelopments(
          devs.map((dev) => ({ label: dev.name, value: dev.id }))
        ),
      () => {}
    );
  }, [id]);

  return (
    <Base
      headerName={isEditing ? "Edit Listing" : "Add a New Listing"}
      HeaderElements={<HeaderElements />}
      Body={<FormComponent data={data} developments={developments} />}
    />
  );
});

export default ListingEdit;
