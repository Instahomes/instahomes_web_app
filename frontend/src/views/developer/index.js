import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import DeveloperContact from "../../components/developer-contact";
import FeaturedSection from "../../components/featured-section";
import Loading from "../../components/loading";

import map from "../../assets/development/map.svg";
import check from "../../assets/card/check.svg";
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
import { Helmet } from "react-helmet";
import { getDevelopers } from "../../services/developers";
import { useRouteMatch } from "react-router-dom";

const DevelopmentCard = (development) => (
  <Link to={`/development/${development.id}`}>
    <CardFrame background={development.photo_main}>
      <div className="left-half">
        <h3 className="dev-type">{development.development_type}</h3>
        <h3 className="dev-name">{development.name}</h3>
      </div>
      <div>
        <div className="dev-location">
          <img src={map} />
          &nbsp;&nbsp;<span>{development.location}</span>
        </div>
        <h4 className="dev-price">
          PHP {10000} - {100000}
        </h4>
      </div>
    </CardFrame>
  </Link>
);

const isVerified = true;

const Developer = (props) => {
  const [developer, setDeveloper] = useState(null);
  const match = useRouteMatch();

  useEffect(() => {
    getDevelopers(
      (data) => data.length > 0 && setDeveloper(data[0]),
      `id=${match.params.id}`
    );
  }, []);

  const truncateOverview = (overview) => {
    const MAX_WORD_COUNT = 80;
    const words = overview.split(" ");
    if (words.length > MAX_WORD_COUNT) {
      return words.slice(0, MAX_WORD_COUNT).join(" ") + "...";
    }
    return words.join(" ");
  };

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{developer ? developer.seo_title : "Instahomes"}</title>
        <meta
          name="description"
          content={developer ? developer.seo_desc : ""}
        ></meta>
      </Helmet>
      <Navbar dark />
      {developer ? (
        <DeveloperContainer>
          <HeroSection image={developer.featured_image}>
            <div className="hero-gradient">
              <HeroContent>
                <h1>
                  {developer.name}&nbsp;&nbsp;
                  {isVerified && <img src={check} />}
                </h1>
                <p>{truncateOverview(developer.overview)}</p>
                <MetadataLine>
                  <div>
                    <MetadataNumber>
                      {developer.development_set.length}
                    </MetadataNumber>
                    <MetadataProperty>Developments</MetadataProperty>
                  </div>
                  {/* <div>
                  <MetadataNumber>32</MetadataNumber>
                  <MetadataProperty>Properties</MetadataProperty>
                </div>
                <div>
                  <MetadataNumber>6</MetadataNumber>
                  <MetadataProperty>Site Locations</MetadataProperty>
                </div> */}
                </MetadataLine>
              </HeroContent>
            </div>
            <div className="hero-image"></div>
            <div className="hero-black"></div>
          </HeroSection>
          <Developments>
            <h2 className="h2">{developer.name} Developments</h2>
            <div className="dev-row">
              {developer.development_set.map((dev) => (
                <DevelopmentCard key={dev.name} {...dev} />
              ))}
            </div>
          </Developments>
          <About>
            <h2 className="h2">About {developer.name}</h2>
            <div className="about-body">
              <div>
                <h3 className="h3">COMPANY OVERVIEW</h3>
                <p className="p">{developer.overview}</p>
              </div>
              <div>
                <h3 className="h3">COMPANY VALUES</h3>
                <p className="p">{developer.values_description}</p>
              </div>
            </div>
          </About>
          {developer.affiliate_name_1 && (
            <Affiliates>
              <h2 className="h2">Affiliates and Partners</h2>
              <div className="affiliates-logos">
                {[
                  [developer.affiliate_name_1, developer.affiliate_logo_1],
                  [developer.affiliate_name_2, developer.affiliate_logo_2],
                  [developer.affiliate_name_3, developer.affiliate_logo_3],
                  [developer.affiliate_name_4, developer.affiliate_logo_4],
                ].map(([affName, affLogo]) => (
                  <img src={affLogo} alt={affName} />
                ))}
              </div>
            </Affiliates>
          )}
          {/* <DeveloperContact /> */}
          <FeaturedSection />
          {/* <OfficeLocations backgroundImage={devMap}>
            <div>
              <h2 className="h2">Office Locations</h2>
              <div className="office-map-mobile"></div>
              <p className="p">
                Alveo Davao Showroom
                <br />
                Abreeza Mall, G/F, Bajada Flyover, Davao City, 8000 Davao del
                Sur
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
          </OfficeLocations> */}
        </DeveloperContainer>
      ) : (
        <Loading></Loading>
      )}
    </Layout>
  );
};

export default Developer;
