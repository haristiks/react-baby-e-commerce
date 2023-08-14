import React, { useContext } from "react";
import { MDBBtn, MDBInput, MDBTextArea } from "mdb-react-ui-kit";
import { productList } from "../contests/productsList";

function AddProducts() {
  const { allproducts, setProducts } = useContext(productList);
  const handleSubmit = (e) => {
    e.preventDefault();
    const purl = e.target.imageurl.value;
    const pname = e.target.productname.value;
    const pcategory = e.target.productcatogory.value;
    const pprice = e.target.productprice.value;
    const sprice = e.target.sellingprice.value;
    const pdesc = e.target.productdescription.value;

    setProducts(
      (p) =>
        (p = [
          ...allproducts,
          {
            id: allproducts.length + 1,
            name: pname,
            type: pcategory,
            src: purl,
            price: pprice,
            price2: sprice,
            description: pdesc,
            qty: 1,
          },
        ])
    );
  };
  return (
    <div style={{ padding: "50px" }}>
      <form onSubmit={handleSubmit}>
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
    </div>
  );
}

export default AddProducts;
