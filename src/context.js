import React, { Component } from "react";
import items from "./data";
const RoomContext = React.createContext();

class RoomProvider extends Component {
  // initial state
  state = {
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    pets: false,
    breakfast: false
  };

  componentDidMount() {
    let rooms = this.formatData(items);
    let featuredRooms = rooms.filter(room => room.featured === true);

    /*
      Math.max --> it accept only numbers, in our case we return from map an array of number, 
      so we should detruct the returned array to send numbers only to Math.max 
    */
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let maxSize = Math.max(...rooms.map(item => item.size));

    this.setState({
      rooms,
      featuredRooms,
      loading: false,
      sortedRooms: rooms,
      price: maxPrice,
      maxPrice,
      maxSize
    });
  }

  formatData = items => {
    let tempItem = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);
      let rooms = { ...item.fields, images, id };
      return rooms;
    });
    return tempItem;
  };

  getRoom = id => {
    const rooms = this.state.rooms;
    const room = rooms.find(room => room.slug === id);
    return room;
  };
  handleChange = e => {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value }, this.filterRooms);
  };
  filterRooms = () => {
    let {
      rooms,
      type,
      capacity,
      price,
      minSize,
      maxSize,
      breakfast,
      pets
    } = this.state;

    // get all rooms
    let tempRooms = [...rooms];

    // covert capacity string to number
    capacity = parseInt(capacity);

    // convert price string to number
    price = parseInt(price);

    // filter rooms by type
    if (type !== "all") {
      tempRooms = tempRooms.filter(room => room.type === type);
    }

    // filter rooms by capacity
    if (capacity !== 1) {
      tempRooms = tempRooms.filter(room => room.capacity === capacity);
    }

    // filter rooms by price
    tempRooms = tempRooms.filter(room => room.price <= price);

    // filter rooms by size
    tempRooms = tempRooms.filter(
      room => room.size >= minSize && room.size <= maxSize
    );

    // filter rooms by breakfast
    if (breakfast) {
      tempRooms = tempRooms.filter(room => room.breakfast === breakfast);
    }

    // filter rooms by pets
    if (pets) {
      tempRooms = tempRooms.filter(room => room.pets === pets);
    }
    // change state
    this.setState({ sortedRooms: tempRooms });
  };
  render() {
    return (
      <RoomContext.Provider
        value={{
          ...this.state,
          getRoom: this.getRoom,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </RoomContext.Provider>
    );
  }
}

const RoomConsumer = RoomContext.Consumer;

export { RoomProvider, RoomConsumer, RoomContext };
