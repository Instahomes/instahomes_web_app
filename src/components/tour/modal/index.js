import React from "react";
import DialogContent from "@material-ui/core/DialogContent";
import {
  Body,
  Dialog,
  DialogTitle,
  DialogActions,
  BackToHomeButton,
} from "./styles";
import logo from "../../../assets/navbar/largeLogoDark.svg";
import { useHistory } from "react-router-dom";

const ConfirmationModal = ({ open, setOpen, datetime, developer }) => {
  const history = useHistory();

  const handleClose = () => {
    setOpen(false);
  };

  const backToHome = () => {
    handleClose();
    history.push("/");
  };

  return (
    <Dialog open={open}>
      <DialogTitle>Your video call is booked</DialogTitle>
      <DialogContent>
        <Body>
          We’ve added <span className="strong">{datetime}</span> to your Google
          calendar. {developer} will reach out to you for the rest of the call
          details.
        </Body>
      </DialogContent>
      <DialogActions>
        <BackToHomeButton onClick={backToHome}>BACK TO HOME</BackToHomeButton>
        <img onClick={backToHome} src={logo} alt="Instahomes" />
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;
