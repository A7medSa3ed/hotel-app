import React, { Component } from "react";
import { RoomContext } from "../../context";
import Title from "../Title/Title";
import Loading from "../Loading/Loading";
import Room from "../Room/Room";
import "./FeaturedRoom.css";

export default class FeaturedRoom extends Component {
  // call our context, in this case will be (RoomContenxt), it work with class based component
  static contextType = RoomContext;

  render() {
    let { loading, featuredRooms: rooms } = this.context;
    // getting all value which passed through (RoomContext.Provider)
    // {featuredRoosms: rooms} --> this mean in es6 getting featuredRooms from object and set it's name inside this                                    scope as rooms

    const featuredRooms = rooms.map(room => <Room key={room.id} room={room} />);

    return (
      <section className="featured-rooms">
        <Title title="featured rooms" />
        <div className="featured-rooms-center">
          {loading ? <Loading /> : featuredRooms}
        </div>
      </section>
    );
  }
}
