import styled from "styled-components";
import { OutlineButton, OrangeButton } from "../../components/elements";
import ProductSearch from "../../components/product-search";

export const ListingContainer = styled.main`
  padding: 2em var(--main-padding-x);
  padding-top: 5em;
`;

export const ListingHeadContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column-reverse;
  }
`;

export const ListingProductSearch = styled(ProductSearch)`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const ListingHeader = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 2em;
  margin-top: 2rem;
  padding-bottom: 1em;

  border-bottom: 1px solid ${({ theme }) => theme.colors.mutedGray};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    gap: 0;
  }
`;

export const ListingLine = styled.div`
  display: flex;
  margin-bottom: 10px;

  h4 {
    font-family: "Rubik", sans-serif;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkBlue};
    font-size: 1.5em;
    margin-right: 10px;
  }

  img {
    margin-right: 10px;
  }

  span {
    font-size: 1.1em;
    color: ${({ theme }) => theme.colors.darkBody};
  }
`;

export const HeaderButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-left: auto;
  padding: 12px 0;
  min-width: 40%;
  height: 50px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-left: 0;
    flex-direction: column-reverse;
    height: auto;
    width: 100%;
  }
`;

export const WishlistButton = styled(OutlineButton)`
  font-size: 1em;
  padding: 0 2em;
  display: flex;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.darkBlue};

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 0.7em 0;
    margin-top: 10px;
    justify-content: center;
  }
`;

export const WishlistHeart = styled.img`
  margin-right: 5px;
`;

export const InquireButton = styled(OrangeButton)`
  font-size: 1em;
  padding: 0 2em;
  margin-left: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    margin-left: 0;
    padding: 0.7em 0;
  }
`;

export const ProductTabContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mutedGray};
  overflow-x: scroll;
`;

export const ProductTab = styled.a`
  text-decoration: none;
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-size: 0.9em;
  font-weight: bold;
  color: ${({ theme, active }) =>
    active ? theme.colors.mutedLightBlue : theme.colors.whiteInputColor};
  border-bottom: ${({ theme, active }) =>
    active ? `1.5px solid ${theme.colors.mutedLightBlue}` : "none"};
  margin-left: ${({ first }) => (first ? 0 : "1.5em")};
  margin-right: ${({ last }) => (last ? 0 : "1.5em")};
  padding-top: 1em;
  padding-bottom: 1em;
`;

export const DescriptionContainer = styled.div`
  display: flex;
  padding-top: 1.5em;
  padding-bottom: 1.5em;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

export const DescriptionLeft = styled.div`
  width: 50%;
  margin-right: 2rem;

  div {
    h4 {
      margin-top: 1.5em;
      font-size: 1em;
      color: ${({ theme }) => theme.colors.darkBlue};
    }

    p {
      font-size: 0.9em;
      color: ${({ theme }) => theme.colors.darkHeader};
    }

    #view-specs {
      font-size: 0.9em;
      color: ${({ theme }) => theme.colors.darkBody};
    }

    #prop-details {
      display: flex;
      flex-wrap: wrap;
      margin-top: 1em;
      gap: 0 1.2em;

      .floor-plan {
        max-width: 100%;
        max-height: 250px;
        cursor: pointer;
      }

      .plan-details {
        // max-width: 50%;
        flex: 1;
      }
    }
  }

  #prop-directions {
    img {
      margin-top: 1em;
      width: 100%;
      object-fit: cover;
      border-radius: 10px;
    }

    #directions-details {
      display: flex;

      & > div {
        padding-top: 1em;
        padding-right: 1em;
      }

      h4 {
        margin-top: 0;
      }
    }
  }

  & > div:nth-child(1) {
    h4 {
      margin-top: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;

    #prop-details {
      flex-direction: column;
      flex-wrap: no-wrap;

      .floor-plan {
        width: 100%;
      }
    }
  }
`;

export const DescriptionDiv = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: ${({ active }) => (active ? "block" : "none")};
  }
`;

export const DevInformation = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.5em;
  // height: 100px;
  margin-top: 1em;

  h4,
  p {
    margin-bottom: 5px !important;
    margin-top: 0 !important;
  }

  .dev-info {
    max-width: 45%;

    .dev-info-icon {
      width: 12px;
      height: 12px;
    }
  }

  .logo {
    width: 120px;
    object-fit: cover;
    border-radius: 8px;
  }

  .orange-text {
    font-weight: 500;
    font-size: 0.7em;
    color: ${({ theme }) => theme.colors.orange};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    align-items: center;
    height: auto;
    gap: 1em;

    .logo {
      max-width: 100%;
      width: 100%;
      max-height: 150px;
    }

    .dev-info {
      max-width: 100%;
      width: 100%;
      text-align: center;
    }
  }
`;

export const ViewDev = styled(OutlineButton)`
  padding: 0.5em 1em;
  font-size: 0.9em;
  margin-left: auto;

  a {
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    margin-top: -5px;
  }
`;

export const DescriptionRight = styled.div`
  width: 50%;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 100%;
    margin-top: 1em;
  }

  .sticky {
    position: sticky;
    top: 5%;
  }
`;

export const MetadataLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2em;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 20px;
  }
`;

export const MetadataNumber = styled.div`
  font-size: 1em;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkBlue};
  margin-bottom: 5px;
  text-align: center;
`;

export const MetadataProperty = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8em;
  text-align: center;

  img {
    margin-right: 10px;
  }

  span {
    color: ${({ theme }) => theme.colors.darkBody};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    justify-content: center;
  }
`;

export const ProductPriceLine = styled.div`
  display: flex;
  font-size: 1.3em;
  margin-bottom: 2em;

  img {
    margin-right: 10px;
  }

  & > span {
    margin-left: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column-reverse;
    align-items: center;

    & > span {
      margin-left: 0;
      margin-bottom: 5px;
    }

    div {
      span {
        font-size: 1em;
      }
    }
  }
`;
