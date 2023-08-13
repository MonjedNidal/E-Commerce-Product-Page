import "../css/NavBar.css";
import Logo from "../images/logo.svg";
import MenuIcon from "../images/icon-menu.svg";
import Cart from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";
import CartContent from "./CartContent";
import { useState } from "react";
// eslint-disable-next-line react/prop-types
function NavBar({ cartContent, setCartContent, setIsShowSideBar }) {
  const [isShowCard, setIsShowCard] = useState(false);
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <div
              className="menuIcon"
              onClick={() => {
                setIsShowSideBar(true);
              }}
            >
              <img src={MenuIcon} alt="" />
            </div>
            <img src={Logo} className="logo" />
            <div className="navLinks">
              <a href="#">Collections</a>
              <a href="#">Men</a>
              <a href="#">Women</a>
              <a href="#">About</a>
              <a href="#">Contact</a>
            </div>
          </div>
          <div className="position-relative d-flex flex-column justify-content-center">
            <div className="position-relative d-flex align-items-center">
              {cartContent ? (
                <span className="numOfItems">{cartContent}</span>
              ) : (
                ""
              )}
              <img
                src={Cart}
                className="cartIcon"
                onClick={() => {
                  setIsShowCard(!isShowCard);
                }}
              />
              <img className="avatar" height={45} src={Avatar} />
            </div>
            {isShowCard ? (
              <CartContent
                cartContent={cartContent}
                setCartContent={setCartContent}
              />
            ) : (
              ""
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
