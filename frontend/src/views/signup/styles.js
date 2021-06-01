import styled from "styled-components";
import {
  LightInput,
  OrangeButton,
  OutlineButton,
} from "../../components/elements";

export const HeroFrame = styled.section`
  width: 100%;
  padding-top: 4em;
  background: url(${({ heroBg }) => heroBg});
  background-size: cover;
`;

export const HeroContent = styled.div`
  padding: 4em var(--main-padding-x);
  display: flex;

  & > * {
    width: 50%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    #empty-div {
      display: none;
    }

    & > * {
      width: 100%;
    }
  }
`;

export const SignupForm = styled.div`
  background: ${({ theme }) => theme.colors.softWhite};
  box-shadow: 0px 4px 28px rgba(0, 0, 0, 0.1);
  border-radius: 9px;
  box-sizing: border-box;

  padding: 2.5em 3.5em;

  h2 {
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  p,
  label {
    color: ${({ theme }) => theme.colors.darkHeader};
  }

  .terms-checkbox {
    font-size: 0.9em;
    display: flex;
    align-items: center;

    input {
      margin-right: 10px;
    }
  }
`;

export const SignupInput = styled(LightInput)`
  background: #f3f4f4;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 2px;
  width: 100%;
  margin-bottom: 1em;
`;

export const SignupButtonsDiv = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 1.5em;
`;

export const SignupButton = styled(OrangeButton)`
  font-size: 1em;
  padding: 0.5em 2em;
`;

export const LoginButton = styled(OutlineButton)`
  font-size: 1em;
  padding: 0.5em 2em;
`;
