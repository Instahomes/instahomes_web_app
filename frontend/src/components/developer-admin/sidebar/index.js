import React, { useState } from "react";
import instahomesLogo from "../../../assets/navbar/logo.svg";
import sampleLogo from "../../../assets/developer-admin/sampleLogo.png";
import { Icon } from "@iconify/react";
import { withTheme } from "styled-components";
import {
  SidebarFrame,
  SidebarHeader,
  InstahomesLogo,
  DeveloperName,
  TabGroup,
  Tab,
} from "./styles";

const developer = {
  logo: sampleLogo,
  name: "Alveo Land Corporation",
};

const sidebarTabs = [
  {
    label: "Developer Details",
    value: "developerDetails",
    iconName: "fluent:building-retail-toolbox-20-filled",
  },
  {
    label: "Developers",
    value: "developments",
    iconName: "fa:building",
  },
  {
    label: "Listings",
    value: "listings",
    iconName: "fluent:home-add-24-filled",
  },
];

const Sidebar = withTheme(
  React.memo(({ theme }) => {
    const [activeTab, setActiveTab] = useState("listings");
    const isTabActive = (value) => value == activeTab;

    return (
      <SidebarFrame>
        <SidebarHeader>
          <InstahomesLogo src={instahomesLogo} alt="" />
          <DeveloperName>
            <img src={developer.logo} alt="Alveo" className="logo" />
            <span className="dev-name">{developer.name}</span>
          </DeveloperName>
        </SidebarHeader>
        <TabGroup>
          {sidebarTabs.map((tab) => (
            <Tab
              key={tab.value}
              active={isTabActive(tab.value)}
              onClick={() => setActiveTab(tab.value)}
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
        </TabGroup>
      </SidebarFrame>
    );
  })
);

export default Sidebar;
