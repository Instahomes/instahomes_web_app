import styled from "styled-components";
import hero from "../../assets/developer/hero.png";

export const DeveloperContainer = styled.main`
  .h2 {
    font-size: 1.5em;
    margin-bottom: 1em;
    color: ${({ theme }) => theme.colors.darkHeader};
  }

  .h3 {
    font-size: 1.1em;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.darkBlue};
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
  height: 500px;
  background: linear-gradient(
      180deg,
      rgba(12, 20, 31, 0.62) 0%,
      rgba(28, 55, 90, 0) 116.2%
    ),
    url(${hero}), #0c121b;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    height: 500px;
  }
`;

export const HeroContent = styled.div`
  width: 50%;
  margin: auto;
  text-align: center;
  padding: 10em 0;

  h1 {
    color: ${({ theme }) => theme.colors.lightGray};
    font-size: 2.5em;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 0.6em;
      height: 0.6em;
      margin-top: 4px;
    }
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

export const MetadataLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2em;
  width: 60%;
  margin: auto;
  margin-top: 2em;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
  }
`;

export const MetadataNumber = styled.div`
  font-size: 1em;
  font-weight: 500;
  margin-bottom: 5px;
  text-align: center;
  color: ${({ theme }) => theme.colors.mutedGray};
`;

export const MetadataProperty = styled.div`
  font-size: 0.9em;
  text-align: center;
  color: ${({ theme }) => theme.colors.mutedGray};
`;

export const Developments = styled.div`
  padding: 2em 0 2em var(--main-padding-x);

  .dev-row {
    display: flex;
    overflow: auto;
    gap: 2em;
  }
`;

export const CardFrame = styled.div`
  background: linear-gradient(
      180deg,
      rgba(15, 15, 17, 0.64) 22.92%,
      rgba(0, 0, 0, 0) 68.23%
    ),
    url(${({ background }) => background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  min-width: 400px;
  height: 250px;
  border-radius: 10px;

  padding: 2em;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  .dev-type {
    color: ${({ theme }) => theme.colors.orange};
    font-size: 0.6em;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: -5px;
  }

  .dev-name {
    color: ${({ theme }) => theme.colors.softWhite};
    font-size: 1.35em;
    font-weight: 500;
  }

  .dev-location {
    color: ${({ theme }) => theme.colors.softWhite};
    display: flex;
    align-items: center;
    font-size: 1em;
    margin-bottom: 4px;
  }

  .dev-price {
    font-size: 0.6em;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.mutedBlue};
  }
`;

export const About = styled.section`
  padding: 3em var(--main-padding-x);

  .about-body {
    display: flex;
    gap: 4em;

    & > div {
      width: 50%;
    }
  }
`;

export const Affiliates = styled.section`
  padding: 3em var(--main-padding-x);
  margin-bottom: 1em;

  .affiliates-logos {
    display: flex;
    justify-content: space-between;
    gap: 3em;

    img {
      max-width: 30%;
    }
  }
`;

export const OfficeLocations = styled.section`
  padding: 3em var(--main-padding-x);
  display: flex;
  gap: 3em;

  & > * {
    width: 50%;
  }

  .office-map {
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
