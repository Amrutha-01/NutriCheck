import React from "react";
import "./index.css";

function CardItems(props) {
  return (
    <div className="card">
      <img src={props.url} />
      <h2>{props.title}</h2>
      <button>View More</button>
    </div>
  );
}

export default CardItems;
