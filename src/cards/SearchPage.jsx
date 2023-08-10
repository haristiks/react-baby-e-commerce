import React, { useContext } from "react";
import { productList } from "../contests/productsList";
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../contests/SearchContext";


function SearchPage({ onClose }) {
    const navigate=useNavigate();
    const { allproducts } = useContext(productList);
    const {searchitem}=useContext(SearchContext);
    const matches = allproducts.filter((product) => product.name.toLowerCase().includes(searchitem));
    return (
      <>
        <div className="popup-container">
          {matches.length>0?matches.map((product, index) => (
            <div className=" search-popup" key={index}>
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
          )):<h1>No mathes Found</h1>}
          <i className="fa-solid fa-xmark" onClick={()=>{onClose()}}></i>
        </div>
      </>
    );
  }

export default SearchPage