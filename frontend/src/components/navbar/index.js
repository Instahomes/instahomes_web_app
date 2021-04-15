import styled from "styled-components";
import logo from "../../assets/navbar/logo.svg";

const NavbarFrame = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0.8rem ${({ theme }) => theme.padding.mainPaddingX};
`;

const NavbarLogo = styled.img`
  height: 40%;
`;

const NavbarSpan = styled.span`
  color: ${({ theme }) => theme.colors.darkBlue};
  margin: 0 2em;
  font-size: 16px;
  font-weight: 500;
`;

const NavbarButton = styled.button`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkBlue};
  padding: 0.5em 1.5em;
  background-color: initial;
  border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  border-radius: 1px;
`;

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
