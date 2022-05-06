import styled from "styled-components";
import Switch from "react-switch";
import ListingCard from "../../../components/listing-card";
import { ListingInfo } from "../../../components/listing-card/styles";

export const GridPreviewButton = styled.div`
  padding: 0 1.5em;
  display: flex;
  align-items: center;
  gap: 0.8em;
  cursor: pointer;

  span {
    font-size: 0.9em;
    color: ${({ theme }) => theme.colors.darkHeader};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-bottom: 1em;
  }
`;

export const GridStyle = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 1.5em 1.5em;

  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
`;

export const ModifiedListingCard = styled(ListingCard)`
  min-width: auto;
  max-width: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    min-width: 100%;
    max-width: 100%;
  }

  @media (max-width: 700px) {
    ${ListingInfo} {
      height: auto;
    }
  }
`;

export const SwitchComponent = ({ checked, onChange }) => (
  <Switch
    checked={checked}
    onChange={onChange}
    onColor="#2DAA0D"
    onHandleColor="#77E25C"
    uncheckedIcon={false}
    checkedIcon={false}
  />
);
