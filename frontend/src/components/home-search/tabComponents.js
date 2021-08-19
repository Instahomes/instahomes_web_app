import React from "react";
import SearchComponent from "../search-component";
import { GuidedButtons } from "./styles";
import { OrangeButton, OutlineButton } from "../elements";
import { useHistory, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const GuidedInvesting = () => {
  const history = useHistory();
  return (
    <React.Fragment>
      <h1>Get free curated investment picks now!</h1>
      <p>
        Don’t know which properties to invest in? Try our{" "}
        <Link to="/guidance" style={{ fontWeight: 500, color: "inherit" }}>
          Guided Investing Now
        </Link>
      </p>
      <ul style={{ marginBottom: "1.5em" }}>
        <li>No bias due to partnerships with all the different developers</li>
        <li>Direct to the Developer Partners</li>
        <li>Curated Investments that meet your budget and preferences</li>
      </ul>
      <GuidedButtons>
        <OrangeButton scale={0.9} onClick={() => history.push("/guidance")}>
          GET FREE PERSONALIZED GUIDANCE
        </OrangeButton>
        <OutlineButton scale={0.9}>
          <HashLink
            to="/#guided"
            style={{ color: "inherit", textDecoration: "inherit" }}
          >
            KNOW MORE
          </HashLink>
        </OutlineButton>
      </GuidedButtons>
    </React.Fragment>
  );
};

export const Search = ({
  showAdvanced,
  setShowAdvanced,
  handleSearchSubmit,
}) => (
  <SearchComponent
    showAdvanced={showAdvanced}
    setShowAdvanced={setShowAdvanced}
    handleSearchSubmit={handleSearchSubmit}
    ParentFrame={({ children }) => <React.Fragment>{children}</React.Fragment>}
  >
    <h1>Find your new dream home in just a click</h1>
    <p style={{ marginTop: "5px" }}>
      Search for over 200 new models in 50 different developments direct to
      developer
    </p>
  </SearchComponent>
);
