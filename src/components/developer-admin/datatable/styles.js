import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";

export const Frame = styled.div`
  background: #fefefe;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.08);
  border-radius: 26px;
  padding: 2em 2.2em;
`;

export const useStyles = makeStyles({
  tableHeaderCell: {
    fontSize: "1em",
    fontWeight: 500,
    fontFamily: "Rubik, sans-serif",
    color: "#3F526A",
    borderBottom: "none",
  },
  tableCell: {
    fontSize: "0.9em",
    fontWeight: "normal",
    fontFamily: "Rubik, sans-serif",
    color: "#4F4F4F",
    borderBottom: "none",
  },
});
