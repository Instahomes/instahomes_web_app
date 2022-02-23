import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import {
  OrangeButton,
  OutlineButton,
} from "../../../components/developer-admin/base/styles";
import { Body, DialogTitle } from "./styles";

const ConfirmationModal = ({
  open,
  setOpen,
  title,
  content,
  confirmText,
  formName,
  onClick,
}) => {
  const handleClose = () => {
    if (onClick) onClick();
    setOpen(false);
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle handleClose={handleClose}>{title}</DialogTitle>
      <DialogContent>
        <Body>{content}</Body>
      </DialogContent>
      <DialogActions>
        <OrangeButton form={formName} type="submit" onClick={handleClose}>
          {confirmText}
        </OrangeButton>
        <OutlineButton onClick={handleClose}>Cancel</OutlineButton>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmationModal;
