import styled from "styled-components";

export const GridPreviewButton = styled.div`
  padding: 0 1.5em;
  display: flex;
  align-items: center;
  gap: 0.8em;
  cursor: pointer;
  margin-left: auto;

  span {
    font-size: 0.9em;
    color: ${({ theme }) => theme.colors.darkHeader};
  }
`;
