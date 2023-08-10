import React,{useContext} from "react";
import "./Home.css";
import NavigationBar from "./NavigationBar";
import Header from "./Header";
import Footer from "./Footer";
import HeaderSection1 from "./HeaderSection1";
import { productList } from "../contests/productsList";
import { useNavigate } from "react-router-dom";


function Home() {
  const {allproducts}=useContext(productList);
  const navigate = useNavigate();
  return (
    <div>
      <NavigationBar />
      <Header />
      <HeaderSection1 />
      <div className="product-card-container">
        {allproducts.map((product, index) => (
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
            <button
              className="add-to-cart-button"
              onClick={() => {
                navigate(`/productpage/${product.id}`);
              }}
            >
              View More
            </button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
