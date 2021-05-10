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
`;

// export const NavbarLogo = styled.div`
//   height: 100%;

//   a {
//     display: flex;
//     align-items: center;
//     height: 100%;
//   }

//   img {
//     height: 40%;
//   }
// `;

// export const NavbarLogo = styled.img`
//   height: 40%;
// `;

export const NavbarSpan = styled.a`
  color: ${({ theme, dark }) =>
    dark ? theme.colors.mutedGray : theme.colors.darkBlue};
  margin: 0 2em;
  font-size: 16px;
  font-weight: 500;

  &.bm-item {
    display: inline-block;
    color: ${({ theme }) => theme.colors.mutedBlue};
    padding: 1em 0;
  },
`;

export const menuStyles = (theme) => ({
  bmBurgerButton: {
    position: "sticky",
    width: "20px",
    height: "15px",
  },
  bmBurgerBars: {
    background: theme.colors.mutedBlue,
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
    background: theme.colors.darkBlue,
    padding: "2.5em 1.5em 0",
    fontSize: "1.15em",
  },
  bmMorphShape: {
    fill: "#373a47",
  },
  bmItemList: {
    color: "#b8b7ad",
    padding: "0.8em",
  },
  bmOverlay: {
    background: "rgba(0, 0, 0, 0.3)",
    top: 0,
    left: 0,
  },
});
