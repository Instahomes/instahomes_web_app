import React, { useState, useEffect } from "react";
import instahomesLogo from "../../../assets/navbar/logo.svg";
import sampleLogo from "../../../assets/developer-admin/sampleLogo.png";
import { clear, getProfile } from "../../../services/developer-admin/auth";
import { Icon } from "@iconify/react";
import { withTheme } from "styled-components";
import {
  SidebarFrame,
  SidebarHeader,
  InstahomesLogo,
  DeveloperName,
  TabGroup,
  Tab,
  menuStyles,
  MenuContainer,
} from "./styles";
import { useHistory, useRouteMatch } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";

const sidebarTabs = [
  {
    label: "Developer Details",
    value: "developer",
    iconName: "fluent:building-retail-toolbox-20-filled",
    link: "/partner/developer",
  },
  {
    label: "Developments",
    value: "developments",
    iconName: "fa:building",
    link: "/partner/developments",
  },
  {
    label: "Listings",
    value: "listings",
    iconName: "fluent:home-add-24-filled",
    link: "/partner/listings",
  },
];

const TabComponents = ({ history, theme }) => {
  const match = useRouteMatch();
  const currentTab = sidebarTabs.find((tab) => match.path.includes(tab.value));

  const [activeTab, setActiveTab] = useState(currentTab.value);
  const [developer, setDeveloper] = useState(null);
  const isTabActive = (value) => value == activeTab;

  useEffect(() => {
    const { developer } = getProfile();
    setDeveloper(developer);
  }, []);

  const logout = () => {
    clear();
    history.push("/partner/login");
  };

  return (
    <React.Fragment>
      <SidebarHeader>
        <InstahomesLogo
          src={instahomesLogo}
          alt=""
          onClick={() => history.push("/")}
        />
        {developer && (
          <DeveloperName>
            {/* <img src={developer.logo} alt={developer.name} className="logo" /> */}
            <span className="dev-name">{developer.name}</span>
          </DeveloperName>
        )}
      </SidebarHeader>
      <TabGroup>
        {sidebarTabs.map((tab) => (
          <Tab
            key={tab.value}
            active={isTabActive(tab.value)}
            onClick={() => setActiveTab(tab.value)}
            to={tab.link}
          >
            <Icon
              icon={tab.iconName}
              color={
                isTabActive(tab.value)
                  ? theme.colors.orange
                  : theme.colors.darkGray
              }
              width="1.5em"
              height="1.5em"
            />
            <span className="tab-name">{tab.label}</span>
          </Tab>
        ))}
        <Tab style={{ marginTop: "auto" }} onClick={logout}>
          <Icon
            icon="ic:baseline-logout"
            color={theme.colors.darkGray}
            width="1.5em"
            height="1.5em"
          />
          <span className="tab-name">Log Out</span>
        </Tab>
      </TabGroup>
    </React.Fragment>
  );
};

const Sidebar = withTheme(
  React.memo(({ theme }) => {
    const finalMenuStyles = menuStyles(theme);
    const history = useHistory();

    return (
      <React.Fragment>
        <SidebarFrame>
          <TabComponents history={history} theme={theme} />
        </SidebarFrame>
        <MenuContainer>
          <InstahomesLogo
            src={instahomesLogo}
            alt=""
            onClick={() => history.push("/")}
          />
          <Menu styles={finalMenuStyles} right>
            <TabComponents history={history} theme={theme} />
          </Menu>
        </MenuContainer>
      </React.Fragment>
    );
  })
);

export default Sidebar;
