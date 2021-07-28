import styled from "styled-components";
import { Form } from "formik";
import { OrangeButton, OutlineButton } from "../../components/elements";

export const GuidanceContainer = styled.section`
  // height: 550px;
  width: 100%;
  padding: 5em var(--main-padding-x);
  background: url(${({ heroBg }) => heroBg});
  background-size: cover;
  box-sizing: border-box;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    // height: ${({ showAdvanced }) => (showAdvanced ? "750px" : "460px")};
  }
`;

export const GuidanceForm = styled(Form)`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.softWhite};
  box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.1);
  border-radius: 9px;
  padding: 3em 3em;
  margin: auto;

  h1 {
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  .subheader {
    color: ${({ theme }) => theme.colors.darkHeader};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 70%;
  }
`;

export const BackButton = styled.div`
  font-size: 0.8em;
  cursor: pointer;
  margin-top: 10px;

  span {
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.softWhite};
  }
`;

export const ProgressBarContainer = styled.div`
  position: absolute;
  bottom: 3em;
  width: 90%;
`;

export const ProgressBar = styled.div`
  width: 300px;
  margin: auto;
  display: flex;
  justify-content: space-evenly;

  & > img {
    width: 0.5em;
    height: 0.5em;
  }
`;

export const ButtonsDiv = styled.div`
  padding-top: 1.5em;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  margin-top: auto;
  margin-bottom: 2em;
`;

export const SubmitOrangeButton = styled(OrangeButton).attrs(
  ({ type, disabled }) => ({
    type: type || "button",
    disabled,
  })
)`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.whiteInputColor : theme.colors.orange};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.lightGray : theme.colors.softWhite};
  font-size: 0.9em;
  padding: 0.7em 1.5em;
`;

export const SecondaryButton = styled(OutlineButton).attrs(({ type }) => ({
  type: type || "button",
}))`
  font-size: 0.9em;
  padding: 0.7em 1.5em;
  color: ${({ theme }) => theme.colors.darkBlue};
  border: none;
`;

export const CheckboxGroup = styled.div`
  margin-top: 2em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  margin: auto;
  margin-top: 1em;
  margin-bottom: 2em;

  // text-align: center;
  // display: grid;
  // grid-template-columns: repeat(2, 1fr);
  // gap: 10px;
`;

export const CheckboxLabel = styled.label`
  ${({ isChecked, theme }) =>
    isChecked &&
    `background: #253243;
    border: 1px solid ${theme.colors.mutedBlue};
    border-radius: 7px;`}

  padding: 0.3em 1em;

  span {
    margin-left: 8px;
    color: ${({ theme }) => theme.colors.darkHeader};
  }
`;
