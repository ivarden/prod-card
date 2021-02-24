import React, { useEffect, useState } from "react";
// import { Counter } from "./features/counter/Counter";
import Card from "./features/card/";
import s from "./App.module.scss";
import data from "./data.json";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts((prev) => [...data]);
  }, []);

  return (
    <div className={s.app}>
      {/* <header className="App-header">{<Counter />}</header> */}
      {products.length > 0 ? (
        products.map((item, idx) => (
          <Card key={item.name + idx} product={item} />
        ))
      ) : (
        <h1>Sorry, there are no products!</h1>
      )}
    </div>
  );
}

export default App;
