import "./card-list.styles.css";
import React from "react";

import Card from "../card/Card";

const CardListComponent = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardListComponent;
