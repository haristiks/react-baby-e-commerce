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

function AdminProductListing({ category }) {
  const { allproducts, setProducts } = useContext(productList);
  const [editor, setEditor] = useState(false);

  // .................... For deleting a Product..........................

  const handleDlt = (id) => {
    const afterRemoved = allproducts.filter(
      (product) => product.id != parseInt(id)
    );
    setProducts(afterRemoved);
  };

  // .................... For Editing a Product..........................

  const handleEDit = (id) => {
    allproducts.forEach((element) => {
      if (element.id === parseInt(id)) {
        setEditor(!editor);
      }
    });
  };
  const updateProduct = (e) => {
    e.preventDefault();

    const updatedProduct = allproducts.map((item) => {
      const pid = e.target.productid.value;
      const purl = e.target.imageurl.value || item.src;
      const pname = e.target.productname.value || item.name;
      const pcategory = e.target.productcatogory.value || item.type;
      const pprice = e.target.productprice.value || item.price;
      const sprice = e.target.sellingprice.value || item.price2;
      const pdesc = e.target.productdescription.value || item.description;
      if (item.id === parseInt(pid)) {
        return {
          ...item,
          id: pid,
          name: pname,
          type: pcategory,
          src: purl,
          price: pprice,
          price2: sprice,
          description: pdesc,
          qty: 1,
        };
      } else {
        return item;
      }
    });
    setProducts(updatedProduct);
    alert("product updated");
    setEditor(!editor);
  };

  return (
    <div>
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
          {category.map((item) => (
            <>
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
                  <MDBBtn
                    color="link"
                    rounded
                    size="sm"
                    onClick={() => {
                      handleEDit(item.id);
                    }}
                  >
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
              {editor ? (
                <tr key={item.id * 100}>
                  <td colSpan={5}>
                    <form onSubmit={updateProduct}>
                      <MDBInput
                        className="mb-4"
                        type="number"
                        id="productid"
                        label="Product id"
                        value={item.id}
                      />
                      <MDBInput
                        className="mb-4"
                        type="text"
                        id="productname"
                        label="Product name"
                      />
                      <MDBInput
                        className="mb-4"
                        type="text"
                        id="productcatogory"
                        label="Product Category"
                      />
                      <MDBInput
                        className="mb-4"
                        label="image URL"
                        id="imageurl"
                        type="url"
                      />
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
                      <MDBInput
                        className="mb-4"
                        type="text"
                        label="Product Description"
                        id="productdescription"
                      />
                      <MDBBtn type="submit" block>
                        UPDATE PRODUCT
                      </MDBBtn>
                    </form>
                  </td>
                </tr>
              ) : null}
            </>
          ))}
        </MDBTableBody>
      </MDBTable>
    </div>
  );
}

export default AdminProductListing;
