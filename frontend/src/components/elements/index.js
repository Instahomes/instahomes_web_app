import styled from "styled-components";

export const Input = styled.input`
  background-color: ${({ theme }) => theme.colors.inputBlue};
  border: 1px solid ${({ theme }) => theme.colors.mutedBlue};
  border-radius: 2px;
  font-size: 0.8em;
  padding: 0.8em 2em;
  color: ${({ theme }) => theme.colors.mutedBlue};

  &::placeholder {
    color: ${({ theme }) => theme.colors.mutedBlue};
  }
`;

export const LightInput = styled.input`
  display: block;
  background-color: ${({ theme }) => theme.colors.whiteInputBg};
  border: 1px solid ${({ theme }) => theme.colors.whiteInputBorder};
  color: ${({ theme }) => theme.colors.darkHeader};
  border-radius: 4px;
  font-size: 1em;
  padding: 1em;
  margin-bottom: ${({ marginBottom }) => marginBottom};

  &::placeholder {
    color: ${({ theme }) => theme.colors.whiteInputColor};
  }
`;

export const LightTextarea = styled.textarea`
  display: block;
  background-color: ${({ theme }) => theme.colors.whiteInputBg};
  border: 1px solid ${({ theme }) => theme.colors.whiteInputBorder};
  color: ${({ theme }) => theme.colors.darkHeader};
  border-radius: 4px;
  font-size: 1em;
  padding: 1em;
  resize: none;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  height: 80px;

  &::placeholder {
    color: ${({ theme }) => theme.colors.whiteInputColor};
  }
`;

export const OrangeButton = styled.button`
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.softWhite};
  padding: 0.8em 1em;
  font-size: 0.8em;
`;

export const OutlineButton = styled.button`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkBlue};
  padding: 0.5em 1.5em;
  background-color: initial;
  border: 1px solid ${({ theme }) => theme.colors.darkBlue};
  border-radius: 1px;
`;
