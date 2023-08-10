import React from "react";
import { Link } from "react-router-dom";

function CardItems({ url, title, onViewMoreClick }) {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <h2>{title}</h2>
      <Link to={`/viewMoreData?title=${encodeURIComponent(title)}`} >
        <button>View More</button>
      </Link>
    </div>
  );
}

export default CardItems;

