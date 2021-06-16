import React from "react";
import map from "../../assets/card/map.svg";
import bed from "../../assets/card/bed.svg";
import bath from "../../assets/card/bath.svg";
import check from "../../assets/card/check.svg";
import { FeaturedCard, FeaturedInfo } from "./styles";

const Card = ({ image, title, url }) => {
  return (
    <FeaturedCard>
      <img src={image} />
      <FeaturedInfo>
        <span className="span">{title}</span>
        <p className="p">Read Article →</p>
      </FeaturedInfo>
    </FeaturedCard>
  );
};

export default Card;
