import React from "react";
import SearchComponent from "../search-component";
import { OrangeButton, OutlineButton } from "../elements";

export const GuidedInvesting = () => (
  <React.Fragment>
    <h1>Get free curated investment picks now!</h1>
    <p>
      Don’t know which properties to invest in? Get hands-on guidance from our
      Real Estate advisors on what fits your budget, needs, and preferences with
      just a quick form.
    </p>
    <div style={{ display: "flex", gap: "10px" }}>
      <OrangeButton scale={0.9}>GET FREE PERSONALIZED GUIDANCE</OrangeButton>
      <OutlineButton scale={0.9}>KNOW MORE</OutlineButton>
    </div>
  </React.Fragment>
);

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
