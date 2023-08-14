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

function AdminPage() {
  const { allproducts, setProducts } = useContext(productList);
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

  // .................... For deleting a Product..........................

  const handleDlt = (id) => {
    const afterRemoved = allproducts.filter(
      (product) => product.id != parseInt(id)
    );
    setProducts(afterRemoved);
  };

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
            setAdminLoggedIn(false)
            window.location.reload(false);
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
                Admin Home
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem>
              <MDBTabsLink
                onClick={() => handleVerticalClick("tab2")}
                active={verticalActive === "tab2"}
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
              Home content
            </MDBTabsPane>
            <MDBTabsPane show={verticalActive === "tab2"}>
              <MDBTable>
                <MDBTableHead>
                  <tr className="table-dark">
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Password</th>
                  </tr>
                </MDBTableHead>
                <MDBTableBody>
                  {userData.map((data, index) => (
                    <tr key={index}>
                      <th scope="row">{data.Name}</th>
                      <td>{data.email}</td>
                      <td>{data.password}</td>
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
                  <MDBTable align="middle">
                    <MDBTableHead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      {toys.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src={item.src}
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                              />
                              <div className="ms-3">
                                <p className="fw-bold mb-1">{item.name}</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">{item.description}</p>
                          </td>
                          <td>
                            <MDBBadge color="success" pill>
                              ₹ {item.price2}
                            </MDBBadge>
                          </td>
                          <td>
                            <MDBBtn color="link" rounded size="sm">
                              Edit
                            </MDBBtn>
                          </td>
                          <td>
                            <MDBBtn
                              color="link"
                              rounded
                              size="sm"
                              onClick={() => handleDlt(item.id)}
                            >
                              DLT
                            </MDBBtn>
                          </td>
                        </tr>
                      ))}
                    </MDBTableBody>
                  </MDBTable>
                </MDBTabsPane>
                <MDBTabsPane show={justifyActive === "tab2"}>
                  <MDBTable align="middle">
                    <MDBTableHead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      {clothes.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src={item.src}
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                              />
                              <div className="ms-3">
                                <p className="fw-bold mb-1">{item.name}</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">{item.description}</p>
                          </td>
                          <td>
                            <MDBBadge color="success" pill>
                              ₹ {item.price2}
                            </MDBBadge>
                          </td>
                          <td>
                            <MDBBtn color="link" rounded size="sm">
                              Edit
                            </MDBBtn>
                          </td>
                          <td>
                            <MDBBtn
                              color="link"
                              rounded
                              size="sm"
                              onClick={() => handleDlt(item.id)}
                            >
                              DLT
                            </MDBBtn>
                          </td>
                        </tr>
                      ))}
                    </MDBTableBody>
                  </MDBTable>
                </MDBTabsPane>
                <MDBTabsPane show={justifyActive === "tab3"}>
                  <MDBTable align="middle">
                    <MDBTableHead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      {essentials.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src={item.src}
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                              />
                              <div className="ms-3">
                                <p className="fw-bold mb-1">{item.name}</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">{item.description}</p>
                          </td>
                          <td>
                            <MDBBadge color="success" pill>
                              ₹ {item.price2}
                            </MDBBadge>
                          </td>
                          <td>
                            <MDBBtn color="link" rounded size="sm">
                              Edit
                            </MDBBtn>
                          </td>
                          <td>
                            <MDBBtn
                              color="link"
                              rounded
                              size="sm"
                              onClick={() => handleDlt(item.id)}
                            >
                              DLT
                            </MDBBtn>
                          </td>
                        </tr>
                      ))}
                    </MDBTableBody>
                  </MDBTable>
                </MDBTabsPane>
                <MDBTabsPane show={justifyActive === "tab4"}>
                  <MDBTable align="middle">
                    <MDBTableHead>
                      <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Description</th>
                        <th scope="col">Price</th>
                        <th scope="col">Edit</th>
                        <th scope="col">Delete</th>
                      </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                      {footwares.map((item) => (
                        <tr key={item.id}>
                          <td>
                            <div className="d-flex align-items-center">
                              <img
                                src={item.src}
                                alt=""
                                style={{ width: "45px", height: "45px" }}
                                className="rounded-circle"
                              />
                              <div className="ms-3">
                                <p className="fw-bold mb-1">{item.name}</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <p className="fw-normal mb-1">{item.description}</p>
                          </td>
                          <td>
                            <MDBBadge color="success" pill>
                              ₹ {item.price2}
                            </MDBBadge>
                          </td>
                          <td>
                            <MDBBtn color="link" rounded size="sm">
                              Edit
                            </MDBBtn>
                          </td>
                          <td>
                            <MDBBtn
                              color="link"
                              rounded
                              size="sm"
                              onClick={() => handleDlt(item.id)}
                            >
                              DLT
                            </MDBBtn>
                          </td>
                        </tr>
                      ))}
                    </MDBTableBody>
                  </MDBTable>
                </MDBTabsPane>
                <form>
                  <MDBInput
                    className="mb-4"
                    type="number"
                    id="productid"
                    label="Product id"
                  />
                  <MDBInput
                    className="mb-4"
                    type="text"
                    id="productname"
                    label="Product name "
                  />
                  <MDBInput
                    className="mb-4"
                    type="text"
                    id="productcatogory"
                    label="Product Category"
                  />
                  <MDBInput label="image URL" id="imageurl" type="url" />
                  <MDBInput
                    className="mb-4"
                    type="text"
                    id="productprice"
                    label="Product price "
                  />
                  <MDBInput
                    className="mb-4"
                    type="number"
                    id="sellingprice"
                    label="Selling Price"
                  />
                  <MDBTextArea
                    label="Product Description"
                    id="productdescription"
                    rows={4}
                  />

                  <MDBBtn type="submit" block>
                    ADD PRODUCT
                  </MDBBtn>
                </form>
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
