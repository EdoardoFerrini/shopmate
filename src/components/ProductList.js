import "./ProductList.css";
import { useState } from "react";
import { useFetch } from "../hooks/useFetch";
export const ProductList = () => {
  const [url, setUrl] = useState("http://localhost:8000/products");
  const { data, loading, error } = useFetch(url);

  return (
    <section>
      <div className="filter">
        <button
          className="available"
          onClick={() => setUrl("http://localhost:8000/products")}
        >
          All
        </button>
        <button
          onClick={() =>
            setUrl("http://localhost:8000/products?available=true")
          }
        >
          In Stock
        </button>
      </div>
      {loading && <p>loading products...</p>}
      {error && <p>{error}</p>}
      {data && data.map((product) => (
        <div key={product.id} className="card">
          <p className="id">{product.id}</p>
          <p className="name">{product.name}</p>
          <p className="info">
            <span>€{product.price}</span>
            <span className={product.available ? "available" : "unavailable"}>
              {product.available ? "In Stock" : "not in stock"}
            </span>
          </p>
        </div>
      ))}
    </section>
  );
};
