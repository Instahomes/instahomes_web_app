import { useState, createRef, useEffect } from "react";
import styled, { withTheme } from "styled-components";
import { Form, Field } from "formik";
import { Icon } from "@iconify/react";

import Select from "react-select";
import AsyncSelect from "react-select/async";
import AsyncCreatableSelect from "react-select/async-creatable";

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
  border: 1px solid ${({ theme }) => theme.colors.whiteInputColor};
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

const ImagePickerContainer = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.whiteInputColor};
  box-sizing: border-box;
  border-radius: 6px;
  font-size: 0.8em;
  padding: 0.7em 1em;
  margin-top: 0.5em;
  height: 150px;
  position: relative;

  cursor: pointer;
`;

const ImageBg = styled.img`
  opacity: 0.6;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #828282;
`;

export const ImagePicker = ({ image, setFieldValue, fieldName, newImage }) => {
  const [currImage, setCurrImage] = useState(null);
  const fileRef = createRef();

  useEffect(() => {
    if (image) setCurrImage(image);
  }, [image]);

  useEffect(() => {
    if (newImage) setCurrImage(URL.createObjectURL(newImage));
  }, [newImage]);

  const onFileChange = (e) => {
    const newImage = e.target.files[0];
    setCurrImage(URL.createObjectURL(newImage));
    setFieldValue(fieldName, newImage);
  };

  const triggerClick = () => {
    fileRef.current.click();
  };

  return (
    <ImagePickerContainer onClick={triggerClick}>
      <ImageBg src={currImage} />
      <Content>
        <Icon
          icon={"mdi:image-edit-outline"}
          color="#828282"
          width="3em"
          height="3em"
        />
        Upload Image
        <input type="file" onChange={onFileChange} ref={fileRef} hidden />
      </Content>
    </ImagePickerContainer>
  );
};

export const FormSelect = withTheme(
  ({
    isCreatableAndAsync,
    isMulti,
    isAsync,
    fieldName,
    options,
    theme,
    formik,
    asyncLoadOptions,
  }) => {
    const customStyles = {
      control: (provided) => ({
        ...provided,
        border: `1px solid ${theme.colors.whiteInputColor}`,
        borderRadius: "6px",
        fontFamily: "'Rubik', sans-serif",
        fontSize: "1em",
        marginTop: "0.5em",
      }),
      valueContainer: (provided) => ({
        ...provided,
        padding: "0.4em 1em",
      }),
      placeholder: () => ({
        color: theme.colors.whiteInputColor,
      }),
      singleValue: (styles) => ({
        ...styles,
        color: theme.colors.darkHeader,
      }),
      option: (styles) => ({
        ...styles,
        color: theme.colors.darkHeader,
        fontSize: "0.9em",
      }),
      indicatorSeparator: () => {},
    };

    return (
      <Select
        isMulti={isMulti}
        as={
          isCreatableAndAsync
            ? AsyncCreatableSelect
            : isAsync
            ? AsyncSelect
            : Select
        }
        cacheOptions
        loadOptions={asyncLoadOptions}
        defaultOptions
        styles={customStyles}
        options={options}
        name={fieldName}
        onChange={(option) => formik.setFieldValue(fieldName, option.value)}
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
      />
    );
  }
);
