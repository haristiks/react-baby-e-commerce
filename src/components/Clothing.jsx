import React, { useContext } from "react";
import { productList } from "../contests/productsList";
import NavigationBar from "./NavigationBar";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

function Clothing() {
    const navigate=useNavigate();
  const { allproducts } = useContext(productList);
  const cloths = allproducts.filter((product) => product.type === "cloths");
  return (
    <>
      <NavigationBar />
      <div className="product-card-container">
        {cloths.map((product, index) => (
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
            <button className="add-to-cart-button" onClick={()=>{navigate(`/productpage/${product.id}`)}} >
              View More
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Clothing;
