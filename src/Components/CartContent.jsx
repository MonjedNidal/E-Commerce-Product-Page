import Thumbnail1 from "../images/image-product-1-thumbnail.jpg";
import DeleteIcon from "../images/icon-delete.svg";
// eslint-disable-next-line react/prop-types, no-unused-vars
function CartContent({ cartContent, setCartContent }) {
  return (
    <div className="cart  position-absolute">
      <h5>Cart</h5>
      {cartContent === 0 ? (
        <div className="cartContent d-flex justify-content-center align-items-center">
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div className="filledCartContent p-4">
          <div className="d-flex justify-content-between align-items-center">
            <img width={70} src={Thumbnail1} alt="" />
            <div>
              <p>Fall Limited Edition Sneakers</p>
              <span>
                $125.00 x {cartContent}{" "}
                <span className="totalPrice">{`$${cartContent * 125}`}</span>
              </span>
            </div>
            <img
              className="deleteIcon"
              src={DeleteIcon}
              onClick={() => {
                setCartContent(0);
              }}
            />
          </div>
          <a className="checkoutBtn" href="#">
            Checkout
          </a>
        </div>
      )}
    </div>
  );
}

export default CartContent;
