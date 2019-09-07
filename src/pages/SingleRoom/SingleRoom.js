import React, { Component } from "react";
import { RoomContext } from "../../context";
import { Link } from "react-router-dom";
import defaultBcg from "../../images/room-1.jpeg";
import Banner from "../../components/Banner/Banner";
import StyledHero from "../../components/Hero/StyledHero";
import "./SingleRoom.css";
export default class SingleRoom extends Component {
  static contextType = RoomContext;

  state = {
    id: this.props.match.params.id,
    defaultBcg
  };

  render() {
    const { getRoom } = this.context;
    const room = getRoom(this.state.id);
    if (!room) {
      return (
        <div className="error">
          <h3> there is no such room could be found ...</h3>
          <Link to="/rooms" className="btn-primary">
            go to rooms
          </Link>
        </div>
      );
    }
    const {
      name,
      description,
      capacity,
      size,
      price,
      extras,
      breakfast,
      pets,
      images
    } = room;
    const [coverImage, ...restImages] = images;
    return (
      <>
        <StyledHero image={coverImage || this.state.defaultBcg}>
          <Banner title={`${name} room`}>
            <Link to="/rooms" className="btn-primary">
              back to rooms
            </Link>
          </Banner>
        </StyledHero>
        <section className="single-room">
          <div className="single-room-images">
            {restImages.map((image, index) => (
              <img key={index} src={image} alt={name} />
            ))}
          </div>
          <div className="single-room-info">
            <article className="desc">
              <h3>details</h3>
              <p>{description}</p>
            </article>
            <article className="info">
              <h3>info</h3>
              <h6>price : ${price}</h6>
              <h6>size : {size} SQFT</h6>
              <h6>
                max capacity :
                {capacity > 1 ? `${capacity} people` : `${capacity} person`}
              </h6>
              <h6>pets : {pets ? "Pets Allowed" : "No Pets Allowes"}</h6>
              <h6>{breakfast && "Free Breackfast Included"}</h6>
            </article>
          </div>
        </section>
        <section className="room-extras">
          <h6>extras</h6>
          <ul className="extras">
            {extras.map((item, index) => (
              <li key={index}> - {item} </li>
            ))}
          </ul>
        </section>
      </>
    );
  }
}
