import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import MuiDialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogActions from "@material-ui/core/DialogActions";
import formComplete from "../../assets/form/form-complete.svg";
import { OutlineButton } from "../elements";

const styles = () => ({
  root: {
    padding: "2em 4em",
    paddingBottom: "0",
    margin: 0,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.6em",
  },
});

const actionsStyles = () => ({
  root: {
    flexDirection: "column",
    justifyContent: "center",
    gap: "3em",
    padding: "3em 3em",
    paddingTop: "0em",
  },
});

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-weight: 700;
  font-size: 2em;
  text-align: center;
  margin: 0;
`;

export const Body = styled.p`
  color: ${({ theme }) => theme.colors.darkHeader};
  font-size: 1em;
  text-align: center;
  padding: 0 3em;

  span {
    color: ${({ theme }) => theme.colors.darkHeader};
    font-size: 1em;
    font-weight: 500;
  }
`;

export const BackToHomeButton = styled(OutlineButton).attrs(({ type }) => ({
  type: type || "button",
}))`
  font-size: 0.9em;
  font-weight: 700;
  padding: 0.7em 1.5em;
  color: ${({ theme }) => theme.colors.darkHeader};
  background: ${({ theme }) => theme.colors.softWhite};
  border: 1.5px solid ${({ theme }) => theme.colors.darkHeader};
  border-radius: 1px;
  width: 300px;
`;

export const Dialog = ({ children, handleClose, ...other }) => {
  return (
    <MuiDialog
      PaperProps={{
        style: {
          background: "#F7F7F7",
          boxShadow: "0px 4px 28px rgba(0, 0, 0, 0.1)",
          borderRadius: "27px",
        },
      }}
      {...other}
    >
      {children}
    </MuiDialog>
  );
};

export const DialogTitle = withStyles(styles)(
  ({ children, classes, handleClose, ...other }) => {
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <img
          src={formComplete}
          alt="Form Complete"
          style={{ width: "40px", height: "40px" }}
        />
        <Title variant="h6">{children}</Title>
      </MuiDialogTitle>
    );
  }
);

export const DialogActions = withStyles(actionsStyles)(
  ({ children, classes, handleClose, ...other }) => {
    return (
      <MuiDialogActions disableTypography className={classes.root} {...other}>
        {children}
      </MuiDialogActions>
    );
  }
);
