import React from "react";
import arrow from "../../assets/search/arrow.svg";
import arrowUp from "../../assets/search/arrowUp.svg";
import styled, { withTheme } from "styled-components";
import { ErrorMessage } from "formik";
import Select from "react-select";
import AsyncSelect from "react-select/async";

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
  background: ${({ theme }) => theme.colors.lightGray}${({ dark }) => dark && "26"};
  border: 1px solid
    ${({ theme, dark }) => (dark ? "#ecedef42" : theme.colors.mutedGray)};
  color: ${({ theme, isDefault, dark }) =>
    isDefault || dark ? theme.colors.whiteInputColor : theme.colors.darkHeader};
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
    dark ? theme.colors.softWhite : theme.colors.darkBlue};
  padding: 0.5em 1.5em;
  background-color: initial;
  border: 1px solid
    ${({ theme, dark }) =>
      dark ? theme.colors.softWhite : theme.colors.darkBlue};
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

export const FormErrorMessage = styled(ErrorMessage)`
  padding: 10px 20px;
  background: #fff1f1;
  border: 1px solid #9e0f0f;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 0.9em;
  color: #9e0f0f !important;
`;

export const FormWarningMessage = styled(FormErrorMessage)`
  background: #fffcf1;
  border: 1px solid #b88840;
  color: #926624 !important;
`;

const MobileSelect = styled(Select)`
  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    order: ${({ mobileOrder }) => mobileOrder || "initial"};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    &.flex-grow-mobile {
      flex: 1;
    }
  }
`;

export const SearchSelect = withTheme(
  ({
    isAsync,
    isGray,
    fieldName,
    options,
    placeholder,
    mobileOrder,
    theme,
    formik,
    className,
    asyncLoadOptions,
    containerStyle,
  }) => {
    const customStyles = {
      container: (provided) => ({
        ...provided,
        ...containerStyle,
      }),
      control: (provided) => ({
        ...provided,
        backgroundColor: isGray
          ? theme.colors.lightGray
          : theme.colors.whiteInputBg,
        border: `1px solid ${
          isGray ? theme.colors.mutedGray : theme.colors.whiteInputColor
        }`,
        borderRadius: "4px",
        fontFamily: "'Rubik', sans-serif",
        fontSize: "0.9em",
        height: "100%",
        minWidth: "120px",
      }),
      valueContainer: (provided) => ({
        ...provided,
        padding: "0.8em",
      }),
      placeholder: () => ({
        color: theme.colors.whiteInputColor,
      }),
      singleValue: (styles, { data }) => ({
        ...styles,
        color:
          data.value == ""
            ? theme.colors.whiteInputColor
            : isGray
            ? theme.colors.darkHeader
            : theme.colors.darkHeader,
      }),
      option: (styles, { data }) => ({
        ...styles,
        color:
          data.value == ""
            ? theme.colors.whiteInputColor
            : theme.colors.darkHeader,
        fontSize: "0.8em",
      }),
      indicatorSeparator: () => {},
    };

    return (
      <MobileSelect
        as={isAsync ? AsyncSelect : Select}
        cacheOptions
        loadOptions={asyncLoadOptions}
        defaultOptions
        styles={customStyles}
        options={options}
        placeholder={placeholder}
        name={fieldName}
        onChange={(option) =>
          formik.handleChange
            ? formik.handleChange(option)
            : formik.setFieldValue(fieldName, option.value)
        }
        onBlur={formik.handleBlur}
        value={
          options
            ? options.find(
                (option) => option.value === formik.values[fieldName]
              )
            : formik.getValue
            ? formik.getValue()
            : ""
        }
        mobileOrder={mobileOrder || null}
        className={`flex-grow-mobile ${className || ""}`}
      />
    );
  }
);
