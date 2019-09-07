import React, { Component } from "react";
import Title from "../Title/Title";
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from "react-icons/fa";
import "./Services.css";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCocktail />,
        title: "free cocktails",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
      },
      {
        icon: <FaHiking />,
        title: "Endless Hihing",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
      },
      {
        icon: <FaShuttleVan />,
        title: "free shufttle",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
      },
      {
        icon: <FaBeer />,
        title: "strongs beer",
        info:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!"
      }
    ]
  };

  render() {
    const content = this.state.services.map((item, index) => (
      <article key={index} className="service">
        <span>{item.icon}</span>
        <h4>{item.title}</h4>
        <p>{item.info}</p>
      </article>
    ));
    return (
      <section className="services">
        <Title title="services" />
        <div className="services-center">{content}</div>
      </section>
    );
  }
}
