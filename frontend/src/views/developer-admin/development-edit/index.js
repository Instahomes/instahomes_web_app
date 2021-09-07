import React, { useState, useEffect } from "react";
import Base from "../../../components/developer-admin/base";
import {
  OrangeButton,
  OutlineButton,
} from "../../../components/developer-admin/base/styles";
import { withTheme } from "styled-components";
import { useRouteMatch } from "react-router-dom";
import { getDevelopmentById } from "../../../services/developer-admin/developments";
import FormComponent from "./formComponent";

const HeaderElements = withTheme(({ setOpenModal }) => {
  return (
    <React.Fragment>
      {/* <OutlineButton style={{ marginLeft: "auto", marginRight: "1em" }}>
        Save for Later
      </OutlineButton> */}
      <OrangeButton
        style={{ marginLeft: "auto" }}
        onClick={() => setOpenModal(true)}
      >
        Save & Make Visible
      </OrangeButton>
    </React.Fragment>
  );
});

const DevelopmentEdit = React.memo((props) => {
  const match = useRouteMatch();
  const [data, setData] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const { id } = match.params;
  const isEditing = id != "new";

  useEffect(() => {
    if (isEditing) {
      getDevelopmentById(id, setData, () => {});
    }
  }, [id]);

  return (
    <Base
      headerName={isEditing ? "Edit Development" : "Add a New Development"}
      HeaderElements={<HeaderElements setOpenModal={setOpenModal} />}
      Body={
        <FormComponent
          data={data}
          openModal={openModal}
          setOpenModal={setOpenModal}
          isEditing={isEditing}
        />
      }
    />
  );
});

export default DevelopmentEdit;
