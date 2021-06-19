import React from "react";
import { FeaturedCard, FeaturedInfo } from "./styles";

const Card = ({ image, title, url }) => {
  return (
    <FeaturedCard>
      <a href={url}>
        <img src={image} />
        <FeaturedInfo>
          <span className="span">{title}</span>
          <p className="p">Read Article →</p>
        </FeaturedInfo>
      </a>
    </FeaturedCard>
  );
};

export default Card;
