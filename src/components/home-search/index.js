import React, { useState } from "react";
import { HomeSearchContainer, TabRow, Tab } from "./styles";
import { GuidedInvesting, Search } from "./tabComponents";
import iconSearch from "../../assets/home/iconSearch.svg";
import iconGuided from "../../assets/home/iconGuided.svg";

const tabComponents = (showAdvanced, setShowAdvanced, handleSearchSubmit) => ({
  guided_investing: <GuidedInvesting />,
  search: (
    <Search
      showAdvanced={showAdvanced}
      setShowAdvanced={setShowAdvanced}
      handleSearchSubmit={handleSearchSubmit}
    />
  ),
});

const tabOptions = [
  {
    value: "search",
    label: "Search a Property",
    icon: iconSearch,
  },
  {
    value: "guided_investing",
    label: "Guided Investing",
    icon: iconGuided,
  },
];

const HomeSearch = React.memo(
  ({ showAdvanced, setShowAdvanced, handleSearchSubmit }) => {
    const [tab, setTab] = useState(tabOptions[0].value);

    return (
      <HomeSearchContainer>
        <TabRow>
          {tabOptions.map((option) => (
            <Tab
              key={option.value}
              isSelected={tab == option.value}
              onClick={() => setTab(option.value)}
            >
              <img src={option.icon} alt={option.label} />
              <span>{option.label}</span>
            </Tab>
          ))}
        </TabRow>
        {tabComponents(showAdvanced, setShowAdvanced, handleSearchSubmit)[tab]}
      </HomeSearchContainer>
    );
  }
);

export default HomeSearch;
