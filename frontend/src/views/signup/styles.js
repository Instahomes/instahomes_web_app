import styled from "styled-components";
import { LightInput, OrangeButton } from "../../components/elements";

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
    margin-bottom: 0.5em;
  }

  p {
    color: ${({ theme }) => theme.colors.darkHeader};
  }

  .small-span {
    font-size: 0.9em;
    color: ${({ theme }) => theme.colors.darkHeader};
    cursor: pointer;
  }

  .terms-checkbox {
    display: flex;
    align-items: center;

    input {
      margin-right: 10px;
    }
  }
`;

export const SignupInput = styled(LightInput)`
  background: url(${({ icon }) => icon}) no-repeat scroll 13px 14px, #f3f4f4;
  // background: #F3F4F4;
  padding-left: 40px;
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 2px;
  width: 100%;
  margin-bottom: 1em;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    background: url(${({ icon }) => icon}) no-repeat scroll 13px 13px, #f3f4f4;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    background: url(${({ icon }) => icon}) no-repeat scroll 13px 10px, #f3f4f4;
  }
`;

export const SignupButtonsDiv = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 1.5em;
  margin-bottom: 1em;
`;

export const SignupButton = styled(OrangeButton)`
  font-size: 1em;
  padding: 0.5em 2em;
`;
