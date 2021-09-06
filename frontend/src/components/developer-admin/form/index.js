import styled from "styled-components";
import { Form, Field } from "formik";

export const FormFrame = styled(Form)`
  background: #fefefe;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  border-radius: 26px;
  padding: 2em 2.2em;
  margin-bottom: 2em;

  display: grid;
  grid-gap: 1.5em 1em;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  align-items: end;
  ${({ formGridTemplates }) => formGridTemplates || ""}
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 0.9em;
  color: #4f4f4f;
`;

export const HelperLabel = styled.span`
  font-size: 0.7em;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export const Input = styled(Field)`
  border: 1px solid #bdbdbd;
  box-sizing: border-box;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.darkHeader};
  font-size: 1em;
  padding: 0.7em 1em;
  margin-top: 0.5em;
`;

export const CheckboxGroup = styled.div`
  margin-top: 0.8em;
  font-size: 0.9em;
  color: ${({ theme }) => theme.colors.darkGray};
  display: flex;
  align-items: center;
  gap: 0.7em;
`;

export const Textarea = styled(Input)`
  resize: none;
  height: 100px;
`;
