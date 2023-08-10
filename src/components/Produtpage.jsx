import React, { useContext } from "react";
import { productList } from "../contests/productsList";
import { useNavigate, useParams } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import { cartcontext } from "../contests/cart";
import { loginContext } from "../contests/LoginStatus";
import Footer from "./Footer";

export default function Produtpage() {
  const { allproducts } = useContext(productList);
  const { cartitems, setCartitems } = useContext(cartcontext);
  const { loginStatus } = useContext(loginContext);
  const navigate = useNavigate();

  const { id } = useParams();
  const product = allproducts.filter(
    (products) => products.id === parseInt(id)
  );

  const addToCart = () => {
    if (loginStatus) {
      setCartitems(() => [...cartitems, ...product]);
    } else {
      alert("please login ");
    }
  };

  return (
    <>
      <NavigationBar />
      <div className="single-product-container">
        <div className="single-product-image">
          <img src={product[0].src} alt="" />
        </div>

        <div className="product-description">
          <h2>{product[0].name}</h2>
          <ul>
            <li>Type : {product[0].type}</li>
            <li>Size : s</li>
            <li>Prize : {product[0].price2}</li>
            <li>Availability : instock</li>
            <li>
              Quantity <button className="quantity-btn">-</button>
              <span>1</span>
              <button className="quantity-btn">+</button>
            </li>
            <li>
              <button onClick={addToCart}>Add to Cart</button>
              <button
                onClick={() => {
                  navigate("/shopping-cart");
                }}
              >
                Buy Now
              </button>
            </li>
          </ul>
          <p>{product[0].description}</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
