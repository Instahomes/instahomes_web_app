import styled from "styled-components";
import { theme } from "../../globalStyles";

export const ButtonCard = styled.section`
  cursor: pointer;
  padding: 1.5rem 1.2rem 1.8rem 1.2rem;
  background-color: #fffbf8;
  border-radius: 0.875rem;
  margin: 0.75rem;
  border: 0.094rem solid #ff6700;
  box-sizing: border-box;
  box-shadow: 0rem 0.25rem 1.125rem rgba(0, 0, 0, 0.1);

  @media (max-width: ${theme.breakpoints.lg}) {
  }
  @media (max-width: ${theme.breakpoints.md}) {
  }
  @media (max-width: ${theme.breakpoints.sm}) {
  }
`;

export const ButtonInfo = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: left; */

  img {
    display: inline-block;
    margin-left: 0px;
    vertical-align: middle;
    width: 12px;
    height: auto;
    margin-right: 8px;
    filter: invert(50%) sepia(26%) saturate(6713%) hue-rotate(359deg)
      brightness(99%) contrast(110%);
  }
  info {
    color: #ff6700;
    font-size: 1.25rem;
    font-weight: 500;
    padding: 0.5rem 0rem 0.5rem 0rem;
  }

  para {
    font-size: 1rem;
    color: #a14a0f;
  }

  @media (max-width: ${theme.breakpoints.lg}) {
  }
  @media (max-width: ${theme.breakpoints.md}) {
  }
  @media (max-width: ${theme.breakpoints.sm}) {
    img {
      display: inline-block;
      margin-left: 0px;
    }
    info {
      color: #ff6700;
      font-size: 1rem;
      font-weight: 500;
      padding: 0.5rem 0rem 0.5rem 0rem;
    }
  }
`;

export const ButtonCardGrey = styled.section`
  cursor: pointer;
  padding: 1.5rem 1.2rem 1.8rem 1.2rem;
  background-color: #f3f3f3;
  border-radius: 0.875rem;
  margin: 0.75rem;
  border: 0.094rem solid #b9b9b9;
  box-sizing: border-box;
  box-shadow: 0rem 0.25rem 1.125rem rgba(0, 0, 0, 0.1);
`;

export const ButtonInfoGrey = styled.div`
  cursor: pointer;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: left; */

  info {
    color: #808080;
    font-size: 1.25rem;
    font-weight: 500;
    padding: 0.5rem 0rem 0.5rem 0rem;
  }

  para {
    font-size: 1rem;
    color: #929292;
  }
`;
