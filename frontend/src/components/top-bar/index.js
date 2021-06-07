import emailIcon from "../../assets/navbar/email.svg";
import {
  TopBarFrame,
  TopBarSpan,
  TopBarPhone,
  TopBarPhoneIcon,
} from "./styles";

const TopBar = () => (
  <TopBarFrame>
    <TopBarPhone>
      <TopBarPhoneIcon src={emailIcon} />
      <TopBarSpan>instahomes.ph@gmail.com</TopBarSpan>
    </TopBarPhone>
    <TopBarSpan nodisplay>COMMERCIAL LEASING</TopBarSpan>
    <TopBarSpan noRightPadding>CONTACT SUPPORT</TopBarSpan>
  </TopBarFrame>
);

export default TopBar;
