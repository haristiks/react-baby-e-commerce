import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  // MDBBtn,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBCollapse,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { cartcontext } from "../contests/cart";

import { loginContext } from "../contests/LoginStatus";
import SearchPage from "../cards/SearchPage";
import { SearchContext } from "../contests/SearchContext";
import { userinfoContext } from "../contests/userinformation";

function NavigationBar() {
  const navigate = useNavigate();
  const { cartitems, setCartitems } = useContext(cartcontext);
  const [showBasic, setShowBasic] = useState(false);

  const { loginStatus, setLoginStatus, loginedUser } = useContext(loginContext);
  const { userData } = useContext(userinfoContext);

  //  ......................Search Section...................
  const { setSearchitem } = useContext(SearchContext);
  const [showPopup, setShowPopup] = useState(false);

  const handleSearch = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  //  ......................Search Section...................

  return (
    <MDBNavbar expand="lg" light className="nav-container-main">
      <MDBContainer fluid className="container-fluid">
        <MDBNavbarBrand
          onClick={() => {
            navigate("/");
          }}
          className="brand-name"
        >
          <h1>Baby Zone</h1>
        </MDBNavbarBrand>

        <MDBNavbarToggler
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setShowBasic(!showBasic)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>

        <MDBCollapse navbar show={showBasic}>
          <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
            <MDBNavbarItem>
              <MDBNavbarLink
                active
                aria-current="page"
                className="home-on-nav"
                onClick={() => {
                  navigate("/");
                }}
              >
                Home
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink
                onClick={() => {
                  navigate("/allproducts");
                }}
              >
                Products
              </MDBNavbarLink>
            </MDBNavbarItem>

            <MDBNavbarItem>
              <MDBDropdown>
                <MDBDropdownToggle tag="a" className="nav-link" role="button">
                  Categories
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem>
                    <Link to={"/toys"}>Toys</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to={"/clothing"}>Clothing</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to={"/essentials"}>Essentials</Link>
                  </MDBDropdownItem>
                  <MDBDropdownItem>
                    <Link to={"/footwares"}>Footwares</Link>
                  </MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </MDBNavbarItem>

            {loginStatus ? (
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    {loginedUser} <i className="fa-solid fa-user"></i>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBNavbarLink
                      onClick={() => {
                        setLoginStatus(!loginStatus);
                        setCartitems([]);
                      }}
                    >
                      Log out
                    </MDBNavbarLink>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            ) : (
              <MDBNavbarItem>
                <MDBDropdown>
                  <MDBDropdownToggle tag="a" className="nav-link" role="button">
                    <i className="fa-solid fa-user"></i>
                  </MDBDropdownToggle>
                  <MDBDropdownMenu>
                    <MDBNavbarLink
                      onClick={() => {
                        navigate("/login-page");
                      }}
                    >
                      Login
                    </MDBNavbarLink>
                  </MDBDropdownMenu>
                </MDBDropdown>
              </MDBNavbarItem>
            )}
          </MDBNavbarNav>

          {loginStatus ? (
            <i
              className="fa-solid fa-baby-carriage"
              onClick={() => {
                navigate("/shopping-cart");
              }}
            >
              <sup>{cartitems.length > 0 ? cartitems.length : null}</sup>
            </i>
          ) : null}

          <input
            type="search"
            className="form-control"
            placeholder="Type query"
            aria-label="Search"
            onChange={(e) => {
              setSearchitem(e.target.value.toLocaleLowerCase());
            }}
          />
          <i
            className="fa-solid fa-magnifying-glass"
            onClick={handleSearch}
          ></i>
          <div>{showPopup && <SearchPage onClose={handleClosePopup} />}</div>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}

export default NavigationBar;
