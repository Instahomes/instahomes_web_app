import styled from "styled-components";

export const DevelopmentPage = styled.main`
  background: ${({ theme }) => theme.colors.mainBg};

  label {
    font-size: 0.9em;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 700;
    text-transform: uppercase;
    color: #939393;
  }

  p {
    font-size: 1.1em;
    font-family: "Rubik";
    font-weight: 400;
    color: ${({ theme }) => theme.colors.darkest};
  }
`;

export const Landing = styled.section`
  padding-left: var(--main-padding-x);
  padding-right: var(--main-padding-x);

  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  padding-bottom: 4em;
`;

export const DevelopmentComponent = styled.article`
  height: 100%;
  background: linear-gradient(
      360deg,
      rgba(15, 15, 17, 0.64) 22.92%,
      rgba(0, 0, 0, 0) 68.23%
    ),
    url("${({ image }) => image}");
  background-size: cover;
  border-radius: 0px 0px 26px 26px;
  filter: drop-shadow(0px 4px 50px rgba(0, 0, 0, 0.15));

  padding: 3.5em 3em;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .developer {
    color: ${({ theme }) => theme.colors.orange};
    font-size: 1em;
    font-family: "M PLUS Rounded 1c", sans-serif;
    font-weight: 700;
    text-transform: uppercase;
  }

  .name {
    color: ${({ theme }) => theme.colors.softWhite};
    font-size: 2.5em;
    font-family: "Rubik", sans-serif;
    font-weight: 500;

    margin-top: 0.2em;
  }

  .location {
    display: flex;
    align-items: center;
    gap: 0.3em;

    color: #e6edf5;
    font-size: 1.2em;
    font-family: "Rubik", sans-serif;
    font-weight: 400;
  }
`;

export const PoweredBy = styled.aside`
  font-family: "M PLUS Rounded 1c", sans-serif;
  font-weight: 700;
  font-size: 1em;
  text-transform: uppercase;

  color: #9b9b9b;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  margin-top: 3em;

  .logo {
    height: 1em;
  }
`;

export const DevelopmentFields = styled.section`
  padding-top: 2em;
  padding-bottom: 4em;
  padding: 2em calc(2em + var(--main-padding-x)) 4em
    calc(2em + var(--main-padding-x));
  display: flex;
  flex-wrap: wrap;
  gap: 2em 1em;

  & > div {
    width: 45%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-left: var(--main-padding-x);
    padding-right: var(--main-padding-x);
    gap: 1em;

    & > div {
      width: 100%;
    }
  }
`;

export const AmenitiesSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10em;

  padding-bottom: 10em;
  padding-left: var(--main-padding-x);
  padding-right: var(--main-padding-x);

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const ImageWithDesc = styled.article`
  display: flex;
  flex-direction: ${({ reverse }) => (reverse ? "row-reverse" : "row")};

  .image {
    box-sizing: border-box;
    width: 60%;
    object-fit: cover;
    border-radius: 26px;

    height: ${({ bigImage }) => (bigImage ? "500px" : "400px")};
  }

  .about {
    align-self: center;
    margin-left: ${({ reverse }) => (reverse ? "0" : "-2.5em")};
    margin-right: ${({ reverse }) => (reverse ? "-2.5em" : "0")};
    background: #ffffff;
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.1);
    border-radius: 26px;
    padding: 2.5em 2em 1.5em 2em;

    h2 {
      font-family: "Rubik";
      font-weight: 500;
      font-size: 1.7em;
      color: ${({ theme }) => theme.colors.darkest};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: ${({ bigImage }) => (bigImage ? "row" : "column")};

    .image {
      border-radius: 7px;
      width: ${({ bigImage }) => (bigImage ? "80%" : "auto")};
      height: ${({ bigImage }) => (bigImage ? "80vh" : "200px")};
      margin-left: ${({ reverse, bigImage }) =>
        bigImage ? "0" : reverse ? "var(--main-padding-x)" : "0"};
      margin-right: ${({ reverse, bigImage }) =>
        bigImage ? "0" : reverse ? "0" : "var(--main-padding-x)"};
    }

    .about {
      margin-top: ${({ bigImage }) => (bigImage ? "0" : "-5em")};

      margin-left: ${({ reverse, bigImage }) =>
        bigImage ? "-17em" : reverse ? "0" : "3em"};
      margin-right: ${({ reverse }) => (reverse ? "3em" : "0")};
    }
  }
`;

export const MapSection = styled.section`
  padding: 0 var(--main-padding-x) 10em var(--main-padding-x);

  .map {
    width: 100%;
    height: 450px;
    object-fit: cover;
    margin-bottom: 2em;
  }

  .details {
    padding-left: 2em;
    padding-right: 2em;
  }
`;

export const DevListings = styled.section`
  background: #f1f1f1;
  padding: 6em 0;

  .title {
    padding: 0 var(--main-padding-x);
    color: ${({ theme }) => theme.colors.darkest};
  }

  .listing-row-div {
    padding-left: var(--main-padding-x);
    padding-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    .listing-row-div {
      padding-right: var(--main-padding-x);
    }
  }
`;

export const ListingRow = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  overflow-x: scroll;
  padding: 5px;

  display: flex;
  justify-content: flex-start;
  gap: 1em;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    padding: 10px;
    overflow-x: scroll;
  }
`;
