import React, { useState } from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const Parent = styled.div`
  position: relative;
`;

const StyledMenu = withStyles((theme) => ({
  list: {
    backgroundColor: "#FEFEFE",
    borderRadius: "10px",
  },
}))(Menu);

const StyledMenuItem = withStyles((theme) => ({
  root: {
    padding: "0.6em 2.5em",
    fontFamily: "Rubik, sans-serif",
    fontSize: "0.9em",
    fontWeight: "normal",
    color: "#828282",
  },
}))(MenuItem);

const RowDropdown = ({ row }) => {
  const { original: data } = row;
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    handleClose();
    history.push(`/admin/listings/${data.id}`);
  };

  return (
    <Parent>
      <Icon
        style={{ cursor: "pointer" }}
        icon="codicon:kebab-vertical"
        color="#828282"
        width="2em"
        height="2em"
        onClick={handleOpen}
      />
      <StyledMenu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem onClick={handleEdit}>
          <Icon
            icon="fa-solid:pencil-alt"
            color="#828282"
            width="1em"
            height="1em"
            style={{ marginRight: "1em" }}
          />
          Edit
        </StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>
          <Icon
            icon="fa-regular:trash-alt"
            color="#828282"
            width="1em"
            height="1em"
            style={{ marginRight: "1em" }}
          />
          Delete
        </StyledMenuItem>
      </StyledMenu>
    </Parent>
  );
};

export default RowDropdown;
