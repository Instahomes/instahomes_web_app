import styled from "styled-components";
import { OutlineButton } from "../elements";

export const ProductInquiryContainer = styled.div`
  // background: ${({ theme }) => theme.colors.mainBgColor};
  // box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 2px;
  padding: 1.5em 1.3em;
  font-size: 0.9em;
  display: flex;
  flex-direction: column;

  & > span {
    color: ${({ theme }) => theme.colors.darkHeader};
  }

  h2 {
    font-size: 1.4em;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkBlue};
    line-height: 128%;
    margin-bottom: 1rem;

    #property-developer {
      font-size: 1em;
      font-weight: 500;
      color: ${({ theme }) => theme.colors.orange};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    h2 {
      text-align: center;
    }
  }
`;

export const InquiryTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.8rem;
  margin-bottom: 0.8rem;
  font-size: 0.8em;
`;

export const Tag = styled.span`
  cursor: pointer;
  margin-right: 10px;
  margin-bottom: 10px;
  padding: 0.3em 1em;
  color: ${({ theme, selected }) =>
    selected ? theme.colors.mainBgColor : theme.colors.darkBody};
  border: 1px solid ${({ theme }) => theme.colors.darkBody};
  background-color: ${({ theme, selected }) =>
    selected && theme.colors.darkBody};
  box-sizing: border-box;
  border-radius: 19px;
`;

export const InquiryButtons = styled.div`
  display: flex;
  gap: 1em;
  margin-top: 0.5em;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const InquiryButtonsChild = styled(OutlineButton)`
  font-size: 1.1em;
  width: 50%;
  padding: 0.5em 1em;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
  }
`;

export const ButtonIcon = styled.img`
  margin-right: 5px;
`;

export const Footnotes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1em;

  #direct-dev {
    display: flex;
    align-items: center;

    img {
      width: 15px;
      height: 15px;
      margin-right: 10px;
    }

    font-size: 0.8em;
    color: ${({ theme }) => theme.colors.green};
  }

  #sms-charges {
    font-size: 0.8em;
    color: ${({ theme }) => theme.colors.whiteInputColor};
  }
`;
