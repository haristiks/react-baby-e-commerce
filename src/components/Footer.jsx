import React from "react";
import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter className=" text-lg-left footer-section">
      <MDBContainer className="p-4">
        <MDBRow>
          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h1>Baby Zone</h1>

            <ul className="list-unstyled mb-0">
              <li>
                <p>
                  Nunc consequat interdum varius sit amet mattis. Ac tortor
                  vitae purus faucibus ornare.
                </p>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h4>We are here</h4>

            <ul className="list-unstyled">
              <li>
                <p>
                  No: 58 A,East Madison
                  <br /> Street,
                  <br />
                  Baltimore, MD, USA
                  <br /> 4508
                </p>
              </li>
              <li>
                <button>View on Map</button>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h4>Contact Us</h4>

            <ul className="list-unstyled mb-0">
              <li>
                <button>000 - 123 - 456789</button>
              </li>
              <li>
                <button>info@babyzone.com</button>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
            <h4>Get us on social</h4>

            <ul className="list-unstyled ul-4" >
              <li>
                <button><i className="fa-brands fa-facebook-f"></i></button>
                <button><i className="fa-brands fa-pinterest"></i></button>
                <button><i className="fa-brands fa-instagram"></i></button>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className="footer-Copyright">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="text-dark" href="https://mdbootstrap.com/">
          babyzone
        </a>
      </div>
    </MDBFooter>
  );
}
