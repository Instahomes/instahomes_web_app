import styled from "styled-components";
import { OrangeButton, OutlineButton } from "../../components/elements";
import { Input } from "../../components/elements";

export const Frame = styled.main`
  background: hsla(215, 33%, 15%, 0.95);
  padding: 2rem var(--main-padding-x);
  padding-top: 4rem;
  text-align: center;
  // min-height: 80vh;

  h1 {
    color: ${({ theme }) => theme.colors.lightBlue};
    // margin: auto 5rem;
  }

  p,
  span {
    color: ${({ theme }) => theme.colors.mutedLightBlue};
  }

  & > span {
    font-size: 0.9em;
  }

  img {
    margin-top: 3em;
  }
`;

export const Content = styled.div`
  // width: 80%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 500px;
`;

export const BackButton = styled.div`
  position: absolute;
  bottom: 3rem;
  left: var(--main-padding-x);
  font-size: 0.8em;
  cursor: pointer;

  span {
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.mutedBlue};
  }
`;

export const ProgressBar = styled.div`
  width: 300px;
  margin: auto;
  // margin-top: auto;
  display: flex;
  justify-content: space-evenly;

  & > img {
    width: 0.5em;
    height: 0.5em;
  }
`;

export const FormContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormDiv = styled.div`
  width: 350px;
  // min-height: 300px;
  // margin: auto;
  margin-top: 2em;
`;

export const FormFrame = styled.div`
  display: flex;
  flex-direction: column;

  align-items: stretch;
  justify-content: center;
  gap: 15px;
`;

export const FormChild = styled.div`
  position: relative;

  span {
    position: absolute;
  }
`;

export const SignupOrangeButton = styled(OrangeButton).attrs(
  ({ type, disabled }) => ({
    type: type || "button",
    disabled,
  })
)`
  font-size: 0.9em;
  padding: 0.7em 1.5em;
`;

export const SignupOutlineButton = styled(OutlineButton).attrs(({ type }) => ({
  type: type || "button",
}))`
  font-size: 0.9em;
  padding: 0.7em 1.5em;
  color: ${({ theme }) => theme.colors.mutedLightBlue};
  border: 1px solid ${({ theme }) => theme.colors.mutedLightBlue};
`;

export const SecondaryButton = styled(SignupOutlineButton).attrs(
  ({ type }) => ({
    type: type || "button",
  })
)`
  border: none;
`;

export const SignupInput = styled(Input).attrs(({ type }) => ({
  type: type || "text",
}))`
  background: rgba(148, 173, 207, 0.12);
  border: 1px solid ${({ theme }) => theme.colors.mutedLightBlue};
  border-radius: 4px;
  font-size: 1em;
  text-align: center;
  color: ${({ theme }) => theme.colors.softWhite};
  flex: 1;
`;

export const SignupInputWithHelper = styled.div`
  display: flex;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const InputHelper = styled.span`
  color: ${({ theme }) => theme.colors.mutedBlue} !important;
  position: absolute;
  right: -10.5em;
  top: 0.65em;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    position: static;
  }
`;

export const CheckboxGroup = styled.div`
  width: 70%;
  // margin: auto;
  margin-top: 2em;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  // align-items: stretch;
`;

// Obtained from: https://moderncss.dev/pure-css-custom-checkbox-style/
export const CheckboxLabel = styled.label`
  ${({ isChecked, theme }) =>
    isChecked &&
    `background: #253243;
    border: 1px solid ${theme.colors.mutedBlue};
    border-radius: 7px;`}

  padding: 0.3em 1em;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span {
    color: ${({ theme, isChecked }) =>
      isChecked ? theme.colors.mutedLightBlue : theme.colors.mutedBlue};
    font-size: 1em;
    text-align: left;
  }

  .checkbox {
    opacity: 0;
    width: 1em;
    height: 1em;
  }

  .checkbox__control {
    width: 1em;
    height: 1em;
    ${({ isChecked }) =>
      !isChecked &&
      `
    border-radius: 0.25em;
    border: 0.1em solid currentColor;`}

    svg {
      transform: scale(0);
      transform-origin: bottom left;
    }
  }

  .checkbox__input {
    display: grid;
    grid-template-areas: "checkbox";
    width: 1em;
    height: 1em;

    > * {
      grid-area: checkbox;
    }

    input {
      opacity: 0;
      width: 1em;
      height: 1em;

      &:checked + .checkbox__control svg {
        transform: scale(1.8) translate(2px, -2px);
      }
    }
  }
`;

export const ChoiceGroup = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Choice = styled.span`
  cursor: pointer;
  font-size: 1em;
  padding: 0.2em 0.5em;
  color: ${({ theme, isChecked }) =>
    isChecked
      ? theme.colors.mutedLightBlue
      : theme.colors.mutedBlue} !important;

  ${({ isChecked, theme }) =>
    isChecked &&
    `background: #253243;
    border: 1px solid ${theme.colors.mutedBlue};
    border-radius: 7px;`}
`;
