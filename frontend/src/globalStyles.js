import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    mainBg: "#F6F6F6",
    darkBlue: "#2D4059",
    mutedBlue: "#879EBB",
    navColor: "#476891",
    whiteHeader: "#F7F7F7",
    whiteBody: "#BACCE2",
    darkHeader: "#3F526A",
    darkBody: "#476891",
    signupHeader: "#DDEBFD",
    signupBg: "#36485F",
    signupInputBg: " #41546C",
    mainBgColor: " #FDFDFD",
    listingInputBg: " #F8F8F8",
    listingInputBorder: " #EAEAEA",
    listingInputColor: " #BDBDBD",
    listingBtn: "#FF6700",
  },
  padding: {
    mainPaddingX: window.innerWidth > 768 ? "6.5rem" : "1.5rem",
    mainPaddingY: window.innerWidth > 768 ? "10rem" : "2rem",
  },
};

export const GlobalStyle = createGlobalStyle`
  :root {
    --main-padding-x: 6.5rem;
    --main-padding-y: 10rem;
  }

  @media (max-width: 768px) {
    :root {
      --main-padding-x: 1.5rem;
      --main-padding-y: 2rem;
    }
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
  }

  @media (max-width: 768px) {
    body {
      font-size: 14px;
    }
  }

  @media (max-width: 425px) {
    body {
      font-size: 10px;
    }
  }

  h1 {
    font-size: 2.25em;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: bold;
  }

  p, li, span {
    font-size: 1.125em;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
  }

  li {
    margin-bottom: 0.7rem;
  }

  .btn-rubik {
    font-family: 'Rubik', sans-serif;
  }
`;
