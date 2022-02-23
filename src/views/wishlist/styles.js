import styled from "styled-components";

export const WishlistContainer = styled.main`
  padding: 2em var(--main-padding-x);
  padding-top: 6em;
`;

export const WishlistHeader = styled.h1`
  color: ${({ theme }) => theme.colors.darkBlue};
`;
