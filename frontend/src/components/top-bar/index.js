import phoneIcon from "../../assets/navbar/phone.svg";
import {
  TopBarFrame,
  TopBarSpan,
  TopBarPhone,
  TopBarPhoneIcon,
} from "./styles";

const TopBar = () => (
  <TopBarFrame>
    <TopBarPhone>
      <TopBarPhoneIcon src={phoneIcon} />
      <TopBarSpan>243-2349/243-1765</TopBarSpan>
    </TopBarPhone>
    <TopBarSpan nodisplay>BULK SALE</TopBarSpan>
    <TopBarSpan noRightPadding>CONTACT SUPPORT</TopBarSpan>
  </TopBarFrame>
);

export default TopBar;
