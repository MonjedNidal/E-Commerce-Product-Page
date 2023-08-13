import { useState } from "react";
import Minus from "../images/icon-minus.svg";
import Plus from "../images/icon-plus.svg";
import WhiteCart from "../images/icon-white-cart.svg";
import ProductImages from "./ProductImages";
// eslint-disable-next-line react/prop-types
function ProductPage({ setImageZoomToggle, setCartContent }) {
  const [itemsCounter, setItemsCounter] = useState(0);

  const handleItemsCounterChanged = (operation) => {
    if (operation === "minus") {
      if (itemsCounter > 0) {
        setItemsCounter(itemsCounter - 1);
      }
    } else {
      setItemsCounter(itemsCounter + 1);
    }
  };

  const handleAddToCart = () => {
    if (itemsCounter > 0) {
      setCartContent(itemsCounter);
    }
  };

  return (
    <main className="d-flex justify-items-center align-items-center">
      <ProductImages setImageZoomToggle={setImageZoomToggle} />
      <div className="productText">
        <span className="company">Sneaker Company</span>
        <h1> Fall Limited Edition Sneakers</h1>
        <p className="description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="d-flex align-items-center">
          <span className="price">$125.00</span>
          <span className="sale">50%</span>
        </div>
        <span className="oldPrice">$250.00</span>
        <div className="d-flex align-items-center">
          <div className="numberOfItems d-flex align-items-center">
            <div
              onClick={() => {
                handleItemsCounterChanged("minus");
              }}
              className="minus"
            >
              <img src={Minus} />
            </div>
            <span>{itemsCounter}</span>
            <div
              className="plus"
              onClick={() => {
                handleItemsCounterChanged("plus");
              }}
            >
              <img src={Plus} />
            </div>
          </div>
          <a
            className="d-flex align-items-center justify-content-center"
            href="#"
            onClick={() => {
              handleAddToCart();
            }}
          >
            <img src={WhiteCart} />
            Add to cart
          </a>
        </div>
      </div>
    </main>
  );
}

export default ProductPage;
