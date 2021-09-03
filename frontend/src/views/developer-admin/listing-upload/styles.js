import styled from "styled-components";
import Switch from "react-switch";

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

export const SwitchComponent = ({ checked, handleChange }) => (
  <Switch
    checked={checked}
    onChange={handleChange}
    onColor="#2DAA0D"
    onHandleColor="#77E25C"
    uncheckedIcon={false}
    checkedIcon={false}
  />
);
