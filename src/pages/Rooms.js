import React from "react";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import RoomsContainer from "../components/RoomsContainer/RoomsContainer";
import { Link } from "react-router-dom";
const Rooms = () => {
  return (
    <>
      <Hero hero="roomsHero">
        <Banner title="our romms">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <RoomsContainer />
    </>
  );
};

export default Rooms;