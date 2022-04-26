import styled from "styled-components";

export const MainHeader = styled.div`
  width: 38.813rem;
  height: 23.376rem;
  margin-left: 3.813rem;
  margin-top: 6rem;

  .header {
    font-family: "Rubik";
    margin-top: 0.1696rem;
    color: #1a2534;
    font-style: normal;
    font-weight: 500;
    font-size: 3.75rem;

    line-height: 4.438rem;
    display: flex;
    align-items: center;
    letter-spacing: 0.035em;
  }

  .input {
    font-family: "Rubik";
    font-style: normal;
    font-weight: 400;
    width: 34.688rem;
    font-size: 2.5rem;
    line-height: 138.5%;
    margin-top: 2rem;
    border-top: 0rem;
    border-right: 0rem;
    border-left: 0rem;
    display: flex;
    align-items: center;
    background-color: #f6f6f6;
    letter-spacing: 0.025rem;
  }
`;

export const OrangeButton = styled.button.attrs(({ type }) => ({
  type: type || "submit",
}))`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 265px;
  height: 65px;
  margin-top: 2rem;
  font-size: 2rem;

  background: #ff6700;
  border-radius: 0.313rem;
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.softWhite};
`;

export const OutlineButton = styled(OrangeButton)`
  background-color: inherit;
  color: ${({ theme }) => theme.colors.darkHeader};
  border: 1px solid ${({ theme }) => theme.colors.darkHeader};
`;
