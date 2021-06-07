import React, { useState, useEffect } from "react";
import {
  NavbarFrame,
  NavbarSpan,
  MenuItems,
  menuStyles,
  WishlistNumber,
} from "./styles";
import { OutlineButton, GrayInput } from "../elements";
import logo from "../../assets/navbar/logo.svg";
import logoDark from "../../assets/navbar/logoDark.svg";
import { slide as Menu } from "react-burger-menu";
import { withTheme } from "styled-components";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../../services/auth";
import AccountDropdown from "../../components/account-dropdown";

const NavbarItems = ({ isMobile, isHome, className, dark, isLoggedIn }) => (
  <React.Fragment>
    {!isMobile && (
      <GrayInput
        style={{
          flex: 1,
          margin: "0 2.5em",
          opacity: isHome ? 0 : 1,
        }}
        scale={0.8}
        placeholder="Search for location or landmark"
        name="query"
        dark={dark}
      />
    )}
    <MenuItems>
      {isMobile && (
        <NavbarSpan dark={dark} className={className}>
          HOME
        </NavbarSpan>
      )}
      {!isLoggedIn && (
        <NavbarSpan dark={dark} className={className}>
          BLOG
        </NavbarSpan>
      )}
      <NavbarSpan dark={dark} className={className}>
        DISCOVER LISTINGS
      </NavbarSpan>
      {isLoggedIn && (
        <NavbarSpan dark={dark} className={className} to="/wishlist">
          WISHLIST&nbsp;&nbsp;<WishlistNumber>2</WishlistNumber>
        </NavbarSpan>
      )}
      {isLoggedIn ? (
        <NavbarSpan dark={dark} className={className}>
          <AccountDropdown dark={dark}></AccountDropdown>
        </NavbarSpan>
      ) : (
        <NavbarSpan dark={dark} className={className} to="/signup">
          <OutlineButton
            dark={dark}
            className={`btn-menu btn-rubik ${className}`}
          >
            SIGNUP FOR BETA
          </OutlineButton>
        </NavbarSpan>
      )}
    </MenuItems>
  </React.Fragment>
);

const Navbar = ({ theme, dark, isHome }) => {
  const finalMenuStyles = menuStyles(theme, dark);
  const isLoggedIn = isAuthenticated();
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
          <NavbarItems isLoggedIn={isLoggedIn} isHome={isHome} isMobile />
        </Menu>
      ) : (
        <React.Fragment>
          <NavbarItems isLoggedIn={isLoggedIn} isHome={isHome} dark={dark} />
        </React.Fragment>
      )}
    </NavbarFrame>
  );
};

export default withTheme(Navbar);
