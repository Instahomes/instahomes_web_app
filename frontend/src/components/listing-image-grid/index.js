import React from "react";
import styled from "styled-components";
import SimpleReactLightbox, {
  useLightbox,
  SRLWrapper,
} from "simple-react-lightbox";

export const Image = styled.div`
  cursor: pointer;
  background: url(${({ image }) => image});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const ImageContainer = styled.div`
  display: grid;
  position: relative;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 200px);
  grid-template-areas:
    "main main image1 image2"
    "main main image3 image4";
  gap: 10px;

  ${Image}:nth-child(1) {
    grid-area: main;
  }

  ${Image}:nth-child(2) {
    grid-area: image1;
  }

  ${Image}:nth-child(3) {
    grid-area: image2;
  }

  ${Image}:nth-child(4) {
    grid-area: image3;
  }

  ${Image}:nth-child(5) {
    grid-area: image4;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    grid-template-columns: repeat(5, 90%);
    grid-template-rows: 400px;
    grid-template-areas: "main image1 image2 image3 image4";
    overflow-x: scroll;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-rows: 200px;
  }
`;

export const MoreImages = styled.div`
  background: rgba(224, 224, 224, 0.49);

  border: 1px solid ${({ theme }) => theme.colors.lightGray};
  box-sizing: border-box;
  border-radius: 3px;

  position: absolute;
  bottom: 2%;
  right: 1%;

  padding: 0.5em 1em;
  color: ${({ theme }) => theme.colors.lightGray};
  font-size: 1em;
  font-weight: 400;
  opacity: 0.7;
`;

const ImageGrid = ({ imageMain, images }) => {
  const { openLightbox, closeLightbox } = useLightbox();

  return (
    <React.Fragment>
      <SRLWrapper>
        <div style={{ display: "none" }}>
          <img src={imageMain} />
        </div>
        {images.map((image, idx) => (
          <div key={"lightboximage" + idx} style={{ display: "none" }}>
            <img src={image} />
          </div>
        ))}
      </SRLWrapper>
      <ImageContainer>
        <Image image={imageMain} onClick={() => openLightbox(0)} />
        {images.map((image, idx) => (
          <Image
            key={"image" + (idx + 1)}
            image={image}
            onClick={() => openLightbox(idx + 1)}
          />
        ))}
        <MoreImages>+10 more photos</MoreImages>
      </ImageContainer>
    </React.Fragment>
  );
};

const ImageGridWrapper = (props) => (
  <SimpleReactLightbox>
    <ImageGrid {...props} />
  </SimpleReactLightbox>
);

export default ImageGridWrapper;
