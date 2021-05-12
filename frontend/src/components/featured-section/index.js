import React from "react";
import FeaturedCard from "../../components/featured-card";

import { FeaturedNews } from "./styles";

const Featured = ({ data }) => (
  <FeaturedNews>
    <h2 className="h2">Featured News and Press</h2>
    <div className="featured-row">
      {data.map((feature) => (
        <FeaturedCard image={feature.image} title={feature.title} />
      ))}
    </div>
  </FeaturedNews>
);

export default Featured;
