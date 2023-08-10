import Logo from "../images/logo.svg";
import Cart from "../images/icon-cart.svg";
import Avatar from "../images/image-avatar.png";
function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid d-flex justify-content-between">
          <div className="navLinks">
            <img src={Logo} className="logo" />
            <a href="#">Collections</a>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
          </div>
          <div className="d-flex align-items-center">
            <img src={Cart} className="cart" />
            <img height={45} src={Avatar} />
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
