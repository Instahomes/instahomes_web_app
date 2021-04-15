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

export const OrangeButton = styled.button`
  background-color: ${({ theme }) => theme.colors.orange};
  color: ${({ theme }) => theme.colors.softWhite};
  padding: 0.8em 1em;
  font-size: 0.8em;
`;
