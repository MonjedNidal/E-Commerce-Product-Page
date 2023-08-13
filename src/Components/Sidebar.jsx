import "../css/Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar position-absolute">
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
