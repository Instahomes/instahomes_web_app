import React, { useState, useEffect } from "react";
import { GridPreviewButton } from "./styles";
import { Icon } from "@iconify/react";
import Base from "../../../components/developer-admin/base";
import Datatable from "../../../components/developer-admin/datatable";
import { OrangeButton } from "../../../components/developer-admin/base/styles";
import { withTheme } from "styled-components";

const HeaderElements = withTheme(({ theme, showGrid, setShowGrid }) => {
  return (
    <React.Fragment>
      <GridPreviewButton onClick={() => setShowGrid(!showGrid)}>
        <Icon
          icon={showGrid ? "fa:eye-slash" : "fa:eye"}
          color={theme.colors.darkHeader}
          width="1.1em"
          height="1.1em"
        />
        <span>{showGrid ? "Close" : "Open"} Grid Preview</span>
      </GridPreviewButton>
      <OrangeButton>+ Add New Listing</OrangeButton>
    </React.Fragment>
  );
});

const ListingUpload = React.memo((props) => {
  const [showGrid, setShowGrid] = useState(false);

  return (
    <Base
      headerName="Listings"
      HeaderElements={
        <HeaderElements showGrid={showGrid} setShowGrid={setShowGrid} />
      }
      Body={<Datatable />}
    />
  );
});

export default ListingUpload;
