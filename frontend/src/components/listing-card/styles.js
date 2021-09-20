import styled from "styled-components";
import { OrangeButton, OutlineButton } from "../../components/elements";

export const ListingCard = styled.div`
  position: relative;
  background: ${({ theme }) => theme.colors.mainBgColor};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  min-width: 370px;
  max-width: 370px;
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-width: 330px;
    max-width: 330px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    min-width: min(260px, 100%);
    max-width: min(260px, 100%);
  }
`;

export const DeveloperLogo = styled.div`
  position: absolute;
  right: 10px;
  top: 10px;
  width: 60px;

  img {
    max-height: 100%;
    max-width: 100%;
    object-fit: cover;
  }
`;

export const WishlistHeart = styled.img`
  cursor: pointer;
  position: absolute;
  left: 10px;
  top: 10px;
`;

export const ListingImage = styled.div`
  height: 250px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 200px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    height: 180px;
  }
`;

export const ListingInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.1em;
  // height: 100%;
  flex: 1;

  .view-home {
    margin-top: auto;
  }

  a {
    text-decoration: none;
  }
`;

export const ListingName = styled.h1`
  font-size: 1.3em;
  color: ${({ theme }) => theme.colors.darkBlue};

  img {
    width: 0.8em;
    height: 0.8em;
  }
`;

export const ListingLine = styled.div`
  display: flex;
  align-items: center;
  margin-top: 0.5em;
  margin-bottom: ${({ marginBottom }) => marginBottom};
`;

export const ListingPiece = styled.span`
  font-size: ${({ large }) => (large ? "1.1em" : "1em")};
  font-weight: ${({ bold }) => (bold ? 500 : 400)};
  color: ${({ theme, orange }) =>
    orange ? theme.colors.orange : theme.colors.darkBody};
  margin-left: ${({ marginLeft }) => marginLeft};
  margin-right: ${({ marginRight }) => marginRight};
`;

export const ListingSize = styled.span`
  border: 1.5px solid ${({ theme }) => theme.colors.darkHeader};
  box-sizing: border-box;
  border-radius: 18px;

  color: ${({ theme }) => theme.colors.darkHeader};
  font-size: 0.75em;
  font-weight: 500;
  padding: 0.2em 0.5em;
`;

export const TourButton = styled(OrangeButton)`
  font-size: 1em;
  font-weight: 700;
  // font-family: "Rubik", sans-serif;
  width: 100%;
  margin-bottom: 0.5em;
`;

export const ViewHomeButton = styled(OutlineButton)`
  border: 1px solid ${({ theme }) => theme.colors.mutedLightBlue};
  font-size: 1em;
  font-weight: 700;
  // font-family: "Rubik", sans-serif;
  width: 100%;
`;

export const DirectToDeveloper = styled.div`
  margin-top: 0.6em;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 13px;
    height: 13px;
    margin-right: 5px;
  }

  span {
    color: ${({ theme }) => theme.colors.green};
    font-size: 0.75em;
  }
`;
