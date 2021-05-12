import styled from "styled-components";
import alveoProperty from "../../assets/development/alveoProperty.jpeg";
import { OrangeButton } from "../../components/elements";

export const DevelopmentContainer = styled.main`
  .h2 {
    font-size: 1.5em;
    margin-bottom: 1em;
    color: ${({ theme }) => theme.colors.darkHeader};
  }

  .span {
    font-size: 1.05em;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  .p {
    font-size: 1em;
    color: ${({ theme }) => theme.colors.darkHeader};
  }
`;

export const HeroSection = styled.section`
  height: 600px;
  background: linear-gradient(
      180deg,
      rgba(12, 20, 31, 0.62) 0%,
      rgba(28, 55, 90, 0) 116.2%
    ),
    url(${alveoProperty}), #0d1115;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 500px;
  }
`;

export const HeroContent = styled.div`
  width: 40%;
  margin: auto;
  text-align: center;
  padding: 10em 0;

  h1 {
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: 2.5em;
  }

  span,
  p {
    color: ${({ theme }) => theme.colors.mutedGray};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: auto;
    padding: 0 var(--main-padding-x);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const ListingRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em;
  gap: 10px;
  margin-top: -8em;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    overflow: auto;
    margin-top: 0;
    padding: 2em var(--main-padding-x);
  }
`;

export const About = styled.section`
  padding: 3em var(--main-padding-x);
  display: flex;
  gap: 3em;

  & > * {
    width: 50%;
  }

  .about-map {
    background: url(${({ backgroundImage }) => backgroundImage});
    background-size: cover;
    border-radius: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: center;
    padding-bottom: 0;

    .about-map {
      display: none;
    }

    & > * {
      width: 100%;
    }
  }
`;

export const Amenities = styled.section`
  padding: 3em var(--main-padding-x);

  & > div {
    display: flex;
    gap: 2em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: center;

    & > div {
      flex-direction: column;
    }
  }
`;

export const AmenitiesCard = styled.div`
  .amenities-img {
    background: url(${({ image }) => image});
    background-size: cover;
    border-radius: 10px;
    height: 200px;
    margin-bottom: 1em;
  }

  p {
    margin-top: 0.5em;
  }
`;

export const ContactComponent = styled.div`
  text-align: center;
  background: #fbfbfb;
  border-radius: 46px;

  padding: 2em 3em;
  width: 50%;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    box-sizing: border-box;
    width: 100%;
  }
`;

export const InquiryButtons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1em;

  button:nth-child(1) {
    margin-right: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const InquiryButtonsChild = styled(OrangeButton)`
  font-size: 0.9em;
  padding: 0.6em 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    margin-bottom: 5px;
  }
`;

export const ButtonIcon = styled.img`
  margin-right: 10px;
`;

export const Footnotes = styled.div`
  margin-top: 1.5em;
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.whiteInputColor};
`;

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
