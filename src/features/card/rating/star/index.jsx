import React, { useState, useEffect } from "react";
import Star from "./Star";

export default function Container({
  id,
  rating,
  onMouseEnter,
  onMouseLeave,
  hoverRating,
  handleSelectRating,
}) {
  const [fill, setFill] = useState(false);

  useEffect(() => {
    hoverRating >= id || rating >= id ? setFill(true) : setFill(false);
  }, [id, hoverRating, rating]);

  return (
    <div
      onMouseEnter={() => onMouseEnter(id)}
      onMouseLeave={onMouseLeave}
      onClick={() => handleSelectRating(id)}
      style={{cursor:'pointer'}}
    >
      <Star
        fill={fill ? "orange" : "white"}
        stroke={fill ? "orange" : "black"}
      />
    </div>
  );
}
