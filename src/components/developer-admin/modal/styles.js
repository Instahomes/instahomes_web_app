import styled from "styled-components";
import { withStyles } from "@material-ui/core/styles";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import { Icon } from "@iconify/react";

export const Body = styled.p`
  color: ${({ theme }) => theme.colors.darkBlue};
  font-size: 1em;
`;

const styles = () => ({
  root: {
    margin: 0,
  },
  closeButton: {
    position: "absolute",
    right: 0,
    top: "0.3em",
  },
});

const Title = styled.h6`
  color: ${({ theme }) => theme.colors.darkHeader};
  font-family: "Rubik", sans-serif;
  font-weight: 500;
  font-size: 1.3em;
  margin: 0;
`;

export const DialogTitle = withStyles(styles)(
  ({ children, classes, handleClose, ...other }) => {
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Title variant="h6">{children}</Title>
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={handleClose}
        >
          <Icon
            icon={"ic:outline-close"}
            color={"#3F526A"}
            width="0.6em"
            height="0.6em"
          />
        </IconButton>
      </MuiDialogTitle>
    );
  }
);
