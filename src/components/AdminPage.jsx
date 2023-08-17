import React, { useContext, useState } from "react";
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBRow,
  MDBCol,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
  MDBBadge,
  MDBBtn,
  MDBInput,
  MDBTextArea,
} from "mdb-react-ui-kit";
import { productList } from "../contests/productsList";
import { userinfoContext } from "../contests/userinformation";
import { useNavigate } from "react-router-dom";
import AddProducts from "./AddProducts";
import AdminProductListing from "./AdminProductListing";

function AdminPage() {
  const { allproducts } = useContext(productList);
  const { userData, setAdminLoggedIn } = useContext(userinfoContext);

  const navigate = useNavigate();
  const toys = allproducts.filter((product) => product.type === "toys");
  const clothes = allproducts.filter((product) => product.type === "cloths");
  const essentials = allproducts.filter(
    (product) => product.type === "essentials"
  );
  const footwares = allproducts.filter(
    (product) => product.type === "footware"
  );

  // .................... vertical switch..........................

  const [verticalActive, setVerticalActive] = useState("tab1");

  const handleVerticalClick = (value) => {
    if (value === verticalActive) {
      return;
    }

    setVerticalActive(value);
  };

  // .................... vertical switch..........................
  // .................... Horizondal switch..........................

  const [justifyActive, setJustifyActive] = useState("tab1");

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  // .................... Horizondal switch..........................

  return (
    <div className="admin-container">
      <div className=" admin-header">
        <h1>Admin Dashboard</h1>
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          View Site
        </button>
        <button
          onClick={() => {
            navigate("/login-page");
            window.location.reload(false);
            setAdminLoggedIn(false);
          }}
        >
          Log out
        </button>
      </div>
      <MDBRow>
        <MDBCol size="2">
          <MDBTabs className="flex-column text-center">
            
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("tab1")}
                active={verticalActive === "tab1"}
              >
                User Section
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("tab3")}
                active={verticalActive === "tab3"}
              >
                Product Section
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("tab4")}
                active={verticalActive === "tab4"}
              >
                Add New Products
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
        </MDBCol>
        <MDBCol size="10">
          <MDBTabsContent>
            
            <MDBTabsPane show={verticalActive === "tab1"}>
              <MDBTable>
                <MDBTableHead>
                  <tr className="table-dark">
                  <th scope="col">Sl No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {userData.map((data, index) => (
                    <tr key={index}>
                      <th scope="row">{index+1}</th>
                      <td>{data.Name}</td>
                      <td>{data.email}</td>
                    </tr>
                  ))}
                </MDBTableBody>
              </MDBTable>
            </MDBTabsPane>
            <MDBTabsPane show={verticalActive === "tab3"}>
              <MDBTabs justify className="mb-3">
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleJustifyClick("tab1")}
                    active={justifyActive === "tab1"}
                  >
                    Toys
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleJustifyClick("tab2")}
                    active={justifyActive === "tab2"}
                  >
                    Clothing
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleJustifyClick("tab3")}
                    active={justifyActive === "tab3"}
                  >
                    Essentials
                  </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                  <MDBTabsLink
                    onClick={() => handleJustifyClick("tab4")}
                    active={justifyActive === "tab4"}
                  >
                    Footwares
                  </MDBTabsLink>
                </MDBTabsItem>
              </MDBTabs>

              <MDBTabsContent>
                <MDBTabsPane show={justifyActive === "tab1"}>
                  <AdminProductListing category={toys} />
                </MDBTabsPane>
                <MDBTabsPane show={justifyActive === "tab2"}>
                  <AdminProductListing category={clothes} />
                </MDBTabsPane>
                <MDBTabsPane show={justifyActive === "tab3"}>
                  <AdminProductListing category={essentials} />
                </MDBTabsPane>
                <MDBTabsPane show={justifyActive === "tab4"}>
                  <AdminProductListing category={footwares} />
                </MDBTabsPane>
              </MDBTabsContent>
            </MDBTabsPane>
            <MDBTabsPane show={verticalActive === "tab4"}>
              <AddProducts />
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

export default AdminPage;
