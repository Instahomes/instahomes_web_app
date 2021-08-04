import React from "react";
import ReactLoading from "react-loading";
import styled from "styled-components";

const LoadingDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: ${({ height }) => height || "800px"};
`;

const Loading = React.memo(({ height, message, color }) => (
  <LoadingDiv height={height}>
    <ReactLoading
      type="cylon"
      color={color || "#BDBDBD"}
      height={"20%"}
      width={"20%"}
      // style={{ margin: "auto" }}
    />
    {message && <p style={{ color: color || "#BACCE2" }}>{message}</p>}
  </LoadingDiv>
));

export default Loading;
