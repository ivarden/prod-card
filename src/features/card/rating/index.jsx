import React, { useState, useCallback, useEffect } from "react";
import Star from "./star";
import s from "./Rating.module.scss";

export default function Rating({ rating = 0 }) {
  const [ratingLocal, setRatingLocal] = useState(rating);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    setRatingLocal(rating);
  }, [rating]);
  const onMouseEnter = useCallback((id) => {
    setHoverRating(id);
  }, []);

  const onMouseLeave = useCallback((id) => {
    setHoverRating(0);
  }, []);

  const handleSelectRating = useCallback((id) => {
    setRatingLocal(id);
  }, []);

  return (
    <div className={s.wrap}>
      {[1, 2, 3, 4, 5].map((idx) => (
        <Star
          key={idx}
          id={idx}
          rating={ratingLocal}
          hoverRating={hoverRating}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          handleSelectRating={handleSelectRating}
        />
      ))}
    </div>
  );
}
