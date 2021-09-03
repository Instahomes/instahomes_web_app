import styled from "styled-components";

export const SidebarFrame = styled.div`
  background-color: ${({ theme }) => theme.colors.mainBg};
  width: clamp(180px, 40vw, 324px);
  min-height: 100vh;
  border-right: 1px solid #dddddd;
`;

export const SidebarHeader = styled.div`
  padding: 1.5em 1.8em;
`;

export const InstahomesLogo = styled.img`
  width: 70%;
  height: 100%;
  object-fit: cover;
`;

export const DeveloperName = styled.div`
  margin-top: 1em;
  padding: 0.7em 1em;

  border-radius: 8px;
  background-color: #ededed;
  display: flex;
  align-items: center;
  gap: 0.8em;

  .logo {
    max-width: 2em;
    height: 100%;
    object-fit: cover;
  }

  .dev-name {
    color: ${({ theme }) => theme.colors.darkHeader};
    font-size: 1em;
    font-weight: 500;
    line-height: 120%;
  }
`;

export const TabGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
`;

export const Tab = styled.nav`
  box-sizing: border-box;
  padding: 1em 3em;
  cursor: pointer;
  background-color: ${({ active }) =>
    active ? "rgba(255, 103, 0, 0.1)" : "inherit"};
  border-right: ${({ theme, active }) =>
    active ? `5px solid ${theme.colors.orange}` : "none"};

  display: flex;
  align-items: flex-end;
  gap: 1.3em;

  .tab-name {
    font-size: 0.9em;
    color: ${({ theme, active }) =>
      active ? theme.colors.orange : theme.colors.darkGray};
  }
`;
