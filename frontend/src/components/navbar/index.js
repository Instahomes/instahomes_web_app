import { NavbarFrame, NavbarLogo, NavbarSpan } from "./styles";
import { OutlineButton } from "../elements";
import logo from "../../assets/navbar/logo.svg";

const Navbar = () => (
  <NavbarFrame>
    <NavbarLogo src={logo} />
    <div>
      <NavbarSpan>BLOG</NavbarSpan>
      <NavbarSpan>FEATURED LISTINGS</NavbarSpan>
      <OutlineButton className="btn-rubik">SIGNUP FOR BETA</OutlineButton>
    </div>
  </NavbarFrame>
);

export default Navbar;
