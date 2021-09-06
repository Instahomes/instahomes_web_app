import styled from "styled-components";
import heroBg from "../../../assets/home/hero.webp";
import { Input } from "../../../components/developer-admin/form";
import { Form } from "formik";

export const Frame = styled.main`
  background-color: ${({ theme }) => theme.colors.mainBg};
  padding: 2em 2em;
  position: relative;
  display: flex;
  height: 100vh;
  box-sizing: border-box;
`;

export const Logo = styled.img`
  position: absolute;
`;

export const FormContainer = styled.div`
  flex: 1;
  padding: 0 8em;
`;

export const FormDiv = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  #dev-portal {
    background: #e6edf5;
    color: #637c9c;
    align-self: flex-start;
    padding: 0 1em;
    font-size: 0.9em;
    margin-bottom: 1em;

    border: 1px solid #879ebb;
    box-sizing: border-box;
    border-radius: 50px;
  }

  h1 {
    font-weight: 500;
    letter-spacing: 0.035em;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  p {
    font-size: 0.9em;
    color: #4f4f4f;
  }
`;

export const HouseImage = styled.div`
  background-image: url(${heroBg});
  background-size: cover;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  border-radius: 26px;
  width: 450px;
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    display: none;
  }
`;

export const FormInput = styled(Input)`
  padding: 0.8em 1em;
  &::placeholder {
    color: ${({ theme }) => theme.colors.darkGray};
  }
`;

export const UnderlinedSpan = styled.a`
  font-size: 0.9em;
  text-decoration-line: underline;
  color: #4f4f4f;
  cursor: pointer;
`;
