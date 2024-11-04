import "./ProductList.css";
import { useState, useEffect } from "react";

export const ProductList = () => {

  const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:8000/products");
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, [url]);

  return (
    <section>
        <div className="filter">
            <button className="available" onClick={()=> setUrl("http://localhost:8000/products")}>All</button>
            <button onClick={()=> setUrl("http://localhost:8000/products?available=true")}>In Stock</button>
        </div>

      {products.map((product) => (
        <div className="card">
          <p className="id">{product.id}</p>
          <p className="name">{product.name}</p>
          <p className="info">
            <span>€{product.price}</span>
            <span className={product.available ? "available" : "unavailable"}>
              {product.available}
            </span>
          </p>
        </div>
      ))}
    </section>
  );
};
