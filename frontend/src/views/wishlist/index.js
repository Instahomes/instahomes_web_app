import React, { useState, useEffect } from "react";
import Layout from "../../components/layout";
import Navbar from "../../components/navbar";
import ListingGrid from "../../components/listing-grid";

import { WishlistContainer, WishlistHeader } from "./styles";

const sampleListings = [
  {
    id: 1,
    name: "The Lattice Studio Unit",
    size: 33,
    price: "9,500,000.00",
    address: "C-5 Road, Brgy. Rosario, Pasig City",
    bedrooms: 1,
    bathrooms: 1,
    isVerified: true,
  },
  {
    id: 1,
    name: "The Lattice 1-Bedroom",
    size: 58,
    price: "13,000,000.00",
    address: "C-5 Road, Brgy. Rosario, Pasig City",
    bedrooms: 1,
    bathrooms: 1,
    isVerified: false,
  },
];

const Wishlist = (props) => {
  return (
    <Layout>
      <Navbar />
      <WishlistContainer>
        <WishlistHeader>My Wishlist</WishlistHeader>
        <ListingGrid listings={sampleListings} />
      </WishlistContainer>
    </Layout>
  );
};

export default Wishlist;
