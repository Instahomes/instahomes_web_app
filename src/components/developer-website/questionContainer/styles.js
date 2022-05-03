import styled from "styled-components";

export const MainHeader = styled.div`
  width: 38.813rem;
  height: 23.376rem;
  margin-left: 3.813rem;
  margin-top: 6rem;

  .header {
    font-family: "Rubik";
    margin-top: 0.1696rem;
    color: ${({theme}) => theme.colors.darkest};
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
    margin-top: 2.333rem;
    border-top: 0rem;
    border-right: 0rem;
    border-left: 0rem;
    display: flex;
    color: #426799;
    align-items: center;
    background-color: ${({theme}) => theme.colors.mainBg};
    letter-spacing: 0.025rem;
  }
`;

export const OrangeButton = styled.button.attrs(({ type }) => ({
  type: type || "submit",
}))`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.844rem 5.938rem;
  margin-top: 3.625rem;
  font-size: 2em;
  background: ${({ theme }) => theme.colors.orange};
  border-radius: 0.313rem;
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.softWhite};
`;

export const OutlineButton = styled(OrangeButton)`
  background-color: inherit;
  color: ${({ theme }) => theme.colors.darkHeader};
  border: 1px solid ${({ theme }) => theme.colors.darkHeader};
`;
