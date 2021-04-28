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

  span {
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
    margin-top: 0.8em;
    color: ${({ theme }) => theme.colors.whiteInputColor};
    font-size: 0.8em;
    text-align: center;
  }
`;

export const InquiryTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  font-size: 0.8em;

  span {
    margin-right: 10px;
    margin-bottom: 10px;
    padding: 0.3em 1em;
    color: ${({ theme }) => theme.colors.darkBody};
    border: 1px solid ${({ theme }) => theme.colors.darkBody};
    box-sizing: border-box;
    border-radius: 19px;
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
  font-size: 1em;
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
