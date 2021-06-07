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
import { useHistory } from "react-router-dom";

const NavbarSearch = ({ isHome, dark }) => {
  const history = useHistory();
  const [query, setQuery] = useState("");

  return (
    <form
      style={{
        flex: 1,
        margin: "0 2.5em",
      }}
      onSubmit={() => {
        history.push({
          pathname: "/search",
          search: "?query=" + query,
        });
      }}
    >
      <GrayInput
        style={{ width: "100%", display: isHome ? "none" : "block" }}
        scale={0.8}
        placeholder="Search for location or landmark"
        name="query"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        dark={dark}
      />
    </form>
  );
};

const NavbarItems = ({ isMobile, isHome, className, dark, isLoggedIn }) => (
  <React.Fragment>
    {!isMobile && <NavbarSearch isHome={isHome} dark={dark} />}
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
  const history = useHistory();
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
          <NavbarItems
            history={history}
            isLoggedIn={isLoggedIn}
            isHome={isHome}
            isMobile
          />
        </Menu>
      ) : (
        <React.Fragment>
          <NavbarItems
            history={history}
            isLoggedIn={isLoggedIn}
            isHome={isHome}
            dark={dark}
          />
        </React.Fragment>
      )}
    </NavbarFrame>
  );
};

export default withTheme(Navbar);
