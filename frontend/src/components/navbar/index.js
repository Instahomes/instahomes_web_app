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
    <GrayInput
      style={{ flex: 1, margin: "0 2.5em" }}
      scale={0.8}
      placeholder="Search for location or landmark"
      name="query"
    />
    <NavbarSpan dark={dark} className={className}>
      BLOG
    </NavbarSpan>
    <NavbarSpan dark={dark} className={className}>
      FEATURED LISTINGS
    </NavbarSpan>
    {isMobile ? (
      <NavbarSpan dark={dark} className={className}>
        SIGNUP FOR BETA
      </NavbarSpan>
    ) : (
      <OutlineButton dark={dark} className={`btn-rubik ${className}`}>
        SIGNUP FOR BETA
      </OutlineButton>
    )}
  </React.Fragment>
);

const Navbar = ({ theme, dark }) => {
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
        <img src={logoDark} alt="Instahomes" />
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
