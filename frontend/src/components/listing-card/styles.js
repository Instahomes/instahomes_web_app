import styled from "styled-components";
import { OutlineButton } from "../../components/elements";

export const ListingCard = styled.div`
  background: ${({ theme }) => theme.colors.mainBgColor};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
`;

export const ListingImage = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const ListingInfo = styled.div`
  padding: 1.1em;
`;

export const ListingName = styled.h1`
  font-size: 1.3em;
  color: ${({ theme }) => theme.colors.darkBlue};
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

export const ViewHomeButton = styled(OutlineButton)`
  border: 1px solid ${({ theme }) => theme.colors.mutedLightBlue};
  font-size: 1em;
  font-family: "Rubik", sans-serif;
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
