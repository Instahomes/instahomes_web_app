import styled from "styled-components";

export const FeaturedCard = styled.div`
  width: 33%;
  background: ${({ theme }) => theme.colors.mainBgColor};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 2px;

  img {
    height: 150px;
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-width: 290px;
  }
`;

export const FeaturedInfo = styled.div`
  padding: 0.9em 1.2em;

  p {
    margin-top: 0.8em;
  }
`;
