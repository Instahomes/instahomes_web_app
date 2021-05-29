import React from "react";
import arrow from "../../assets/search/arrow.svg";
import arrowUp from "../../assets/search/arrowUp.svg";
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
  color: ${({ theme, isDefault }) =>
    isDefault ? theme.colors.whiteInputColor : theme.colors.darkHeader};
  border-radius: 4px;
  font-size: ${({ scale }) => (scale ? `calc(1em * ${scale})` : "1em")};
  padding: 1em;
  margin-bottom: ${({ marginBottom }) => marginBottom};
  order: ${({ order }) => order || "initial"};

  &::placeholder {
    color: ${({ theme }) => theme.colors.whiteInputColor};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: ${({ mobileOrder }) => mobileOrder || "initial"};
  }
`;

export const GrayInput = styled(LightInput)`
  background-color: ${({ theme }) => theme.colors.lightGray};
  border: 1px solid ${({ theme }) => theme.colors.mutedGray};
  color: ${({ theme, isDefault }) =>
    isDefault ? theme.colors.whiteInputColor : theme.colors.darkHeader};
  font-size: ${({ scale }) => (scale ? `calc(1em * ${scale})` : "1em")};
  margin-bottom: ${({ marginBottom }) => marginBottom};

  &::placeholder {
    color: ${({ theme }) => theme.colors.whiteInputColor};
  }
`;

export const WhiteInput = styled(LightInput)`
  background-color: ${({ theme }) => theme.colors.mainBg};
  border: 1px solid ${({ theme }) => theme.colors.whiteInputColor};
  color: ${({ theme, isDefault }) =>
    isDefault ? theme.colors.darkGray : theme.colors.darkHeader};
  margin-bottom: ${({ marginBottom }) => marginBottom};

  &::placeholder {
    color: ${({ theme }) => theme.colors.darkGray};
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
  background-color: ${({ theme, disabled }) =>
    disabled ? "#2C3A4D" : theme.colors.orange};
  color: ${({ theme, disabled }) =>
    disabled ? theme.colors.mutedBlue : theme.colors.softWhite};
  padding: 0.8em 1em;
  font-size: 0.8em;
`;

export const OutlineButton = styled.button`
  font-size: ${({ scale, fontSize }) =>
    scale ? `calc(1em * ${scale})` : fontSize || "1rem"};
  font-weight: 500;
  color: ${({ theme, dark }) =>
    dark ? theme.colors.mutedGray : theme.colors.darkBlue};
  padding: 0.5em 1.5em;
  background-color: initial;
  border: 1px solid
    ${({ theme, dark }) =>
      dark ? theme.colors.mutedGray : theme.colors.darkBlue};
  border-radius: 1px;
`;

const AdvancedSettingsStyle = styled.span`
  cursor: pointer;
  font-size: 0.75em;
  color: ${({ theme }) => theme.colors.darkBlue};
`;

export const AdvancedSettings = ({ setShowAdvanced, showAdvanced }) => (
  <AdvancedSettingsStyle onClick={() => setShowAdvanced(!showAdvanced)}>
    {showAdvanced ? (
      <React.Fragment>
        <img src={arrowUp} />
        &nbsp;&nbsp; Minimize Advanced Settings
      </React.Fragment>
    ) : (
      <React.Fragment>
        <img src={arrow} />
        &nbsp;&nbsp; Show Advanced Settings
      </React.Fragment>
    )}
  </AdvancedSettingsStyle>
);
