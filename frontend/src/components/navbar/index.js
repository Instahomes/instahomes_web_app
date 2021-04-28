import React, { useState, useEffect } from "react";
import { NavbarFrame, NavbarLogo, NavbarSpan, menuStyles } from "./styles";
import { OutlineButton } from "../elements";
import logo from "../../assets/navbar/logo.svg";
import { slide as Menu } from "react-burger-menu";
import { withTheme } from "styled-components";
import { Link } from "react-router-dom";

const NavbarItems = ({ isMobile, className }) => (
  <React.Fragment>
    <NavbarSpan className={className}>BLOG</NavbarSpan>
    <NavbarSpan className={className}>FEATURED LISTINGS</NavbarSpan>
    {isMobile ? (
      <NavbarSpan className={className}>SIGNUP FOR BETA</NavbarSpan>
    ) : (
      <OutlineButton className={`btn-rubik ${className}`}>
        SIGNUP FOR BETA
      </OutlineButton>
    )}
  </React.Fragment>
);

const Navbar = ({ theme }) => {
  const finalMenuStyles = menuStyles(theme);
  const [width, setWidth] = useState(window.innerWidth);
  const isMediumScreen =
    width <=
    parseInt(
      theme.breakpoints.md.substring(0, theme.breakpoints.md.length - 2)
    ) +
      30;

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  return (
    <NavbarFrame>
      <Link to="/">
        <NavbarLogo src={logo} />
      </Link>
      {isMediumScreen ? (
        <Menu styles={finalMenuStyles} right>
          <NavbarItems isMobile />
        </Menu>
      ) : (
        <div>
          <NavbarItems />
        </div>
      )}
    </NavbarFrame>
  );
};

export default withTheme(Navbar);
