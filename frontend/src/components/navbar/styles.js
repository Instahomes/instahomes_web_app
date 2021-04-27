import styled from "styled-components";

export const NavbarFrame = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0.8rem var(--main-padding-x);
`;

export const NavbarLogo = styled.img`
  height: 40%;
`;

export const NavbarSpan = styled.span`
  color: ${({ theme }) => theme.colors.darkBlue};
  margin: 0 2em;
  font-size: 16px;
  font-weight: 500;
`;
