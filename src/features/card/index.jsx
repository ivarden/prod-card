import React, { useState } from "react";
import { Link } from "react-router-dom";
import Rating from "./rating";
import s from "./Card.module.scss";

export default function Card({ product }) {
  const [sold, setSold] = useState(false);

  const onclick = () => {
    setSold((prev) => !prev);
  };

  return (
    <div className={s.wrap}>
      <div className={s.picture}>
        <img
          src={product.imgUrl || "https://via.placeholder.com/500.png"}
          alt={product.name || "name"}
        />
        <div className={s.btnWrap}>
          {!sold && <button onClick={onclick}>Add to Cart</button>}
          {sold && <button>SOLD</button>}
        </div>
      </div>
      <h1>{product.name || "Title"}</h1>
      <span className={s.price}>{product.price || "1$"}</span>
      <Rating rating={product.rating || 0} />
    </div>
  );
}
