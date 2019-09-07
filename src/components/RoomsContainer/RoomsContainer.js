import React from "react";
import RoomsFilter from "../RoomsFilter/RoomsFilter";
import RoomsList from "../RoomsList/RoomsList";
import { RoomConsumer } from "../../context";
import Loading from "../Loading/Loading";
const RoomsContainer = () => {
  return (
    // RoomConsumer Work with funtion component, value parameter here access to value that sent from RoomProvider
    <RoomConsumer>
      {value => {
        const { loading, rooms, sortedRooms } = value;
        if (loading) {
          return <Loading />;
        }
        return (
          <>
            <br />
            <RoomsFilter rooms={rooms} />
            <RoomsList rooms={sortedRooms} />
          </>
        );
      }}
    </RoomConsumer>
  );
};

export default RoomsContainer;
