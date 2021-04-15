import { NavbarFrame, NavbarLogo, NavbarSpan, NavbarButton } from "./styles";
import logo from "../../assets/navbar/logo.svg";

const Navbar = () => (
  <NavbarFrame>
    <NavbarLogo src={logo} />
    <div>
      <NavbarSpan>BLOG</NavbarSpan>
      <NavbarSpan>FEATURED LISTINGS</NavbarSpan>
      <NavbarButton className="btn-rubik">SIGNUP FOR BETA</NavbarButton>
    </div>
  </NavbarFrame>
);

export default Navbar;
