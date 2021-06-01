import styled from "styled-components";

export const NavbarFrame = styled.nav`
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0.8rem var(--main-padding-x);
  margin-top: 1rem;
  z-index: 10000;
`;

export const NavbarSpan = styled.a`
  color: ${({ theme, dark }) =>
    dark ? theme.colors.softWhite : theme.colors.darkBlue};
  margin: 0 2em;
  font-size: 16px;
  font-weight: 500;

  &.bm-item {
    display: inline-block;
    color: ${({ theme }) => theme.colors.darkBlue};
    padding: 1em 0;
    text-align: center;
  }

  .btn-menu {
    font-size: 14px !important;
  }
`;

export const menuStyles = (theme, dark) => ({
  bmBurgerButton: {
    position: "sticky",
    width: "20px",
    height: "15px",
  },
  bmBurgerBars: {
    background: dark ? theme.colors.softWhite : theme.colors.mutedBlue,
  },
  bmBurgerBarsHover: {
    background: "#a90000",
  },
  bmCrossButton: {
    height: "24px",
    width: "24px",
  },
  bmCross: {
    background: "#bdc3c7",
  },
  bmMenuWrap: {
    position: "fixed",
    top: 0,
    height: "100%",
  },
  bmMenu: {
    background: "#fafafa",
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    display: "flex",
    flexDirection: "column",
    padding: "0.8em",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    top: 0,
    left: 0,
  },
});
