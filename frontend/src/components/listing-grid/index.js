import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ListingCard from "../../components/listing-card";
import { ListingInfo } from "../../components/listing-card/styles";
import { LightInput, OutlineButton } from "../../components/elements";
import InfiniteScroll from "react-infinite-scroll-component";
import ReactLoading from "react-loading";

export const ListingsFilters = styled.div`
  margin-bottom: 1em;
  display: flex;
  align-items: center;
  gap: 10px;

  .listing-count {
    font-size: 0.8em;
    color: #738398;

    .count-emphasis {
      font-weight: 500;
      color: ${({ theme }) => theme.colors.darkHeader};
    }
  }

  .listing-sort {
    margin-left: auto;
  }
`;

export const GridStyle = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 1.5em 1em;

  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
`;

export const ModifiedListingCard = styled(ListingCard)`
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

const Loader = () => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <ReactLoading type="cylon" color="#BDBDBD" height="100%" width="20%" />
  </div>
);

const orderOptions = [
  { value: "-created_at", label: "Sort by Newest" },
  { value: "-lowest_price", label: "Sort by Price (highest first)" },
  { value: "lowest_price", label: "Sort by Price (lowest first)" },
  { value: "-lot_size", label: "Sort by Size (highest first)" },
  { value: "lot_size", label: "Sort by Size (lowest first)" },
];

const ListingGrid = ({ listings, order_by, setOrderBy, noSort }) => {
  const INTERVAL_SIZE = 6;
  const [count, setCount] = useState({
    prev: 0,
    next: INTERVAL_SIZE,
  });
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(
    listings.slice(count.prev, count.next)
  );
  const getMoreData = () => {
    if (current.length >= listings.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(
        current.concat(
          listings.slice(count.prev + INTERVAL_SIZE, count.next + INTERVAL_SIZE)
        )
      );
    }, 2000);
    setCount((prevState) => ({
      prev: prevState.prev + INTERVAL_SIZE,
      next: prevState.next + INTERVAL_SIZE,
    }));
  };

  useEffect(() => {
    if (current.length >= listings.length) {
      setHasMore(false);
    }
  }, [count]);

  return (
    <React.Fragment>
      <ListingsFilters>
        <span className="listing-count">
          Showing <span className="count-emphasis">{current.length}</span> out
          of <span className="count-emphasis">{listings.length}</span> listings
        </span>
        {!noSort && (
          <LightInput
            scale={0.8}
            as="select"
            className="listing-sort"
            onChange={(e) => setOrderBy(e.target.value)}
          >
            {orderOptions.map((option) => (
              <option
                value={option.value}
                key={option.value}
                selected={option.value == order_by}
              >
                {option.label}
              </option>
            ))}
          </LightInput>
        )}
        {/* <OutlineButton
            className="remove-on-mobile btn-rubik"
            scale={0.8}
            style={{ alignSelf: "stretch", fontWeight: 400 }}
          >
            View with map <span id="beta">BETA</span>
          </OutlineButton> */}
      </ListingsFilters>
      <InfiniteScroll
        dataLength={current.length}
        next={getMoreData}
        hasMore={hasMore}
        loader={<Loader />}
      >
        <GridStyle>
          {current.map((listing) => (
            <ModifiedListingCard
              id={listing.id}
              key={listing.seo_title + listing.id}
              developer={listing.development.developer.name}
              image={listing.photo_main}
              name={listing.development.name + " " + listing.unit_name}
              size={listing.lot_size}
              price={listing.lowest_price}
              address={listing.development.location}
              bedrooms={listing.bedrooms}
              bathrooms_min={listing.bathrooms_min}
              bathrooms_max={listing.bathrooms_max}
              isVerified={true}
              isOnWishlist={listing.is_liked}
            />
          ))}
        </GridStyle>
      </InfiniteScroll>
    </React.Fragment>
  );
};

export default ListingGrid;
