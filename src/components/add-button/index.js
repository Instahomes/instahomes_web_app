import React from "react";
import {
  ButtonCard,
  ButtonInfo,
  ButtonCardGrey,
  ButtonInfoGrey,
} from "./styles";
import IconPlus from "../../assets/add-button/iconPlus.svg";
import { GlobalStyle } from "../../globalStyles";

const AddButton = ({ title, description, link, state }) => {
  if (state === false) {
    return (
      <>
        <GlobalStyle />
        <ButtonCardGrey>
          <ButtonInfoGrey>
            <info>{title}</info>
            <para>{description}</para>
          </ButtonInfoGrey>
        </ButtonCardGrey>
      </>
    );
  } else if (state === true) {
    return (
      <>
        <GlobalStyle />
        <ButtonCard>
          <ButtonInfo>
            <img src={IconPlus} alt="Instahomes" />
            <info>{title}</info>
            <para>{description}</para>
          </ButtonInfo>
        </ButtonCard>
      </>
    );
  } else {
    console.log("AddButton: state is not boolean");
  }
};

export default AddButton;
