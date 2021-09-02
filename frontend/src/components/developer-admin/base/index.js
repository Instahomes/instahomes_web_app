import React from "react";
import Sidebar from "../sidebar";
import { withTheme } from "styled-components";
import { Icon } from "@iconify/react";
import { BaseFrame, MainContainer, MainHeader, OrangeButton } from "./styles";

const DeveloperAdminBase = withTheme(
  React.memo(({ theme, headerName, HeaderElements }) => {
    return (
      <BaseFrame>
        <Sidebar />
        <MainContainer>
          <Icon
            icon="fluent:search-12-filled"
            color={theme.colors.whiteInputColor}
            width="1.5em"
            height="1.5em"
          />
          <MainHeader>
            <span className="header">{headerName}</span>
            <HeaderElements />
          </MainHeader>
        </MainContainer>
      </BaseFrame>
    );
  })
);

export default DeveloperAdminBase;
