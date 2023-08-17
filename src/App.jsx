import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import { Products } from "./assets/Products";
import { useState } from "react";
import { productList } from "./contests/productsList";
import Essentials from "./components/Essentials";
import Clothing from "./components/Clothing";
import Footwares from "./components/Footwares";
import Toys from "./components/Toys";
import { cartcontext } from "./contests/cart";
import ShoppingCart from "./cards/ShoppingCart";
import Produtpage from "./components/Produtpage";
import { DummyUser } from "./assets/DummyUser";
import { userinfoContext } from "./contests/userinformation";
import { loginContext } from "./contests/LoginStatus";
import Allproducts from "./cards/Allproducts";
import { SearchContext } from "./contests/SearchContext";
import AdminPage from "./components/AdminPage";


function App() {
  const [allproducts, setProducts] = useState(Products);
  const [cartitems, setCartitems] = useState([]);
  const [userData, setUserData] = useState(DummyUser);
  const [loginStatus, setLoginStatus] = useState(false);
  const [searchitem, setSearchitem] = useState("");
  const [loginedUser, setLoginedUser] = useState("");
  const [adminLoggedIn, setAdminLoggedIn] = useState(false);

  return (
    <>
      <productList.Provider value={{ allproducts, setProducts }}>
        <cartcontext.Provider value={{ cartitems, setCartitems }}>
          <userinfoContext.Provider value={{ userData, setUserData }}>
            <loginContext.Provider
              value={{
                loginStatus,
                setLoginStatus,
                loginedUser,
                setLoginedUser,
                setAdminLoggedIn,
                adminLoggedIn,
              }}
            >
              <SearchContext.Provider value={{ searchitem, setSearchitem }}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/registration-page" element={<SignUp />} />
                  <Route path="/login-page" element={<Login />} />
                  <Route path="/essentials" element={<Essentials />} />
                  <Route path="/clothing" element={<Clothing />} />
                  <Route path="/footwares" element={<Footwares />} />
                  <Route path="/toys" element={<Toys />} />
                  <Route path="/shopping-cart" element={<ShoppingCart />} />
                  <Route path="/productpage/:id" element={<Produtpage />} />
                  <Route path="/allproducts" element={<Allproducts />} />
                  {adminLoggedIn ? (
                    <Route path="/admin" element={<AdminPage />} />
                  ) : null}
                </Routes>
              </SearchContext.Provider>
            </loginContext.Provider>
          </userinfoContext.Provider>
        </cartcontext.Provider>
      </productList.Provider>
    </>
  );
}

export default App;
