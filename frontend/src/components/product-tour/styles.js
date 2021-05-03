import styled from "styled-components";
import { OrangeButton } from "../elements";

export const ProductInquiryContainer = styled.div`
  background: ${({ theme }) => theme.colors.mainBgColor};
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 1.5em 1.3em;
  font-size: 1em;
  display: flex;
  flex-direction: column;

  & > span {
    color: ${({ theme }) => theme.colors.darkHeader};
  }

  h2 {
    font-size: 1.5em;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkBlue};
    line-height: 128%;
    margin-bottom: 1rem;

    #property-name {
      font-size: 1em;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.orange};
    }
  }

  #sms-charges {
    margin-top: 1.5em;
    color: ${({ theme }) => theme.colors.whiteInputColor};
    font-size: 0.8em;
    text-align: center;
  }
`;

export const DateButtonsDiv = styled.div`
  display: flex;
`;

export const DateButtons = styled.div`
  margin: 0 1em;
  width: 90%;
  display: flex;
  justify-content: space-between;
  gap: 15px;
`;

export const DateButton = styled.button`
  width: 70px;
  height: 70px;
  border: ${({ selected }) => (selected ? "2.5px" : "1.5px")} solid
    ${({ theme, selected }) =>
      selected ? theme.colors.darkHeader : theme.colors.whiteInputColor};
  border-radius: 3px;
  background: none;
  padding: 0.5em;
  text-align: center;

  span {
    font-size: 0.8em;
    color: ${({ theme, selected }) =>
      selected ? theme.colors.darkHeader : theme.colors.darkGray};
  }

  h2 {
    font-size: 2em;
    font-weight: 400;
    color: ${({ theme, selected }) =>
      selected ? theme.colors.darkHeader : theme.colors.darkGray};
  }
`;

export const InquiryButtons = styled.div`
  display: flex;
  margin-top: 1em;

  button:nth-child(1) {
    margin-right: 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const InquiryButtonsChild = styled(OrangeButton)`
  font-size: 0.9em;
  width: 50%;
  padding: 0.5em 1em;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    margin-bottom: 5px;
  }
`;

export const ButtonIcon = styled.img`
  margin-right: 5px;
`;
