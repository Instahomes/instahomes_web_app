import styled from "styled-components";
import { OutlineButton, OrangeButton } from "../../components/elements";

export const ListingContainer = styled.main`
  padding: 0 ${({ theme }) => theme.padding.mainPaddingX};
`;

export const ListingHeader = styled.div`
  display: flex;
  margin-top: 2rem;
  padding-bottom: 1em;

  border-bottom: 1px solid ${({ theme }) => theme.colors.mutedGray};
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

  span {
    font-size: 1.1em;
    color: ${({ theme }) => theme.colors.darkBody};
    margin-left: 10px;
  }
`;

export const HeaderButtons = styled.div`
  display: flex;
  margin-left: auto;
  padding: 12px 0;
`;

export const WishlistButton = styled(OutlineButton)`
  font-size: 1em;
  padding: 0 2em;
  display: flex;
  align-items: center;
  border: 2px solid ${({ theme }) => theme.colors.darkBlue};
`;

export const WishlistHeart = styled.img`
  margin-right: 5px;
`;

export const InquireButton = styled(OrangeButton)`
  font-size: 1em;
  padding: 0 2em;
  margin-left: 10px;
`;

export const Image = styled.div`
  background: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ImageContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 170px);
  grid-template-areas:
    "main main image1 image2"
    "main main image3 image4";
  gap: 10px;

  ${Image}:nth-child(1) {
    grid-area: main;
  }

  ${Image}:nth-child(2) {
    grid-area: image1;
  }

  ${Image}:nth-child(3) {
    grid-area: image2;
  }

  ${Image}:nth-child(4) {
    grid-area: image3;
  }

  ${Image}:nth-child(5) {
    grid-area: image4;
  }
`;

export const MoreImages = styled.div`
  background: ${({ theme }) => theme.colors.mutedGray};

  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 3px;

  position: absolute;
  bottom: 2%;
  right: 1%;

  padding: 0.5em 1em;
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 1em;
  font-weight: 500;
  opacity: 0.7;
`;

export const ProductTabContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.mutedGray};
`;

export const ProductTab = styled.a`
  font-family: "M PLUS Rounded 1c", sans-serif;
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
