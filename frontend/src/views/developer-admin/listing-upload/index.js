import React, { useState, useEffect, useMemo } from "react";
import { GridPreviewButton, SwitchComponent } from "./styles";
import { Icon } from "@iconify/react";
import Base from "../../../components/developer-admin/base";
import Datatable from "../../../components/developer-admin/datatable";
import { OrangeButton } from "../../../components/developer-admin/base/styles";
import { withTheme } from "styled-components";

const VisibilityCell = ({ value, ...rest }) => {
  return <SwitchComponent checked={value} onChange={() => {}} />;
};

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

  const data = useMemo(
    () => [
      {
        name: "2 BR Condominium Unit",
        development: "Vertis North",
        location: "Vertis Plaza, Quezon City",
        units: 2,
        isVisible: true,
      },
      {
        name: "1 BR Condominium Unit",
        development: "Vertis North",
        location: "Vertis Plaza, Quezon City",
        units: 2,
        isVisible: false,
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "Property Name",
        accessor: "name", // accessor is the "key" in the data
      },
      {
        Header: "Development",
        accessor: "development",
      },
      {
        Header: "Location",
        accessor: "location",
      },
      {
        Header: "Available Units",
        accessor: "units",
      },
      {
        Header: "Visible?",
        accessor: "isVisible",
        Cell: VisibilityCell,
        getProps: () => ({ handleCheck: () => alert("clicked") }),
      },
      {
        Header: "",
        accessor: "menu",
        Cell: () => (
          <Icon
            icon="codicon:kebab-vertical"
            color="#828282"
            width="2em"
            height="2em"
          />
        ),
      },
    ],
    []
  );

  return (
    <Base
      headerName="Listings"
      HeaderElements={
        <HeaderElements showGrid={showGrid} setShowGrid={setShowGrid} />
      }
      Body={<Datatable data={data} columns={columns} />}
    />
  );
});

export default ListingUpload;
