import "./ProductList.css";
import { useState, useEffect } from "react";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  useEffect(() => {
    fetch("http://localhost:8000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section>
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
