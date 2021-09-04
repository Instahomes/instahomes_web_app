import React, { useState, useEffect, useMemo } from "react";
import {
  GridPreviewButton,
  SwitchComponent,
  GridStyle,
  ModifiedListingCard,
} from "./styles";
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

const ListingGrid = ({ data }) => {
  return (
    <GridStyle>
      {data.map((listing) => (
        <ModifiedListingCard
          id={listing.id}
          key={listing.seo_title + listing.id}
          developer={listing.developer}
          // image={listing.photo_main}
          name={listing.development + " " + listing.name}
          size={listing.lot_size}
          price={listing.lowest_price}
          address={listing.location}
          bedrooms={listing.bedrooms}
          bathrooms_min={listing.bathrooms_min}
          bathrooms_max={listing.bathrooms_max}
          isVerified={true}
          isOnWishlist={listing.is_liked}
        />
      ))}
    </GridStyle>
  );
};

const ListingUpload = React.memo((props) => {
  const [showGrid, setShowGrid] = useState(false);

  const data = useMemo(
    () => [
      {
        id: "12346",
        seo_title: "1 Br Condominium Unit",
        developer: "Test",
        name: "2 BR Condominium Unit",
        development: "Vertis North",
        lot_size: "45",
        lowest_price: 10000000,
        bedrooms: 4,
        bathrooms_min: 2,
        is_liked: false,
        location: "Vertis Plaza, Quezon City",
        units: 2,
        isVisible: true,
      },
      {
        id: "12346",
        seo_title: "1 Br Condominium Unit",
        developer: "Test",
        name: "1 BR Condominium Unit",
        development: "Vertis North",
        lot_size: "45",
        lowest_price: 10000000,
        bedrooms: 4,
        bathrooms_min: 2,
        is_liked: false,
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
      Body={
        showGrid ? (
          <ListingGrid data={data} />
        ) : (
          <Datatable data={data} columns={columns} />
        )
      }
    />
  );
});

export default ListingUpload;
