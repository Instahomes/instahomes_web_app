import React from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import DeveloperContact from "../../components/developer-contact";
import FeaturedSection from "../../components/featured-section";
import circuitLane from "../../assets/developer/circuitLane.png";
import ayalaLand from "../../assets/developer/logo-ayalaland.png";
import amaia from "../../assets/developer/logo-amaia.png";
import premier from "../../assets/developer/logo-premier.png";
import avida from "../../assets/developer/logo-avida.png";

import map from "../../assets/development/map.svg";
import devMap from "../../assets/development/devMap.png";
import check from "../../assets/card/check.svg";
import house from "../../assets/card/sample_house.png";
import {
  DeveloperContainer,
  HeroSection,
  HeroContent,
  MetadataLine,
  MetadataNumber,
  MetadataProperty,
  Developments,
  CardFrame,
  About,
  Affiliates,
  OfficeLocations,
} from "./styles";
import { Link } from "react-router-dom";

const sampleDevelopments = [
  {
    id: 1,
    name: "Callisto Towers",
    type: "Commercial Condominium",
    location: "Circuit Lane, Makati",
    priceStart: "6,000,000",
    priceEnd: "30,000,000",
  },
  {
    id: 1,
    name: "Orean Place",
    type: "Commercial Condominium",
    location: "Vertis North, Quezon City",
    priceStart: "8,000,000",
    priceEnd: "25,000,000",
  },
  {
    id: 1,
    name: "Parkford Suites",
    type: "Commercial Condominium",
    location: "Legaspi, Makati City",
    priceStart: "10,000,000",
    priceEnd: "40,000,000",
  },
];

const sampleAffiliates = [
  {
    logo: premier,
    alt: "AyalaLand Premier",
  },
  {
    logo: amaia,
    alt: "Amaia",
  },
  {
    logo: ayalaLand,
    alt: "AyalaLand",
  },
  {
    logo: avida,
    alt: "Avida",
  },
];

const sampleFeatures = [
  {
    title: "5 Reasons to Invest in Philippine Real Estate",
    url: "",
    image: house,
  },
  {
    title: "Top Indicators of A Valuable Property",
    url: "",
    image: house,
  },
  {
    title: "The Best Areas to Invest in the Philippines in 2021",
    url: "",
    image: house,
  },
];

const DevelopmentCard = ({
  id,
  name,
  type,
  location,
  priceStart,
  priceEnd,
}) => (
  <Link to={`/development/${id}`}>
    <CardFrame background={circuitLane}>
      <div>
        <h3 className="dev-type">{type}</h3>
        <h3 className="dev-name">{name}</h3>
      </div>
      <div>
        <span className="dev-location">
          <img src={map} />
          &nbsp;&nbsp;{location}
        </span>
        <h4 className="dev-price">
          PHP {priceStart} - {priceEnd}
        </h4>
      </div>
    </CardFrame>
  </Link>
);

const isVerified = true;

const Development = (props) => {
  return (
    <Layout>
      <Navbar dark />
      <DeveloperContainer>
        <HeroSection>
          <HeroContent>
            <h1>
              Alveo Land Corporation&nbsp;&nbsp;
              {isVerified && <img src={check} />}
            </h1>
            <p>
              Alveo Land caters to the upscale market with its dynamic portfolio
              of residential, business, commercial, and leisure developments
              across the country.
            </p>
            <MetadataLine>
              <div>
                <MetadataNumber>8</MetadataNumber>
                <MetadataProperty>Developments</MetadataProperty>
              </div>
              <div>
                <MetadataNumber>32</MetadataNumber>
                <MetadataProperty>Properties</MetadataProperty>
              </div>
              <div>
                <MetadataNumber>6</MetadataNumber>
                <MetadataProperty>Site Locations</MetadataProperty>
              </div>
            </MetadataLine>
          </HeroContent>
        </HeroSection>
        <Developments>
          <h2 className="h2">Alveo Land Developments</h2>
          <div className="dev-row">
            {sampleDevelopments.map((dev) => (
              <DevelopmentCard key={dev.name} {...dev} />
            ))}
          </div>
        </Developments>
        <About>
          <h2 className="h2">About Alveo Land Corporation</h2>
          <div className="about-body">
            <div>
              <h3 className="h3">COMPANY OVERVIEW</h3>
              <p className="p">
                A subsidiary of Ayala Land, Alveo offers a vibrant portfolio of
                groundbreaking real estate developments that provides upscale
                living and working spaces within various thriving and emerging
                growth centers around the country.
              </p>
              <p className="p">
                Armed with sharper foresight, unparalleled excellence, total
                commitment, and an inherent passion and drive for innovation,
                the company is committed to providing thoughtfully-designed and
                master planned living environments for the unique needs of its
                discerning market.
              </p>
            </div>
            <div>
              <h3 className="h3">COMPANY VALUES</h3>
              <p className="p">
                We strive to elevate our customers’ quality of life through
                innovative real estate solutions in vibrant growth centers all
                over the country.
              </p>
              <p className="p">
                We act responsibly with integrity, accountability and total
                commitment.
              </p>
              <p className="p">
                We achieve excellence through passion, focus and foresight.
              </p>
            </div>
          </div>
        </About>
        <Affiliates>
          <h2 className="h2">Affiliates and Partners</h2>
          <div className="affiliates-logos">
            {sampleAffiliates.map((partner) => (
              <img src={partner.logo} alt={partner.alt} />
            ))}
          </div>
        </Affiliates>
        <DeveloperContact />
        <FeaturedSection data={sampleFeatures} />
        <OfficeLocations backgroundImage={devMap}>
          <div>
            <h2 className="h2">Office Locations</h2>
            <div className="office-map-mobile"></div>
            <p className="p">
              ALVEO Corporate Center
              <br />
              728 28th Street, Bonifacio Global City 1634 Taguig City, Metro
              Manila Philippines
            </p>
            <p className="p">
              Alveo Davao Showroom
              <br />
              Abreeza Mall, G/F, Bajada Flyover, Davao City, 8000 Davao del Sur
            </p>
            <p className="p">
              Alveo Land Office Complex
              <br />
              Celadon Park Manila, Flaming Tree Road, Sta. Cruz, Metro Manila,
              Manila, 1014
            </p>
            <p className="p">
              Alveo Land Corp
              <br />
              Ayala Tower One, 18th floor of, Ayala Ave, Makati, Metro Manila
            </p>
          </div>
          <div className="office-map"></div>
        </OfficeLocations>
      </DeveloperContainer>
    </Layout>
  );
};

export default Development;
