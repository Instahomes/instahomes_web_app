import styled from "styled-components";
import { OutlineButton, OrangeButton } from "../../components/elements";

export const TourContainer = styled.main`
  padding: 2em var(--main-padding-x) 0 var(--main-padding-x);
  padding-top: 6em;
  height: calc(100vh - 48px - 32px - 3rem);
  display: flex;
  gap: 6em;

  h1 {
    font-family: Rubik, sans-serif;
    font-size: 1.7em;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  h4 {
    text-transform: uppercase;
    font-size: 0.75em;
    color: ${({ theme }) => theme.colors.darkHeader};
    margin-top: 1em;
  }
`;

export const AlignFlexCenter = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ gap }) => gap || "1em"};
`;

export const ContentContainer = styled.div`
  padding-bottom: 2em;
  flex: 1;

  .tour-platform {
    background: #fff1e8;
    border: 1px solid ${({ theme }) => theme.colors.orange};
    border-radius: 20px;
    color: ${({ theme }) => theme.colors.orange};
    font-size: 0.8em;
    font-weight: 500;
    padding: 0.2em 1em;
  }
`;

export const ListingImageContainer = styled.div`
  border-radius: 20px;
  width: 420px;
  height: 100%;
  background: url(${({ mainImage }) => mainImage});
  background-size: cover;
`;

export const ListingInfoDiv = styled.div`
  margin: 1em 0;
  display: flex;
  gap: 2em;

  .listing-img {
    max-width: 7.5em;
    min-height: 100%;
    object-fit: cover;
    border-radius: 6px;
  }

  .listing-info {
    flex: 1;

    span {
      font-size: 1em;
      letter-spacing: 0.035em;
      color: ${({ theme }) => theme.colors.darkBlue};
      line-height: 1.6em;

      &.listing-title {
        font-weight: 500;
      }

      &.listing-location {
        font-size: 0.9em;
        color: ${({ theme }) => theme.colors.darkHeader};
      }
    }
  }
`;
