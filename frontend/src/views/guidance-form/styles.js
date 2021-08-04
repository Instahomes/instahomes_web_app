import styled from "styled-components";
import { Form } from "formik";
import { OrangeButton, OutlineButton, Input } from "../../components/elements";

export const GuidanceContainer = styled.section`
  width: 100%;
  padding: 5em var(--main-padding-x);
  background: url(${({ heroBg }) => heroBg});
  background-size: cover;
  box-sizing: border-box;
`;

export const GuidanceForm = styled(Form)`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 95vh;
  background-color: ${({ theme }) => theme.colors.softWhite};
  box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.1);
  border-radius: 9px;
  padding: 2em;
  margin: auto;

  h1 {
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  .subheader {
    color: ${({ theme }) => theme.colors.darkHeader};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    // width: 90%;
    height: 90vh;
    padding: 1.5em;

    h1 {
      font-size: 1.5em;
    }

    .subheader {
      font-size: 1em;
    }
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

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 75%;
    bottom: 2em;
  }
`;

export const ProgressBar = styled.div`
  width: 300px;
  margin: auto;
  display: flex;
  justify-content: space-evenly;

  & > svg {
    width: 0.5em;
    height: 0.5em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: auto;
  }
`;

export const ButtonsDiv = styled.div`
  padding-top: 1.5em;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 300px;
  margin-top: auto;
  ${({ hasNoProgressBar }) => !hasNoProgressBar && "margin-bottom: 2em;"}

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    max-width: 90%;
  }
`;

export const GuidanceInput = styled(Input).attrs(({ type }) => ({
  type: type || "text",
}))`
  background: #f3f4f4;
  border: 1px solid ${({ theme }) => theme.colors.whiteInputColor};
  border-radius: 2px;
  font-size: 1em;
  color: ${({ theme }) => theme.colors.darkGray};
  flex: 1;

  &::placeholder {
    color: ${({ theme }) => theme.colors.whiteInputColor};
  }
`;

export const GuidanceTextarea = styled.textarea`
  display: block;
  background-color: #f3f4f4;
  border: 1px solid ${({ theme }) => theme.colors.whiteInputColor};
  color: ${({ theme }) => theme.colors.darkGray};
  border-radius: 4px;
  font-size: 1em;
  padding: 1em;
  resize: none;
  height: 100px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.whiteInputColor};
  }
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
  width: ${({ width }) => width || "300px"};
  ${({ hasInputs }) => hasInputs && "gap: 1em;"}
  margin: auto;
  margin-top: 1em;
  margin-bottom: 2em;

  // text-align: center;
  // display: grid;
  // grid-template-columns: repeat(2, 1fr);
  // gap: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    ${({ mobileWidth }) => mobileWidth && `width: ${mobileWidth};`};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    justify-content: flex-start;
    overflow-y: scroll;
  }
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
