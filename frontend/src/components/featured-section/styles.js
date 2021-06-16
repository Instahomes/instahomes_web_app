import styled from "styled-components";

export const FeaturedNews = styled.section`
  padding: 3em var(--main-padding-x);

  .featured-row {
    display: flex;
    gap: 2em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 3em calc(var(--main-padding-x) - 5px);

    h2 {
      margin-left: 5px;
    }

    .featured-row {
      gap: 1em;
      overflow: auto;
      padding: 5px;
    }
  }
`;
