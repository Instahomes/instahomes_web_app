import styled from "styled-components";
import phoneIcon from "../../assets/navbar/phone.svg";

const TopBarFrame = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 32px;
  padding: 0 12rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

const TopBarSpan = styled.span`
  color: ${({ theme }) => theme.colors.mutedBlue};
  font-size: 0.8em;
  font-weight: 400;
  padding: 0 1rem;

  @media (max-width: 768px) {
    display: ${({ nodisplay }) => (nodisplay ? "none" : "block")};
  }
`;

const TopBarPhone = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

const TopBarPhoneIcon = styled.img`
  height: 13px;
  width: 13px;
`;

const TopBar = () => (
  <TopBarFrame>
    <TopBarPhone>
      <TopBarPhoneIcon src={phoneIcon} />
      <TopBarSpan>243-2349/243-1765</TopBarSpan>
    </TopBarPhone>
    <TopBarSpan nodisplay>BULK SALE</TopBarSpan>
    <TopBarSpan>CONTACT SUPPORT</TopBarSpan>
  </TopBarFrame>
);

export default TopBar;
