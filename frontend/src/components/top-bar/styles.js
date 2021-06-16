import styled from "styled-components";

export const TopBarFrame = styled.div`
  background-color: #1a2534;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 32px;
  padding: 0 var(--main-padding-x);
`;

export const TopBarSpan = styled.span`
  color: ${({ theme }) => theme.colors.mutedBlue};
  font-size: 0.8em;
  font-weight: 400;
  padding: 0 ${({ noRightPadding }) => (noRightPadding ? "0" : "1rem")} 0 1rem;

  @media (max-width: 768px) {
    display: ${({ nodisplay }) => (nodisplay ? "none" : "block")};
  }
`;

export const TopBarPhone = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

export const TopBarPhoneIcon = styled.img`
  height: 13px;
  width: 13px;
`;
