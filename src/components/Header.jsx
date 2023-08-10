import React from "react";
import { MDBCarousel, MDBCarouselItem } from "mdb-react-ui-kit";

function Header() {
  return (
    <MDBCarousel>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://cudly-theme.myshopify.com/cdn/shop/files/slide_346271b5-3202-4481-9949-8eaadd59968e.jpg?v=1635921222'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src='https://cudly-theme.myshopify.com/cdn/shop/files/1_7ec8e20f-db11-428a-a978-e6f9761f86f7.jpg?v=1640316542'
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src='https://cudly-theme.myshopify.com/cdn/shop/files/slide_346271b5-3202-4481-9949-8eaadd59968e.jpg?v=1635921222'
        alt='...'
      />
    </MDBCarousel>
  );
}

export default Header;
