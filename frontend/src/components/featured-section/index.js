import React from "react";
import FeaturedCard from "../../components/featured-card";
import article1 from "../../assets/featured/article1.png";
import article2 from "../../assets/featured/article2.jpeg";
import article3 from "../../assets/featured/article3.webp";

import { FeaturedNews } from "./styles";

const data = [
  {
    title: "5 Reasons to Invest in Philippine Real Estate",
    url: "https://instahomes.com.ph/5-Reasons-to-Invest-in-Philippine-Real-Estate.html",
    image: article1,
  },
  {
    title: "Top Indicators of A Valuable Property",
    url: "https://instahomes.com.ph/Top-Indicators-of-A-Valuable-Property.html",
    image: article2,
  },
  {
    title: "Condo vs House and Lot: What's Better for Young Couples?",
    url: "https://instahomes.com.ph/Condo-vs-House-What's-better-for-Young-Couples.html",
    image: article3,
  },
];

const Featured = () => (
  <FeaturedNews>
    <h2 className="h2">Featured News and Press</h2>
    <div className="featured-row">
      {data.map((feature) => (
        <FeaturedCard
          image={feature.image}
          title={feature.title}
          url={feature.url}
        />
      ))}
    </div>
  </FeaturedNews>
);

export default Featured;
