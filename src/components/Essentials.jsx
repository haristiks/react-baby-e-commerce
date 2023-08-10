import React, { useContext } from "react";
import { productList } from "../contests/productsList";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

function Essentials() {
  const { allproducts } = useContext(productList);
  const essentials = allproducts.filter(
    (product) => product.type === "essentials"
  );
  return (
    <>
      <NavigationBar />
      <div className="product-card-container">
        {essentials.map((product, index) => (
          <div className=" product-card" key={index}>
            <img
              src={product.src}
              alt={product.name}
              className="product-image"
            />
            <h3 className="product-name">{product.name}</h3>
            <div className="product-rating">
              {/* {Array.from({ length: rating }).map((_, index) => ( */}
              <span key={index} role="img" aria-label="star">
                ⭐⭐⭐⭐⭐
              </span>
              {/* ))} */}
              <p className="product-price">₹{product.price2}</p>
            </div>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Essentials;
