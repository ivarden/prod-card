import React from "react";
import Rating from "./rating";
import s from "./Card.module.scss";

export default function Card({ product }) {
  return (
    <div className={s.wrap}>
      <div className={s.picture}>
        <img
          src={product.imgUrl || "https://via.placeholder.com/500.png"}
          alt={product.name || "name"}
        />
        <div className={s.btnWrap}>
          <button>Add to Cart</button>
        </div>
      </div>
      <h1>{product.name || "Title"}</h1>
      <span className={s.price}>{product.price || "1$"}</span>
      <Rating rating={product.rating || 0} />
    </div>
  );
}
