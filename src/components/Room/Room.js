import React from "react";
import { Link } from "react-router-dom";
import defaultImg from "../../images/room-3.jpeg";
import PropTypes from "prop-types";
import "./Room.css";
const Room = ({ room }) => {
  const { name, slug, images, price } = room;
  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="Single Room" />
        <div className="price-top">
          <h6>${price}</h6>
          <p>per night</p>
        </div>
        <Link to={`/rooms/${slug}`} className="btn-primary room-link">
          Features
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};

/* 
  We use prop type to check the props of our component, if any of them is incorrect, then, 
  a warning will be logged in console 
*/
Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired
  })
};

export default Room;
