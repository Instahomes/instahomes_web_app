import React from "react";
import SearchComponent from "../search-component";
import {
  HomeSearchFrame,
  SearchFooter,
  SearchImage,
  GuidedButtons,
} from "./styles";
import { OrangeButton, OutlineButton } from "../elements";
import homeSearchImage from "../../assets/home/homeSearch.png";
import check from "../../assets/card/check.svg";
import { useHistory, Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const GuidedInvesting = () => {
  const history = useHistory();
  return (
    <HomeSearchFrame>
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
    </HomeSearchFrame>
  );
};

export const Search = ({
  showAdvanced,
  setShowAdvanced,
  handleSearchSubmit,
}) => (
  <HomeSearchFrame className="tight-flex">
    <SearchComponent
      showAdvanced={showAdvanced}
      setShowAdvanced={setShowAdvanced}
      handleSearchSubmit={handleSearchSubmit}
      ParentFrame={({ children }) => (
        <React.Fragment>{children}</React.Fragment>
      )}
      Footer={() => (
        <SearchFooter>
          <img src={check} alt="Check" />
          <span className="verified">
            All inquiries & bookings are sent direct to Official Developer
          </span>
        </SearchFooter>
      )}
      style={{ flex: 1 }}
    >
      <h1>Book a video call tour to your dream home instantly!</h1>
      <p style={{ marginTop: "5px" }}>
        Find great properties from over 200 new models within 50 different
        developments of 16 partner developers
      </p>
    </SearchComponent>
    <SearchImage image={homeSearchImage}>
      <p className="video-call">
        Our new <span id="feature">Video Call Tour Feature</span> gets you in
        touch with developer representative to answer all your questions.
      </p>
    </SearchImage>
  </HomeSearchFrame>
);
