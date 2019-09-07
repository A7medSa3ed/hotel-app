import React from "react";
import Hero from "../components/Hero/Hero";
import Banner from "../components/Banner/Banner";
import Services from "../components/Servics/Services";
import { Link } from "react-router-dom";
import FeaturedRoom from "../components/FeaturedRoom/FeaturedRoom";
const Home = () => {
  return (
    <>
      <Hero hero="defaultHero">
        <Banner
          title="luxurious rooms"
          subTitle="Deluxe Rooms Starting At $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRoom />
    </>
  );
};

export default Home;
