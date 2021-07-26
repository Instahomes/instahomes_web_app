import React from "react";
import SearchComponent from "../search-component";

const HomeSearch = React.memo(
  ({ showAdvanced, setShowAdvanced, handleSearchSubmit }) => {
    return (
      <SearchComponent
        showAdvanced={showAdvanced}
        setShowAdvanced={setShowAdvanced}
        handleSearchSubmit={handleSearchSubmit}
      >
        <h1 className="center">Secure your dream home instantly</h1>
        <p className="center" style={{ marginBottom: "2rem" }}>
          Get in touch with the best developers directly easily and for free
        </p>
      </SearchComponent>
    );
  }
);

export default HomeSearch;
