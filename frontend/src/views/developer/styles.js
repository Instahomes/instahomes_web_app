import styled from "styled-components";

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
  position: relative;

  .hero-gradient {
    z-index: 3;
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(12, 19, 29, 0.62) 0%,
      rgba(28, 55, 90, 0) 116.2%
    );
  }

  .hero-image {
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    opacity: 0.4;
    background: url(${(image) => image});
    background-size: cover;
    background-repeat: no-repeat;
  }

  .hero-black {
    z-index: 1;
    position: absolute;
    width: 100%;
    height: 100%;
    background: #0c121b;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: auto;
    // padding: 0 var(--main-padding-x);
    display: flex;
    flex-direction: column;
    justify-content: center;
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
    display: flex;
    flex-direction: column;
    justify-content: center;

    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0;

    h1 {
      display: block;
    }
  }
`;

export const MetadataLine = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 2em;
  width: 60%;
  margin: auto;
  margin-top: 2em;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 2em;
    width: 100%;
    margin: 0;
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
  a {
    text-decoration: none;
  }

  .dev-row {
    display: flex;
    overflow: auto;
    gap: 2em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-right: var(--main-padding-x);
  }
`;

export const CardFrame = styled.div`
  background: linear-gradient(
      360deg,
      rgba(15, 15, 17, 0.64) 22.92%,
      rgba(0, 0, 0, 0) 68.23%
    ),
    url(${({ background }) => background});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  min-width: 400px;
  max-width: 400px;
  height: 250px;
  border-radius: 10px;

  padding: 2em;

  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  & > div {
    width: 50%;
  }

  .dev-type {
    color: ${({ theme }) => theme.colors.orange};
    font-size: 0.6em;
    font-weight: 600;
    text-transform: uppercase;
    margin-bottom: -0.5em;
  }

  .dev-name {
    color: ${({ theme }) => theme.colors.softWhite};
    font-size: 1.35em;
    font-weight: 500;
  }

  .dev-location {
    span {
      color: ${({ theme }) => theme.colors.softWhite};
      font-size: 0.9em;
    }

    // display: flex;
    // align-items: center;
    margin-bottom: 0.1em;
    text-align: right;
  }

  .dev-price {
    font-size: 0.6em;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.mutedBlue};
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    box-sizing: border-box;
    min-width: 350px;
    max-width: 350px;
    padding: 1em;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: center;
    padding-bottom: 0;

    .about-body {
      flex-direction: column;
      gap: 2em;

      & > div {
        width: 100%;
      }
    }
  }
`;

export const Affiliates = styled.section`
  padding: 3em var(--main-padding-x);
  margin-bottom: 1em;

  .affiliates-logos {
    display: flex;
    // flex-wrap: wrap;
    justify-content: space-between;
    gap: 1em;

    .indiv-logo {
      max-height: 200px;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        max-width: 100%;
        // max-width: 30%;
        // height: 100%;
        object-fit: cover;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: center;

    .affiliates-logos {
      // flex-wrap: wrap;
      justify-content: center;
      gap: 1.5em;

      img {
        max-width: 20%;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    .affiliates-logos {
      flex-wrap: wrap;

      .indiv-logo {
        max-height: 150px;
        img {
          max-height: 100%;
          max-width: 100%;
        }
      }
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

  p {
    white-space: pre-line;
  }

  .office-map,
  .office-map-mobile {
    background: url(${({ backgroundImage }) => backgroundImage});
    background-size: cover;
    border-radius: 10px;
  }

  .office-map-mobile {
    display: none;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: center;
    flex-direction: column;
    padding-bottom: 0;

    .office-map {
      display: none;
    }

    .office-map-mobile {
      display: block;
      height: 150px;
      margin-bottom: 1.5em;
    }

    & > * {
      width: 100%;
    }
  }
`;
