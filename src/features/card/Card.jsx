import React from "react";
import Rating from "./rating";
import s from "./Card.module.scss";

export default function Card({ img, title, price, rating }) {
  console.log(img)
  return (
    <div className={s.wrap}>
      <div className={s.picture}>
        <img src={img} alt={title} />
        <div className={s.btnWrap}>
          <button>Add to Cart</button>
        </div>
      </div>
      <h1>Title</h1>
      <span className={s.price}>Price</span>
      <Rating rating={0} />
    </div>
  );
}
