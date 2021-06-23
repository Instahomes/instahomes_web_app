import styled from "styled-components";

export const AmenitiesStyle = styled.section`
  padding: ${({ noPadding }) => (noPadding ? 0 : `3em var(--main-padding-x)`)};

  .span {
    font-size: 1em;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.darkBlue};
  }

  & > div {
    display: flex;
    flex-direction: ${({ direction }) => direction || "row"};
    gap: 2em;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    text-align: center;

    & > div {
      flex-direction: column;
    }
  }
`;

export const AmenitiesCard = styled.div`
  flex: 1;

  .amenities-img {
    background: url(${({ image }) => image});
    background-size: cover;
    border-radius: 10px;
    height: 200px;
    margin-bottom: 1em;
  }

  p {
    margin-top: 0.5em;
  }
`;

const Amenities = ({ amenities, direction, Heading, noPadding }) => (
  <AmenitiesStyle direction={direction} noPadding={noPadding}>
    {Heading && <Heading />}
    <div>
      {amenities.map(
        ([amenityName, amenityDesc, amenityImage]) =>
          amenityName && (
            <AmenitiesCard key={amenityName} image={amenityImage}>
              <div className="amenities-img"></div>
              <span className="span">{amenityName}</span>
              <p className="p">{amenityDesc}</p>
            </AmenitiesCard>
          )
      )}
    </div>
  </AmenitiesStyle>
);

export default Amenities;
