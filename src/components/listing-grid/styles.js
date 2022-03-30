import styled from "styled-components";
import ListingCard from "../../components/listing-card";
import { ListingInfo } from "../../components/listing-card/styles";

export const ListingsFilters = styled.div`
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  gap: 10px;

  .listing-count {
    font-size: 0.8em;
    color: #738398;

    .count-emphasis {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.darkHeader};
    }
  }

  .listing-sort {
    margin-left: auto;
  }
`;

export const GridStyle = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 1.5em 1em;

  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
`;

export const ModifiedListingCard = styled(ListingCard)`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-width: 100%;
    max-width: 100%;
  }

  @media (max-width: 700px) {
    ${ListingInfo} {
      height: auto;
    }
  }
`;
