import React, { useState, useEffect } from "react";
import { NavbarFrame, NavbarLogo, NavbarSpan, menuStyles } from "./styles";
import { OutlineButton, GrayInput } from "../elements";
import logo from "../../assets/navbar/logo.svg";
import logoDark from "../../assets/navbar/logoDark.svg";
import { slide as Menu } from "react-burger-menu";
import { withTheme } from "styled-components";
import { Link } from "react-router-dom";

const NavbarItems = ({ isMobile, className, dark }) => (
  <React.Fragment>
    {!isMobile && (
      <GrayInput
        style={{ flex: 1, margin: "0 2.5em" }}
        scale={0.8}
        placeholder="Search for location or landmark"
        name="query"
      />
    )}
    {isMobile && (
      <NavbarSpan dark={dark} className={className}>
        HOME
      </NavbarSpan>
    )}
    <NavbarSpan dark={dark} className={className}>
      DISCOVER LISTINGS
    </NavbarSpan>
    <NavbarSpan dark={dark} className={className}>
      WISHLIST
    </NavbarSpan>
    <NavbarSpan dark={dark} className={className}>
      <OutlineButton dark={dark} className={`btn-menu btn-rubik ${className}`}>
        SIGNUP FOR BETA
      </OutlineButton>
    </NavbarSpan>
  </React.Fragment>
);

const Navbar = ({ theme, dark }) => {
  const finalMenuStyles = menuStyles(theme, dark);
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
        <img src={dark ? logoDark : logo} alt="Instahomes" />
      </Link>
      {isMediumScreen ? (
        <Menu styles={finalMenuStyles} right>
          <NavbarItems isMobile />
        </Menu>
      ) : (
        <React.Fragment>
          <NavbarItems dark={dark} />
        </React.Fragment>
      )}
    </NavbarFrame>
  );
};

export default withTheme(Navbar);
