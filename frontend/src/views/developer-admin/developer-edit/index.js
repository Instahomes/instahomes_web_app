import React, { useState, useEffect } from "react";
import Base from "../../../components/developer-admin/base";
import {
  OrangeButton,
  OutlineButton,
} from "../../../components/developer-admin/base/styles";
import { withTheme } from "styled-components";
import { getDeveloperById } from "../../../services/developer-admin/developers";
import FormComponent from "./formComponent";
import { getProfile } from "../../../services/developer-admin/auth";

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
  const [data, setData] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const { developer } = getProfile();
  const { id } = developer;

  useEffect(() => {
    getDeveloperById(id, setData, () => {});
  }, []);

  return (
    <Base
      headerName={"Edit Your Details"}
      HeaderElements={<HeaderElements setOpenModal={setOpenModal} />}
      Body={
        <FormComponent
          data={data}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      }
    />
  );
});

export default DevelopmentEdit;
