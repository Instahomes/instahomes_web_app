import styled from "styled-components";

export const DevelopmentPage = styled.main`
  background: ${({ theme }) => theme.colors.mainBg};
  padding-left: var(--main-padding-x);
  padding-right: var(--main-padding-x);
`;

export const Landing = styled.section`
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

  padding: 2em 3em;

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
