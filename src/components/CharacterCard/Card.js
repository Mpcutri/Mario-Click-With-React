import React from "react";
import "./Card.css";

const Card = props => (
  <div onClick={() => props.shuffle(props.name)} className="remove">
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Occupation:</strong> {props.occupation}
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Card;
