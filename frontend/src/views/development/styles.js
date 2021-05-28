import styled from "styled-components";
import alveoProperty from "../../assets/development/alveoProperty.jpeg";

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
  justify-content: ${({ threeOrLess }) =>
    threeOrLess ? "center" : "space-between"};
  overflow-x: scroll;
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
