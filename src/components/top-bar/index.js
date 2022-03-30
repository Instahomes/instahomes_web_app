import React from "react";
import emailIcon from "../../assets/navbar/email.svg";
import {
  TopBarFrame,
  TopBarSpan,
  TopBarPhone,
  TopBarPhoneIcon,
} from "./styles";

const TopBar = React.memo(() => (
  <TopBarFrame>
    <TopBarPhone>
      <TopBarPhoneIcon src={emailIcon} />
      <TopBarSpan>instahomes.ph@gmail.com</TopBarSpan>
    </TopBarPhone>
    <TopBarSpan nodisplay>
      <a href="mailto:instahomes.ph@gmail.com?subject=Commercial Leasing">
        COMMERCIAL LEASING
      </a>
    </TopBarSpan>
    <TopBarSpan noRightPadding>
      {" "}
      <a href="mailto:instahomes.ph@gmail.com">CONTACT SUPPORT</a>
    </TopBarSpan>
  </TopBarFrame>
));

export default TopBar;
