import React, { useState, useEffect } from "react";
import { GridPreviewButton } from "./styles";
import { Icon } from "@iconify/react";
import Base from "../../../components/developer-admin/base";
import { OrangeButton } from "../../../components/developer-admin/base/styles";
import { withTheme } from "styled-components";

const HeaderElements = withTheme(({ theme }) => {
  return (
    <React.Fragment>
      <GridPreviewButton>
        <Icon
          icon="fa:eye"
          color={theme.colors.darkHeader}
          width="1.1em"
          height="1.1em"
        />
        <span>Open Grid Preview</span>
      </GridPreviewButton>
      <OrangeButton>+ Add New Listing</OrangeButton>
    </React.Fragment>
  );
});

const ListingUpload = React.memo((props) => {
  return <Base headerName="Listings" HeaderElements={HeaderElements}></Base>;
});

export default ListingUpload;
