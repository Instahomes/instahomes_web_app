import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    mainBgColor: "#FDFDFD",
    mainBg: "#F6F6F6",
    darkBlue: "#2D4059",
    mutedBlue: "#879EBB",
    lightBlue: "#DDEBFD",
    mutedLightBlue: "#BACCE2",
    inputBlue: "#50637B",
    orange: "#FF6700",
    softWhite: "#F7F7F7",
    navColor: "#476891",
    darkHeader: "#3F526A",
    darkBody: "#476891",
    signupBg: "#36485F",
    signupInputBg: " #41546C",
    listingInputBg: " #F8F8F8",
    listingInputBorder: " #EAEAEA",
    listingInputColor: " #BDBDBD",
  },
  padding: {
    mainPaddingX: window.innerWidth > 768 ? "8.5rem" : "1.5rem",
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
    font-size: 2em;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: bold;
    margin: 0;
    color: ${theme.colors.lightBlue};
  }

  h1.dark {
    color: ${theme.colors.darkHeader};
  }

  .center {
    text-align: center;
  }
  
  p, li, span, input {
    font-size: 1.125em;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
  }

  p {
    color: ${theme.colors.mutedLightBlue};
    font-size: 1em;
    line-height: 155%;
  }

  li {
    margin-bottom: 0.7rem;
  }

  button {
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: bold;
    border: none;
  }

  .btn-rubik {
    font-family: 'Rubik', sans-serif;
  }
`;
