import { createGlobalStyle } from "styled-components";

export const breakpoints = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

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
    darkHeader: "#3F526A",
    darkBody: "#476891",
    whiteInputBg: " #F8F8F8",
    whiteInputBorder: "#EAEAEA",
    whiteInputColor: "#BDBDBD",
    signupBg: "#36485F",
    signupInputBg: " #41546C",
    mutedGray: "#E0E0E0",
  },
};

export const GlobalStyle = createGlobalStyle`
  :root {
    --main-padding-x: 8.5rem;
    --main-padding-y: 10rem;
  }

  @media (max-width: ${breakpoints.md}px) {
    :root {
      --main-padding-x: 1.5rem;
      --main-padding-y: 2rem;
    }
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
    font-size: 16px;
  }

  @media (max-width: ${breakpoints.md}px) {
    body {
      font-size: 14px;
    }
  }

  @media (max-width: ${breakpoints.sm}px) {
    body {
      font-size: 10px;
    }
  }

  h1, h2, h3, h4 {
    font-size: 2em;
    font-family: 'M PLUS Rounded 1c', sans-serif;
    font-weight: bold;
    margin: 0;
    color: ${theme.colors.lightBlue};
  }

  .dark {
    color: ${theme.colors.darkHeader};
  }

  .body-dark {
    color: ${theme.colors.darkBody};
  }

  .dark-blue {
    color: ${theme.colors.darkBlue};
  }

  .center {
    text-align: center;
  }
  
  p, li, span, input, textarea, ul {
    font-size: 1.125em;
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
  }

  p, li {
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
