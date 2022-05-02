import React from "react";
import { ButtonCard, ButtonInfo } from "./styles";
import IconPlus from "../../assets/add-button/iconPlus.svg";

const AddButton = ({ title, description, link, isDisabled }) => {
  return (
    <ButtonCard>
      <ButtonInfo>
        <info>
          <img src={IconPlus} alt="Instahomes" />
          {title}
        </info>
        <para>{description}</para>
      </ButtonInfo>
    </ButtonCard>
  );
};

export default AddButton;
