import "./ProductList.css";
import { useState, useEffect, useCallback} from "react";

export const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [url, setUrl] = useState("http://localhost:8000/products");

  const fetchProducts = useCallback(async () => {
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
  }, [url])

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

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

      {products.map((product) => (
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
