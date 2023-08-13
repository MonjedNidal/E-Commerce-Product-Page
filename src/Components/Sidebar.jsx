import "../css/Sidebar.css";
import CloseIcon from "../images/icon-close.svg";
// eslint-disable-next-line react/prop-types
function Sidebar({ className, setIsShowSideBar }) {
  return (
    <div className={`sidebar position-absolute ${className}`}>
      <img
        src={CloseIcon}
        alt=""
        className="closeIcon"
        onClick={() => {
          setIsShowSideBar(false);
        }}
      />
      <div className="navLinks">
        <a href="#">Collections</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
}

export default Sidebar;
