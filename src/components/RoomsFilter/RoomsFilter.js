import React from "react";
import "./RoomsFilter.css";
import { useContext } from "react";
import { RoomContext } from "../../context";
import { getUnique } from "./FilterMethods";
import Title from "../Title/Title";

const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    pets,
    breakfast
  } = context;

  // get unique Types
  let types = getUnique(rooms, "type");
  // add "all" to types PropTypes.array
  types = ["all", ...types];
  // conver types to jsx
  const typeOptions = types.map((item, index) => {
    return (
      <option key={index} type={item}>
        {item}
      </option>
    );
  });

  // get unique capacity
  let roomCapacity = getUnique(rooms, "capacity");
  // conver types to jsx
  const capacityOptions = roomCapacity.map((item, index) => {
    return (
      <option key={index} type={item}>
        {item}
      </option>
    );
  });
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* Start Select Type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            className="form-control"
            value={type}
            onChange={handleChange}
          >
            {typeOptions}
          </select>
        </div>
        {/*  End Select Type */}

        {/* Start Select Guest */}
        <div className="form-group">
          <label htmlFor="capacity">guest</label>
          <select
            name="capacity"
            id="capacity"
            className="form-control"
            value={capacity}
            onChange={handleChange}
          >
            {capacityOptions}
          </select>
        </div>
        {/*  End Select Guest */}

        {/* Start room Price */}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            id="price"
            className="form-control"
            min={minPrice}
            max={maxPrice}
            value={price}
            onChange={handleChange}
          />
        </div>
        {/* end room Price */}

        {/* Start Room Size */}
        <div className="form-group">
          <label htmlFor="size">room size [SQFT]</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/* End Room Size */}

        {/* Start Checkbox */}
        <div className="form-group">
          <div className="single-extra">
            <input
              type="checkbox"
              id="breakfast"
              name="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="single-extra">
            <input
              type="checkbox"
              id="pets"
              name="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* End Checkbox */}
      </form>
    </section>
  );
};

export default RoomsFilter;
