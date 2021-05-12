import styled from "styled-components";
import { OrangeButton } from "../../components/elements";

export const ContactComponent = styled.div`
  text-align: center;
  background: #fbfbfb;
  border-radius: 46px;

  padding: 2em 3em;
  width: 50%;
  margin: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    box-sizing: border-box;
    width: 100%;
  }
`;

export const InquiryButtons = styled.div`
  display: flex;
  justify-content: center;
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
  padding: 0.6em 1.2em;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    width: 100%;
    margin-bottom: 5px;
  }
`;

export const ButtonIcon = styled.img`
  margin-right: 10px;
`;

export const Footnotes = styled.div`
  margin-top: 1.5em;
  font-size: 0.8em;
  color: ${({ theme }) => theme.colors.whiteInputColor};
`;
